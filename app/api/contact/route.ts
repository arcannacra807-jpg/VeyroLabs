import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequests = new Map<string, { count: number; expiresAt: number }>();

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  // Clean up expired entries occasionally
  if (ipRequests.size > 500) {
    for (const [k, v] of ipRequests.entries()) {
      if (v.expiresAt <= now) ipRequests.delete(k);
    }
  }
  const entry = ipRequests.get(ip);
  if (!entry || entry.expiresAt <= now) {
    ipRequests.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  entry.count += 1;
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await req.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const website = typeof body.website === 'string' ? body.website.trim() : '';

    // Honeypot check: silently accept if filled by a spam bot
    if (website.length > 0) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    if (name.length > 100 || email.length > 200 || message.length > 3000) {
      return NextResponse.json({ error: 'Input exceeds maximum length' }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'Veyro Labs <kontakt@veyro-labs.com>',
      to: 'veyro-labs@gmx.de',
      replyTo: email,
      subject: `Neue Anfrage von ${name.replace(/[\r\n]/g, ' ')}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;background:#080808;color:#f5f5f3;padding:40px;border-radius:12px;">
          <div style="margin-bottom:32px;">
            <span style="color:#00FF88;font-weight:700;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;">Neue Anfrage</span>
            <h1 style="margin:8px 0 0;font-size:28px;font-weight:700;color:#ffffff;">Veyro Labs</h1>
          </div>
          <div style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;margin-bottom:16px;">
            <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">Name</p>
            <p style="margin:0;font-size:16px;color:#ffffff;font-weight:600;">${safeName}</p>
          </div>
          <div style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;margin-bottom:16px;">
            <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">E-Mail</p>
            <p style="margin:0;font-size:16px;color:#00FF88;font-weight:600;">${safeEmail}</p>
          </div>
          <div style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;margin-bottom:32px;">
            <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">Nachricht</p>
            <p style="margin:0;font-size:15px;color:#ccc;line-height:1.6;">${safeMessage}</p>
          </div>
          <a href="mailto:${encodeURIComponent(email)}" style="display:inline-block;background:#00FF88;color:#080808;font-weight:700;font-size:14px;padding:14px 28px;border-radius:10px;text-decoration:none;">Direkt antworten →</a>
          <p style="margin:24px 0 0;font-size:12px;color:#888;">veyro-labs.com</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: 'Delivery failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
