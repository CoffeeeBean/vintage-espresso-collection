import Head from 'next/head';

interface PrivacyPageProps {
  isItalian?: boolean;
}

export default function PrivacyPage({ isItalian = true }: PrivacyPageProps) {
  return (
    <>
      <Head>
        <title>{isItalian ? 'Privacy Policy' : 'Privacy Policy'} | Vintage Espresso</title>
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="container legal-page">
        <h1>{isItalian ? 'Informativa sulla Privacy' : 'Privacy Policy'}</h1>
        <p className="legal-updated">
          {isItalian ? 'Ultimo aggiornamento:' : 'Last updated:'} 1 febbraio 2026
        </p>

        <section>
          <h2>{isItalian ? 'Titolare del trattamento' : 'Data Controller'}</h2>
          <p>
            Vintage Espresso<br />
            Email: info@vintageespresso.it
          </p>
        </section>

        <section>
          <h2>{isItalian ? 'Tipologia di dati trattati' : 'Types of data processed'}</h2>
          <p>
            {isItalian
              ? 'Questo sito non raccoglie dati personali a fini di profilazione o marketing. I dati trattati sono limitati a informazioni tecniche necessarie al corretto funzionamento del sito e a eventuali dati forniti volontariamente via email.'
              : 'This website does not collect personal data for profiling or marketing purposes. Data processed is limited to technical information required for website operation and data voluntarily provided via email.'}
          </p>
        </section>

        <section>
          <h2>{isItalian ? 'Finalità del trattamento' : 'Purpose of processing'}</h2>
          <p>
            {isItalian
              ? 'I dati sono trattati esclusivamente per il funzionamento tecnico del sito e per rispondere a richieste inviate volontariamente.'
              : 'Data is processed solely for technical operation of the website and to respond to voluntary requests.'}
          </p>
        </section>

        <section>
          <h2>{isItalian ? 'Diritti dell’interessato' : 'User rights'}</h2>
          <p>
            {isItalian
              ? 'L’utente può esercitare i diritti previsti dagli articoli 15–22 del GDPR contattando il titolare del trattamento.'
              : 'Users may exercise their rights under Articles 15–22 of the GDPR by contacting the data controller.'}
          </p>
        </section>
      </main>
    </>
  );
}
