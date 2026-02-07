import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { SiteConfig } from "@/types";
import { Menu, X, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

interface HeaderProps {
  config: SiteConfig;
}

export default function Header({ config }: HeaderProps) {
  const router = useRouter();
  const { locale } = router;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isItalian = locale === "it";

  const switchLocale = () => {
    const newLocale = isItalian ? "en" : "it";
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header-wrapper">
      <div className={`header-pill ${scrolled ? "scrolled" : ""}`}>
        <div className="header-left">
          <Link href="/" className="logo">
            <Image
              src={config.logo}
              alt="Logo"
              width={44}
              height={44}
              unoptimized
            />
            <span>
              {isItalian ? config.site_title_it : config.site_title_en}
            </span>
          </Link>
        </div>

        <nav className="nav">
          {/* Desktop navigation */}
          <div className="nav-desktop">
            <Link href="/#about">{isItalian ? "Chi Siamo" : "About"}</Link>
            <Link href="/collection">
              {isItalian ? "Collezione" : "Collection"}
            </Link>
            <Link href="/#contact">{isItalian ? "Contatti" : "Contact"}</Link>

            <div className="header-icons">
              <a
                href="https://www.instagram.com/YOUR_PROFILE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/393331234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              <a href="mailto:info@yourdomain.com" aria-label="Email">
                <Mail size={18} />
              </a>
              <a
                href="https://maps.google.com/?q=YOUR+ADDRESS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
              >
                <MapPin size={18} />
              </a>
            </div>

            <button className="lang-switcher" onClick={switchLocale}>
              {isItalian ? "EN" : "IT"}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="mobile-menu">
              <Link href="/#about" onClick={() => setMenuOpen(false)}>
                {isItalian ? "Chi Siamo" : "About"}
              </Link>
              <Link href="/collection" onClick={() => setMenuOpen(false)}>
                {isItalian ? "Collezione" : "Collection"}
              </Link>
              <Link href="/#contact" onClick={() => setMenuOpen(false)}>
                {isItalian ? "Contatti" : "Contact"}
              </Link>

              <div className="mobile-icons">
                <a
                  href="https://www.instagram.com/YOUR_PROFILE"
                  target="_blank"
                >
                  <Instagram size={22} />
                </a>
                <a href="https://wa.me/393331234567" target="_blank">
                  <MessageCircle size={22} />
                </a>
                <a href="mailto:info@yourdomain.com">
                  <Mail size={22} />
                </a>
                <a
                  href="https://maps.google.com/?q=YOUR+ADDRESS"
                  target="_blank"
                >
                  <MapPin size={22} />
                </a>
              </div>

              <button className="lang-switcher" onClick={switchLocale}>
                {isItalian ? "EN" : "IT"}
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
