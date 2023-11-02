import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* Google Tag Manager */}
      <script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MCN4M2WH');`}
      </script>
      {/* End Google Tag Manager */}
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="./src/assets/img/minimap.png" />
        <meta property="og:url" content="https://minimap-hero.web.app/" />
        <meta property="og:title" content="MINIMAP-HERO" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./src/assets/img/title.png" />
        <meta property="og:description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <noscript></noscript>
        <div id="root"></div>
        {children}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCN4M2WH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </body>
    </>
  );
}
