import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title:
    'Luxury commercial & retail spaces Pune | SR Business Hub - Commercial Project Baner Pune',
  description:
    'Looking for commercial property in Pune? SR Business Hub offers premium offices and retail units in Baner with smart design, high footfall, and top-tier construction quality.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <GoogleTagManager gtmId='AW-16529778378' />
      {children}
    </>
  );
}
