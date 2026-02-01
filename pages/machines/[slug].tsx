import { GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { getContentData, getAllMachines } from '@/lib/content';
import type { SiteConfig, Machine } from '@/types';

interface MachineDetailProps {
  config: SiteConfig;
  machine: Machine;
  locale: string;
}

export default function MachineDetail({ config, machine, locale }: MachineDetailProps) {
  const isItalian = locale === 'it';

  return (
    <Layout config={config} isItalian={isItalian} title={isItalian ? machine.title_it : machine.title_en}>
      {/* Hero Section with Machine Image */}
      <section 
        className="hero machine-hero" 
        style={{ 
          backgroundImage: `url(${machine.image})`,
          minHeight: '70vh'
        }}
      >
        <div className="hero-content">
          <h1>{isItalian ? machine.title_it : machine.title_en}</h1>
        </div>
      </section>

      {/* Machine Details Section */}
      <section className="section">
        <div className="container">
          <div className="machine-detail-content">
            <div className="machine-detail-main">
              <h2 className="section-title">
                {isItalian ? 'Dettagli' : 'Details'}
              </h2>
              
              <div className="machine-detail-description">
                <p>{isItalian ? machine.description_it : machine.description_en}</p>
              </div>

              {machine.long_description_en && (
                <div className="machine-detail-long">
                  <p>{isItalian ? machine.long_description_it : machine.long_description_en}</p>
                </div>
              )}

              {machine.specifications && (
                <div className="specifications-section">
                  <h3>{isItalian ? 'Specifiche Tecniche' : 'Technical Specifications'}</h3>
                  <ul className="specifications-list">
                    {machine.specifications.map((spec, index) => (
                      <li key={index}>
                        <strong>{isItalian ? spec.label_it : spec.label_en}:</strong> {isItalian ? spec.value_it : spec.value_en}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {machine.features_en && (
                <div className="features-section">
                  <h3>{isItalian ? 'Caratteristiche' : 'Features'}</h3>
                  <ul className="features-list">
                    {(isItalian ? machine.features_it : machine.features_en)?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {machine.history_en && (
                <div className="history-section">
                  <h3>{isItalian ? 'Storia' : 'History'}</h3>
                  <p>{isItalian ? machine.history_it : machine.history_en}</p>
                </div>
              )}
            </div>

            <div className="machine-detail-sidebar">
              <div className="machine-image-large">
                <Image 
                  src={machine.image} 
                  alt={isItalian ? machine.title_it : machine.title_en}
                  width={600}
                  height={800}
                  unoptimized
                />
              </div>

              {machine.gallery_images && machine.gallery_images.length > 0 && (
                <div className="machine-gallery">
                  <h4>{isItalian ? 'Galleria' : 'Gallery'}</h4>
                  <div className="machine-gallery-grid">
                    {machine.gallery_images.map((img, index) => (
                      <div key={index} className="machine-gallery-item">
                        <Image 
                          src={img} 
                          alt={`${isItalian ? machine.title_it : machine.title_en} ${index + 1}`}
                          width={200}
                          height={200}
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Back to Collection Button */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/collection" className="btn btn-primary">
              {isItalian ? '← Torna alla Collezione' : '← Back to Collection'}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const machines = getAllMachines();
  
  const paths = machines.flatMap(machine =>
    (locales || ['en', 'it']).map(locale => ({
      params: { slug: machine.slug },
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<MachineDetailProps> = async ({ params, locale = 'en' }) => {
  const config = getContentData<SiteConfig>('config', 'general');
  const machines = getAllMachines();
  const machine = machines.find(m => m.slug === params?.slug);

  if (!config || !machine) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      config,
      machine,
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};