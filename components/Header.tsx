import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import type { SiteConfig } from '@/types';

interface HeaderProps {
  config: SiteConfig;
}

export default function Header({ config }: HeaderProps) {
  const router = useRouter();
  const { locale } = router;
  
  const isItalian = locale === 'it';
  
  const switchLocale = () => {
    const newLocale = isItalian ? 'en' : 'it';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link href="/">
            <>
              <Image 
                src={config.logo} 
                alt="Logo" 
                width={60} 
                height={60}
                unoptimized
              />
              <span>{isItalian ? config.site_title_it : config.site_title_en}</span>
            </>
          </Link>
        </div>
        <nav className="nav">
          <Link href="/#about">{isItalian ? 'Chi Siamo' : 'About'}</Link>
          <Link href="/collection">{isItalian ? 'Collezione' : 'Collection'}</Link>
          <Link href="/#contact">{isItalian ? 'Contatti' : 'Contact'}</Link>
          <button className="lang-switcher" onClick={switchLocale}>
            {isItalian ? 'EN' : 'IT'}
          </button>
        </nav>
      </div>
    </header>
  );
}
