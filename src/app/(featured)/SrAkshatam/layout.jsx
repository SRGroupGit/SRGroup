import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title:
    'SR Akshatam - 2 BHK, 3 BHK flats in Keshav Nagar | 2 BHK, 3 BHK flats near Mundhwa Pune',
  description:
    'Looking for 2 or 3 BHK homes in Pune? SR Akshatam offers elegant apartments in Keshav Nagar and Mundhwa with top-notch amenities, secure living, and great value.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <GoogleTagManager gtmId='AW-16529778378' />
      {children}
    </>
  );
}
