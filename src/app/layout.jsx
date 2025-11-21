import GlobalNavBar from './GlobalNavBar';
import GlobalFooter from './GlobalFooter';
import './globals.css';
import ProviderShell from './ProviderShell';
import Script from 'next/script';

export const metadata = {
  title:
    'SR Group-Real estate in Pune | New residential and commercial projects in Pune',
  description:
    'Discover SR Group, a trusted real estate developer in Pune offering premium residential and commercial projects with modern amenities, great connectivity, and value.',
  authors: [{ name: 'Angle.services', url: 'https://Angle.services' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Google Search Console Verification */}
        <meta
          name='google-site-verification'
          content='uq7df0Cc-knhKGzX2SCk0IMxvyUuFc0790qK1rjZLQs'
        />
      </head>
      <body className='font-sans'>
        {/* Google Analytics */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-XWV148HD8M'
          strategy='afterInteractive'
        />
        <Script id='ga-gtag' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XWV148HD8M');
          `}
        </Script>

        <ProviderShell>
          <GlobalNavBar />
          {children}
          <GlobalFooter />
        </ProviderShell>
      </body>
    </html>
  );
}
