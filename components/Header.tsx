import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { SiteConfig } from '@/types';

interface HeaderProps {
  config: SiteConfig;
}

export default function Header({ config }: HeaderProps) {
  const router = useRouter();
  const { locale } = router;
  const [scrolled, setScrolled] = useState(false);

  const isItalian = locale === 'it';

  const switchLocale = () => {
    const newLocale = isItalian ? 'en' : 'it';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="header-wrapper">
      <div className={`header-pill ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-left">
          <Link href="/" className="logo">
            <Image
              src={config.logo}
              alt="Logo"
              width={44}
              height={44}
              unoptimized
            />
            <span>{isItalian ? config.site_title_it : config.site_title_en}</span>
          </Link>
        </div>

        <nav className="header-center">
          <Link href="/#about">{isItalian ? 'Chi Siamo' : 'About'}</Link>
          <Link href="/collection">{isItalian ? 'Collezione' : 'Collection'}</Link>
          <Link href="/#contact">{isItalian ? 'Contatti' : 'Contact'}</Link>
        </nav>

        <div className="header-right">
          <button className="lang-pill" onClick={switchLocale}>
            {isItalian ? 'EN' : 'IT'}
          </button>
        </div>
      </div>
    </header>
  );
}
