import Link from "next/link";
import type { SiteConfig } from "@/types";

import { useLanguage } from "@/hooks/useLanguage";

interface FooterProps {
  config: SiteConfig;
}

export default function Footer({ config }: FooterProps) {
  const isItalian = useLanguage();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>{isItalian ? "Creazione" : "Creation"}</h4>
            <p>
              {isItalian
                ? "Lorem ipsum dolor sit amet nulla vel, consectetur massa adipiscing."
                : "Lorem ipsum dolor sit amet nulla vel, consectetur massa adipiscing."}
            </p>
          </div>
          <div className="footer-section">
            <h4>{isItalian ? "Promozione" : "Promotion"}</h4>
            <p>
              {isItalian
                ? "Lorem ipsum dolor sit amet nulla vel, consectetur massa adipiscing."
                : "Lorem ipsum dolor sit amet nulla vel, consectetur massa adipiscing."}
            </p>
          </div>
          <div className="footer-section">
            <h4>{isItalian ? "Marchio" : "Branding"}</h4>
            <p>
              {isItalian
                ? "Lorem ipsum dolor sit amet nulla vel, consectetur massa adipiscing."
                : "Lorem ipsum dolor sit amet nulla vel, consectetur massa adipiscing."}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Vintage Espresso Machines Collection</p>
          <nav style={{ marginTop: "1.5rem" }}>
            <Link href="/" style={{ margin: "0 1rem" }}>
              {isItalian ? "Home" : "Home"}
            </Link>
            <Link href="/#about" style={{ margin: "0 1rem" }}>
              {isItalian ? "Chi Siamo" : "About"}
            </Link>
            <Link href="/collection" style={{ margin: "0 1rem" }}>
              {isItalian ? "Collezione" : "Collection"}
            </Link>
            <Link href="/#contact" style={{ margin: "0 1rem" }}>
              {isItalian ? "Contatti" : "Contact"}
            </Link>
          </nav>
          <nav style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
            <Link href="/privacy" style={{ margin: "0 0.75rem" }}>
              {isItalian ? "Privacy" : "Privacy"}
            </Link>
            <Link href="/cookie-policy" style={{ margin: "0 0.75rem" }}>
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
