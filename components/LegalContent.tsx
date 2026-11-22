import React from 'react';

export type LegalPageType = 'impressum' | 'datenschutz' | 'widerruf';

export function ImpressumContent({ locale = 'de' }: { locale?: string }) {
  if (locale === 'en') {
    return (
      <div>
        <h2 className="text-2xl font-display font-bold text-white mb-6">Legal Notice (Impressum)</h2>
        <div className="space-y-6 text-muted text-sm leading-relaxed">
          <div>
            <h3 className="text-base font-bold text-white mb-2">Information pursuant to Section 5 DDG (German Digital Services Act)</h3>
            <p>Arcan Bereket</p>
            <p>Im grünen Grunde 9</p>
            <p>22337 Hamburg</p>
            <p>Germany</p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">Contact</h3>
            <p>Phone: +49 176 5590599</p>
            <p>
              Email:{' '}
              <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">
                veyro-labs@gmx.de
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">VAT / Small Business Regulation</h3>
            <p>
              As a small business owner (Kleinunternehmer) pursuant to Section 19 (1) of the German Value Added Tax Act (UStG), no VAT is charged or stated on invoices.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">Editorial Responsibility pursuant to Section 18 (2) MStV</h3>
            <p>Arcan Bereket</p>
            <p>Im grünen Grunde 9, 22337 Hamburg, Germany</p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">Copyright</h3>
            <p>
              All content and works created by me on these pages are subject to German copyright law. Any duplication, processing, distribution, or any form of commercial exploitation beyond the scope of copyright law requires my prior written consent.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">Consumer Dispute Resolution (Section 36 VSBG)</h3>
            <p>
              I am neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-display font-bold text-white mb-6">Impressum</h2>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <div>
          <h3 className="text-base font-bold text-white mb-2">Angaben gemäß § 5 DDG</h3>
          <p>Arcan Bereket</p>
          <p>Im grünen Grunde 9</p>
          <p>22337 Hamburg</p>
          <p>Deutschland</p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Kontakt</h3>
          <p>Telefon: +49 176 5590599</p>
          <p>
            E-Mail:{' '}
            <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">
              veyro-labs@gmx.de
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Umsatzsteuer</h3>
          <p>
            Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
          <p>Arcan Bereket</p>
          <p>Im grünen Grunde 9, 22337 Hamburg</p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Urheberrecht</h3>
          <p>
            Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Verbraucherstreitbeilegung (§ 36 VSBG)</h3>
          <p>
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}

export function DatenschutzContent({ locale = 'de' }: { locale?: string }) {
  if (locale === 'en') {
    return (
      <div>
        <h2 className="text-2xl font-display font-bold text-white mb-6">Privacy Policy</h2>
        <div className="space-y-6 text-muted text-sm leading-relaxed">
          <div>
            <h3 className="text-base font-bold text-white mb-2">1. Controller</h3>
            <p>Arcan Bereket</p>
            <p>Im grünen Grunde 9, 22337 Hamburg, Germany</p>
            <p>
              Email:{' '}
              <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">
                veyro-labs@gmx.de
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">2. Hosting &amp; Technical Infrastructure</h3>
            <p>
              This website is hosted by Vercel Inc. (340 Pine Street, Suite 701, San Francisco, CA 94104, USA). When you visit the website, Vercel processes technical access data (including IP address, timestamp, requested URL, and user agent) in server log files. This processing is based on Art. 6 (1) (f) GDPR (legitimate interest in the secure and reliable operation of the website). Vercel is certified under the EU-US Data Privacy Framework. Details:{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
            <p className="mt-3">
              DNS management for this domain is provided by Cloudflare, Inc. (101 Townsend Street, San Francisco, CA 94107, USA). Technical connection data (including IP address) is processed to securely route requests. Legal basis: Art. 6 (1) (f) GDPR. Cloudflare is certified under the EU-US Data Privacy Framework.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">3. Contact Form &amp; Email Inquiries</h3>
            <p>
              Data submitted via the contact form (name, email address, message) is transmitted via the transactional email service Resend (Resend, Inc., USA — certified under the EU-US Data Privacy Framework) to my email inbox at GMX (1&amp;1 Mail &amp; Media GmbH, Zweigniederlassung Karlsruhe, Brauerstraße 48, 76135 Karlsruhe, Germany; server location Germany) and used exclusively to process your inquiry. Processing is based on Art. 6 (1) (b) GDPR (pre-contractual measures) and Art. 6 (1) (f) GDPR. Your data is not shared with third parties for marketing purposes and is deleted once communication concludes, unless statutory retention periods apply.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">4. Self-Hosted Fonts</h3>
            <p>
              This website uses the typefaces Syne and Inter. Both fonts are self-hosted via <code>next/font</code> directly from our own server. No connection to Google servers takes place and no data is transmitted to third parties when loading fonts.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">5. Cookieless Analytics &amp; Performance Measurement</h3>
            <p>
              This website does not use tracking or advertising cookies and does not create personal user profiles. To measure reach and technical performance (Core Web Vitals), we use Vercel Web Analytics and Vercel Speed Insights. Both operate entirely without cookies and process only anonymized, aggregated metrics (such as page views, load times, and approximate region). Because no information is stored on or read from your terminal device within the meaning of Section 25 TDDDG, no cookie consent banner is required. Legal basis: Art. 6 (1) (f) GDPR (legitimate interest in a fast, secure, and user-friendly website).
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">6. Your Rights</h3>
            <p>Under the GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Right of access (Art. 15 GDPR)</li>
              <li>Right to rectification (Art. 16 GDPR)</li>
              <li>Right to erasure (Art. 17 GDPR)</li>
              <li>Right to restriction of processing (Art. 18 GDPR)</li>
              <li>Right to data portability (Art. 20 GDPR)</li>
              <li>Right to object (Art. 21 GDPR)</li>
            </ul>
            <p className="mt-3">
              To exercise your rights, contact:{' '}
              <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">
                veyro-labs@gmx.de
              </a>
            </p>
            <p className="mt-2">
              You also have the right to lodge a complaint with a data protection supervisory authority. In Hamburg, the competent authority is the Hamburg Commissioner for Data Protection and Freedom of Information (HmbBfDI):{' '}
              <a
                href="https://datenschutz-hamburg.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                datenschutz-hamburg.de
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">7. Status</h3>
            <p>Last updated: June 2026.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-display font-bold text-white mb-6">Datenschutzerklärung</h2>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <div>
          <h3 className="text-base font-bold text-white mb-2">1. Verantwortlicher</h3>
          <p>Arcan Bereket</p>
          <p>Im grünen Grunde 9, 22337 Hamburg</p>
          <p>
            E-Mail:{' '}
            <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">
              veyro-labs@gmx.de
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">2. Hosting &amp; technische Infrastruktur</h3>
          <p>
            Diese Website wird bei Vercel Inc. (340 Pine Street, Suite 701, San Francisco, CA 94104, USA) gehostet. Beim Aufruf der Website werden durch Vercel technische Zugriffsdaten (u.a. IP-Adresse, Zeitstempel, aufgerufene URL) in sogenannten Server-Logs verarbeitet. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website). Vercel ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen:{' '}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              vercel.com/legal/privacy-policy
            </a>
          </p>
          <p className="mt-3">
            Die DNS-Verwaltung dieser Domain erfolgt über Cloudflare, Inc. (101 Townsend Street, San Francisco, CA 94107, USA). Dabei werden technische Verbindungsdaten (u.a. IP-Adresse) verarbeitet, um Anfragen sicher auszuliefern. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (sicherer Betrieb). Cloudflare ist unter dem EU-US Data Privacy Framework zertifiziert.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">3. Kontaktformular &amp; E-Mail-Kontakt</h3>
          <p>
            Die über das Kontaktformular übermittelten Daten (Name, E-Mail-Adresse, Nachricht) werden über den E-Mail-Dienst Resend (Resend, Inc., USA — zertifiziert unter dem EU-US Data Privacy Framework) als E-Mail an mein Postfach bei GMX (1&amp;1 Mail &amp; Media GmbH, Zweigniederlassung Karlsruhe, Brauerstraße 48, 76135 Karlsruhe, Deutschland; Serverstandort Deutschland) übermittelt und ausschließlich zur Bearbeitung deiner Anfrage verwendet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden nicht an Dritte zu Werbezwecken weitergegeben und nach Abschluss der Kommunikation gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">4. Schriftarten</h3>
          <p>
            Diese Website verwendet die Schriftarten Syne und Inter. Beide Schriftarten werden über <code>next/font</code> direkt vom eigenen Server bereitgestellt und nicht von externen Google-Servern geladen. Es werden dabei keine Daten an Dritte übermittelt.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">5. Cookies, Reichweiten- &amp; Performance-Messung</h3>
          <p>
            Diese Website verwendet keine Tracking- oder Werbe-Cookies und erstellt keine personenbezogenen Nutzungsprofile. Zur Reichweiten- und Performance-Messung kommen Vercel Web Analytics und Vercel Speed Insights zum Einsatz. Beide arbeiten cookielos und ausschließlich mit anonymisierten, aggregierten Messwerten (z. B. Seitenaufrufe, Ladezeiten, ungefähre Herkunft); es werden keine geräteübergreifenden Profile gebildet und keine Daten an Dritte zu Werbezwecken weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren, schnellen und nutzerfreundlichen Angebot). Da kein Zugriff auf dein Endgerät zu Trackingzwecken im Sinne von § 25 Abs. 1 TDDDG erfolgt, ist hierfür keine Cookie-Einwilligung erforderlich.
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
            <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">
              veyro-labs@gmx.de
            </a>
          </p>
          <p className="mt-2">
            Du hast zudem das Recht, dich bei der zuständigen Aufsichtsbehörde zu beschweren. Für Hamburg ist das der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (HmbBfDI):{' '}
            <a
              href="https://datenschutz-hamburg.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              datenschutz-hamburg.de
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">7. Aktualität</h3>
          <p>Stand: Juni 2026. Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen.</p>
        </div>
      </div>
    </div>
  );
}

export function WiderrufContent({ locale = 'de' }: { locale?: string }) {
  if (locale === 'en') {
    return (
      <div>
        <h2 className="text-2xl font-display font-bold text-white mb-6">Right of Withdrawal</h2>
        <div className="space-y-6 text-muted text-sm leading-relaxed">
          <div>
            <h3 className="text-base font-bold text-white mb-2">Scope (B2B Focus)</h3>
            <p>
              The services of Veyro Labs are aimed primarily at businesses, entrepreneurs, and freelancers (B2B). The statutory consumer right of withdrawal pursuant to Section 312g of the German Civil Code (BGB) does not apply to B2B contracts. If, by way of exception, you enter into a contract as a consumer within the meaning of Section 13 BGB, the following statutory right of withdrawal applies:
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">Withdrawal Instruction for Consumers</h3>
            <p>
              You have the right to withdraw from this contract within fourteen (14) days without giving any reason. The withdrawal period is fourteen days from the day of the conclusion of the contract.
            </p>
            <p className="mt-3">
              To exercise your right of withdrawal, you must inform me (Arcan Bereket, Im grünen Grunde 9, 22337 Hamburg, Germany, Email:{' '}
              <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">
                veyro-labs@gmx.de
              </a>
              , Phone: +49 176 5590599) of your decision to withdraw from this contract by an unequivocal statement (e.g. a letter sent by post or an email). To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">Effects of Withdrawal</h3>
            <p>
              If you withdraw from this contract, I shall reimburse to you all payments received from you without undue delay and in any event not later than fourteen days from the day on which I am informed about your decision to withdraw from this contract. If you requested to begin the performance of services during the withdrawal period, you shall pay me an amount which is in proportion to what has been provided until you have communicated to me your withdrawal from this contract, in comparison with the full coverage of the contract.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">Expiry of the Right of Withdrawal</h3>
            <p>
              The right of withdrawal expires in the case of a contract for the provision of services once I have fully performed the service and have only begun performance after you have given your express consent and at the same time confirmed your knowledge that you will lose your right of withdrawal upon full performance of the contract (Section 356 (4) BGB).
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">Model Withdrawal Form</h3>
            <p className="text-subtle">(Complete and return this form only if you wish to withdraw from the contract.)</p>
            <div className="mt-3 rounded-xl border border-border bg-bg/40 p-4 space-y-2">
              <p>To: Arcan Bereket, Im grünen Grunde 9, 22337 Hamburg, Germany, Email: veyro-labs@gmx.de</p>
              <p>I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract for the provision of the following service (*):</p>
              <p>– Ordered on (*)/received on (*):</p>
              <p>– Name of consumer(s):</p>
              <p>– Address of consumer(s):</p>
              <p>– Signature of consumer(s) (only if this form is notified on paper):</p>
              <p>– Date:</p>
              <p className="text-subtle">(*) Delete as appropriate.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-display font-bold text-white mb-6">Widerrufsbelehrung</h2>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <div>
          <h3 className="text-base font-bold text-white mb-2">Geltungsbereich (B2B-Fokus)</h3>
          <p>
            Das Angebot von Veyro Labs richtet sich vorrangig an Unternehmer, Gewerbetreibende und Selbstständige (B2B). Das gesetzliche Verbraucher-Widerrufsrecht gemäß § 312g BGB findet auf Verträge mit Unternehmern keine Anwendung. Schließt du ausnahmsweise als Verbraucher im Sinne von § 13 BGB einen Vertrag ab, steht dir folgendes gesetzliches Widerrufsrecht zu:
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Widerrufsrecht für Verbraucher</h3>
          <p>
            Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
          </p>
          <p className="mt-3">
            Um dein Widerrufsrecht auszuüben, musst du mir (Arcan Bereket, Im grünen Grunde 9, 22337 Hamburg, E-Mail:{' '}
            <a href="mailto:veyro-labs@gmx.de" className="text-accent hover:underline">
              veyro-labs@gmx.de
            </a>
            , Telefon: +49 176 5590599) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Folgen des Widerrufs</h3>
          <p>
            Wenn du diesen Vertrag widerrufst, habe ich dir alle Zahlungen, die ich von dir erhalten habe, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf dieses Vertrags bei mir eingegangen ist.
          </p>
          <p className="mt-3">
            Hast du verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so hast du mir einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem du mich von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichtest, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Erlöschen des Widerrufsrechts</h3>
          <p>
            Das Widerrufsrecht erlischt bei einem Vertrag über die Erbringung von Dienstleistungen, wenn ich die Dienstleistung vollständig erbracht habe und mit der Ausführung erst begonnen habe, nachdem du dazu deine ausdrückliche Zustimmung gegeben und gleichzeitig deine Kenntnis davon bestätigt hast, dass du dein Widerrufsrecht bei vollständiger Vertragserfüllung verlierst (§ 356 Abs. 4 BGB).
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-2">Muster-Widerrufsformular</h3>
          <p className="text-subtle">
            (Wenn du den Vertrag widerrufen willst, dann fülle dieses Formular aus und sende es zurück.)
          </p>
          <div className="mt-3 rounded-xl border border-border bg-bg/40 p-4 space-y-2">
            <p>An: Arcan Bereket, Im grünen Grunde 9, 22337 Hamburg, E-Mail: veyro-labs@gmx.de</p>
            <p>
              Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*):
            </p>
            <p>– Beauftragt am (*)/erhalten am (*):</p>
            <p>– Name des/der Verbraucher(s):</p>
            <p>– Anschrift des/der Verbraucher(s):</p>
            <p>– Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
            <p>– Datum:</p>
            <p className="text-subtle">(*) Unzutreffendes streichen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
