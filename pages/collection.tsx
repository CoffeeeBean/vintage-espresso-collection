import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/components/Layout";
import MachineCard from "@/components/MachineCard";
import { getContentData, getAllMachines } from "@/lib/content";
import type { SiteConfig, Machine } from "@/types";

interface CollectionProps {
  config: SiteConfig;
  machines: Machine[];
  locale: string;
}

export default function Collection({
  config,
  machines,
  locale,
}: CollectionProps) {
  const isItalian = locale === "it";

  return (
    <Layout
      config={config}
      isItalian={isItalian}
      title={isItalian ? "Collezione" : "Collection"}
    >
      {/* Hero Section */}
      <section
        className="collection-hero"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(168 58 30 / 90%) 0%, rgba(74, 105, 189, 0.95) 100%), url(/images/hero_collection.jpg)",
        }}
      >
        <div className="collection-hero-content">
          <h1>{isItalian ? "La Nostra Collezione" : "Our Collection"}</h1>
          <p>
            {isItalian
              ? "Esplora la nostra collezione completa di macchine espresso vintage a leva. Ogni macchina racconta una storia unica di artigianalità e passione per l'espresso perfetto."
              : "Explore our complete collection of vintage lever espresso machines. Each machine tells a unique story of craftsmanship and passion for the perfect espresso."}
          </p>
        </div>
      </section>

      {/* Machines Grid Section */}
      <section className="section collection-section">
        <div className="container">
          <div className="collection-stats">
            <div className="collection-stat-item">
              <span className="collection-stat-number">{machines.length}</span>
              <span className="collection-stat-label">
                {isItalian ? "Macchine Totali" : "Total Machines"}
              </span>
            </div>
            <div className="collection-stat-item">
              <span className="collection-stat-number">
                {machines.filter((m) => m.featured).length}
              </span>
              <span className="collection-stat-label">
                {isItalian ? "In Evidenza" : "Featured"}
              </span>
            </div>
          </div>

          <div className="collection-machines-grid">
            {machines.map((machine) => (
              <MachineCard
                key={machine.slug}
                machine={machine}
                isItalian={isItalian}
              />
            ))}
          </div>

          {machines.length === 0 && (
            <div className="collection-empty">
              <p>
                {isItalian
                  ? "Nessuna macchina disponibile al momento."
                  : "No machines available at the moment."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="collection-cta">
        <div className="container">
          <div className="collection-cta-content">
            <h2>
              {isItalian
                ? "Hai una macchina vintage da condividere?"
                : "Have a vintage machine to share?"}
            </h2>
            <p>
              {isItalian
                ? "Siamo sempre interessati ad aggiungere nuove macchine alla nostra collezione. Contattaci per saperne di più."
                : "We're always interested in adding new machines to our collection. Contact us to learn more."}
            </p>
            <a href="#contact" className="btn btn-primary btn-large">
              {isItalian ? "Contattaci" : "Contact Us"}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<CollectionProps> = async ({
  locale = "en",
}) => {
  const config = getContentData<SiteConfig>("config", "general");
  const machines = getAllMachines();

  if (!config) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      config,
      machines,
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
