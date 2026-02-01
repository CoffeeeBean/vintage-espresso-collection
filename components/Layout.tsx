import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  config: any; // Replace 'any' with a more specific type if available
  isItalian: boolean;
  title?: string;
}

export default function Layout({
  children,
  config,
  isItalian,
  title,
}: LayoutProps) {
  const siteTitle = isItalian ? config.site_title_it : config.site_title_en;

  return (
    <>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <meta
          name="description"
          content="Vintage Espresso Machines Collection"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header config={config} />
      <main>{children}</main>
      <Footer config={config} />
    </>
  );
}
