import GlobalNavBar from './GlobalNavBar';
import './globals.css';

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
      <body className=' font-sans   '>
        <GlobalNavBar />
        {children}
      </body>
    </html>
  );
}
