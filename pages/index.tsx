import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MachineCard from "@/components/MachineCard";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import {
  getContentData,
  getAllMachines,
  getAllGalleryImages,
} from "@/lib/content";
import type {
  SiteConfig,
  HeroContent,
  AboutContent,
  StatsContent,
  Machine,
  GalleryImage,
} from "@/types";

interface HomeProps {
  config: SiteConfig;
  hero: HeroContent;
  about: AboutContent;
  stats: StatsContent;
  machines: Machine[];
  gallery: GalleryImage[];
  locale: string;
}

export default function Home({
  config,
  hero,
  about,
  stats,
  machines,
  gallery,
  locale,
}: HomeProps) {
  const isItalian = locale === "it";

  return (
    <Layout config={config} isItalian={isItalian}>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${hero.background_image})` }}
      >
        <div className="hero-content">
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
          <div>
            <a href="#about" className="btn btn-primary">
              {hero.cta_text}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{about.title}</h2>
              {about.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="about-image">
              <Image
                src={about.image}
                alt={about.title}
                width={800}
                height={600}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Machines Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            {isItalian
              ? "Le Nostre Macchine Più Amate"
              : "Our Most Loved Machines"}
          </h2>
          <div className="collection-machines-grid">
            {machines
              .filter((m) => m.featured)
              .slice(0, 3)
              .map((machine) => (
                <MachineCard
                  key={machine.slug}
                  machine={machine}
                  isItalian={isItalian}
                />
              ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/collection" className="btn btn-primary btn-large">
              {isItalian ? "Vedi Tutta la Collezione" : "View Full Collection"}
            </Link>
          </div>
        </div>
      </section>

      {/* Collection CTA */}
      <section
        className="cta-section"
        style={{ backgroundImage: "url(/images/cta-bg.jpg)" }}
      >
        <div className="cta-content">
          <h2>
            {isItalian ? "Esplora la Collezione" : "Explore the Collection"}
          </h2>
          <p>
            {isItalian
              ? "Esplora la selezione curata di macchine espresso vintage a leva di Luca e Valentina."
              : "Explore Luca and Valentina's curated selection of vintage lever espresso machines."}
          </p>
          <Link href="/collection" className="btn btn-primary">
            {isItalian ? "Inizia" : "Get Started"}
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            {stats.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {gallery.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              {isItalian ? "Galleria" : "Gallery"}
            </h2>
            <div className="gallery-grid">
              {gallery.slice(0, 6).map((item, index) => (
                <div key={index} className="gallery-item">
                  <Image
                    src={item.image}
                    alt={isItalian ? item.alt_it : item.alt_en}
                    width={400}
                    height={300}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">
            {isItalian ? "Contattaci" : "Contact Us"}
          </h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>{isItalian ? "Telefono" : "Phone"}</h3>
              <a href={`tel:${config.phone}`}>{config.phone}</a>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({
  locale = "en",
}) => {
  const config = getContentData<SiteConfig>("config", "general");
  const hero = getContentData<HeroContent>("hero", locale);
  const about = getContentData<AboutContent>("about", locale);
  const stats = getContentData<StatsContent>("stats", locale);
  const machines = getAllMachines();
  const gallery = getAllGalleryImages();

  // Ensure all required data exists
  if (!config || !hero || !about || !stats) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      config,
      hero,
      about,
      stats,
      machines,
      gallery,
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
