import GlobalNavBar from './GlobalNavBar';
import GlobalFooter from './GlobalFooter';
import './globals.css';
import ProviderShell from './ProviderShell';

export const metadata = {
  title: 'SR Group',
  description: 'SR Group',
  authors: [
    { name: 'Angle.services', url: 'https://Angle.services' },
    { name: 'GlitchNobody', url: 'https://glitchnobody.com' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <ProviderShell>
        <body className=' font-sans   '>
          <GlobalNavBar />
          {children}
          <GlobalFooter />
        </body>
      </ProviderShell>
    </html>
  );
}
