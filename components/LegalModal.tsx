'use client';

import { useEffect } from 'react';

interface LegalModalProps {
  page: 'impressum' | 'datenschutz';
  onClose: () => void;
}

function Impressum() {
  return (
    <div>
      <h2 className="text-2xl font-display font-bold text-white mb-6">Impressum</h2>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <div>
          <h3 className="text-base font-bold text-white mb-2">Angaben gemäß § 5 TMG</h3>
          <p>Arcan Bereket</p>
          <p>Im grünen Grunde 9</p>
          <p>22337 Hamburg</p>
          <p>Deutschland</p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Kontakt</h3>
          <p>Telefon: +49 176 5590599</p>
          <p>E-Mail: <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">veyro-labs@gmx.de</a></p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Umsatzsteuer</h3>
          <p>Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.</p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 MStV</h3>
          <p>Arcan Bereket</p>
          <p>Im grünen Grunde 9, 22337 Hamburg</p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
            Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Haftung für Links</h3>
          <p>
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
            Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
            Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Urheberrecht</h3>
          <p>
            Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
            Urheberrechtes bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur
            für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Widerrufsrecht</h3>
          <p>
            Veyro Labs richtet sich ausschließlich an Unternehmer, Gewerbetreibende und Selbstständige
            (B2B). Das gesetzliche Verbraucher-Widerrufsrecht gemäß § 312g BGB findet daher in der Regel
            keine Anwendung. Solltest du als Verbraucher i.S.d. § 13 BGB Leistungen beauftragen, gilt:
            Bei Dienstleistungen, mit deren Ausführung vor Ablauf der Widerrufsfrist begonnen wird,
            erlischt das Widerrufsrecht mit deiner ausdrücklichen Zustimmung und Bestätigung deiner
            Kenntnis des Erlöschens (§ 356 Abs. 4 BGB). Bei Fragen wende dich an:{' '}
            <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">veyro-labs@gmx.de</a>
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Meine E-Mail-Adresse findest du oben im Impressum. Ich bin nicht bereit oder verpflichtet,
            an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}

function Datenschutz() {
  return (
    <div>
      <h2 className="text-2xl font-display font-bold text-white mb-6">Datenschutzerklärung</h2>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <div>
          <h3 className="text-base font-bold text-white mb-2">1. Verantwortlicher</h3>
          <p>Arcan Bereket</p>
          <p>Im grünen Grunde 9, 22337 Hamburg</p>
          <p>E-Mail: <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">veyro-labs@gmx.de</a></p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">2. Hosting</h3>
          <p>
            Diese Website wird bei Vercel Inc. (340 Pine Street, Suite 701, San Francisco, CA 94104, USA)
            gehostet. Beim Aufruf der Website werden durch Vercel technische Zugriffsdaten (u.a. IP-Adresse,
            Zeitstempel, aufgerufene URL) in sogenannten Server-Logs verarbeitet. Dies erfolgt auf Grundlage
            von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
            Vercel ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen:{' '}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">3. Kontaktformular</h3>
          <p>
            Die über das Kontaktformular übermittelten Daten (Name, E-Mail-Adresse, Nachricht) werden
            bei Supabase (Supabase Inc., auf EU-Servern in Frankfurt/Main) gespeichert und ausschließlich
            zur Bearbeitung deiner Anfrage verwendet. Die Verarbeitung erfolgt auf Grundlage von
            Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Die Daten werden nicht an Dritte weitergegeben
            und nach Abschluss der Kommunikation gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">4. Schriftarten</h3>
          <p>
            Diese Website verwendet die Schriftarten Syne und Inter. Beide Schriftarten werden über
            next/font direkt vom eigenen Server bereitgestellt und nicht von externen Servern geladen.
            Es werden dabei keine Daten an Dritte übermittelt.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">5. Cookies und Tracking</h3>
          <p>
            Diese Website verwendet keine Tracking- oder Analyse-Cookies. Es werden keine Nutzungsprofile
            erstellt, kein Tracking durchgeführt und keine Daten für Werbezwecke verarbeitet.
            Technisch notwendige Cookies können durch den Hosting-Anbieter Vercel gesetzt werden.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">6. Deine Rechte</h3>
          <p>Du hast gegenüber mir folgende Rechte bezüglich deiner personenbezogenen Daten:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-3">
            Zur Ausübung deiner Rechte wende dich an:{' '}
            <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">veyro-labs@gmx.de</a>
          </p>
          <p className="mt-2">
            Du hast zudem das Recht, dich bei der zuständigen Aufsichtsbehörde zu beschweren.
            Für Hamburg ist das der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit:{' '}
            <a
              href="https://www.datenschutz.hamburg.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              www.datenschutz.hamburg.de
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">7. Aktualität</h3>
          <p>Stand: Mai 2026. Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen.</p>
        </div>
      </div>
    </div>
  );
}

export default function LegalModal({ page, onClose }: LegalModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center">
      <div className="absolute inset-0 bg-bg/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl border border-border m-4 mt-16 p-8 md:p-12">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center text-muted hover:text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {page === 'impressum' ? <Impressum /> : <Datenschutz />}
      </div>
    </div>
  );
}
