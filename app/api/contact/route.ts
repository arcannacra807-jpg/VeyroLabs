import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Veyro Labs <kontakt@veyro-labs.com>',
    to: 'veyro-labs@gmx.de',
    replyTo: email,
    subject: `Neue Anfrage von ${name}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;background:#080808;color:#f5f5f3;padding:40px;border-radius:12px;">
        <div style="margin-bottom:32px;">
          <span style="color:#00FF88;font-weight:700;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;">Neue Anfrage</span>
          <h1 style="margin:8px 0 0;font-size:28px;font-weight:700;color:#ffffff;">Veyro Labs</h1>
        </div>
        <div style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;margin-bottom:16px;">
          <p style="margin:0 0 4px;font-size:11px;color:#555;text-transform:uppercase;letter-spacing:0.1em;">Name</p>
          <p style="margin:0;font-size:16px;color:#ffffff;font-weight:600;">${name}</p>
        </div>
        <div style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;margin-bottom:16px;">
          <p style="margin:0 0 4px;font-size:11px;color:#555;text-transform:uppercase;letter-spacing:0.1em;">E-Mail</p>
          <p style="margin:0;font-size:16px;color:#00FF88;font-weight:600;">${email}</p>
        </div>
        <div style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;margin-bottom:32px;">
          <p style="margin:0 0 4px;font-size:11px;color:#555;text-transform:uppercase;letter-spacing:0.1em;">Nachricht</p>
          <p style="margin:0;font-size:15px;color:#888;line-height:1.6;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
        <a href="mailto:${email}" style="display:inline-block;background:#00FF88;color:#080808;font-weight:700;font-size:14px;padding:14px 28px;border-radius:10px;text-decoration:none;">Direkt antworten →</a>
        <p style="margin:24px 0 0;font-size:12px;color:#555;">veyro-labs.com</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
