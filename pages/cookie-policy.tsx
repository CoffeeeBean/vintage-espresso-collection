import Head from 'next/head';

interface CookiePolicyPageProps {
  isItalian?: boolean;
}

export default function CookiePolicyPage({ isItalian = true }: CookiePolicyPageProps) {
  return (
    <>
      <Head>
        <title>Cookie Policy | Vintage Espresso</title>
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="container legal-page">
        <h1>Cookie Policy</h1>
        <p className="legal-updated">
          {isItalian ? 'Ultimo aggiornamento:' : 'Last updated:'} 1 febbraio 2026
        </p>

        <section>
          <h2>{isItalian ? 'Cosa sono i cookie' : 'What are cookies'}</h2>
          <p>
            {isItalian
              ? 'I cookie sono piccoli file di testo che i siti web visitati inviano al dispositivo dell’utente.'
              : 'Cookies are small text files stored on the user’s device when visiting a website.'}
          </p>
        </section>

        <section>
          <h2>{isItalian ? 'Cookie utilizzati' : 'Cookies used'}</h2>
          <p>
            {isItalian
              ? 'Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento del sito.'
              : 'This website uses only strictly necessary technical cookies required for proper operation.'}
          </p>
        </section>

        <section>
          <h2>{isItalian ? 'Consenso' : 'Consent'}</h2>
          <p>
            {isItalian
              ? 'Non essendo utilizzati cookie di profilazione o analisi, non è richiesto il consenso preventivo tramite banner.'
              : 'Since no analytics or profiling cookies are used, no consent banner is required.'}
          </p>
        </section>
      </main>
    </>
  );
}
