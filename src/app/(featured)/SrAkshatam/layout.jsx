import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title:
    '2 BHK, 3 BHK flats in west Pune | Luxury apartments in east Pune | 2 BHK, 3 BHK flats in Sus Pune',
  description:
    'You are looking for a Luxury apartment, 2 BHK, 3 BHK flats in sus Pune  or a premium commercial space, SR Group has something for everyone.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <GoogleTagManager gtmId='AW-16529778378' />
      {children}
    </>
  );
}
