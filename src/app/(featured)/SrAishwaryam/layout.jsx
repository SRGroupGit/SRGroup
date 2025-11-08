import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title:
    '2 BHK, 3 BHK flats in Aundh Pune | 2 BHK, 3 BHK flats in Mundwa | New residential and commercial projects in Pune',
  description:
    'We are offering new residential and commercial projects in Pune. If you are looking for 2 BHK or 3 BHK flats in Aundh Pune, SR Group has the perfect options for you.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <GoogleTagManager gtmId='AW-16529778378' />
      {children}
    </>
  );
}
