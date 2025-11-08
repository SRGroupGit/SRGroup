import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title:
    '2 BHK, 3 BHK flats in west Pune | Luxury apartments in east Pune | 2 BHK, 3 BHK flats in Sus Pune',
  description:
    'Looking for luxury 2 BHK or 3 BHK apartments in Sus, Pune, or premium commercial spaces? Discover exceptional living and business spaces with SR Group.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <GoogleTagManager gtmId='AW-16529778378' />
      {children}
    </>
  );
}
