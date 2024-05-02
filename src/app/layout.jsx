import GlobalNavBar from './GlobalNavBar';
import './globals.css';

export const metadata = {
  title: 'SR Group',
  description: 'SR Group',
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
