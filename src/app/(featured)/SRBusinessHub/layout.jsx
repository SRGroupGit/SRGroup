import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title:
    'Midrise / Highrise apartments in Pune | Luxury apartments in east pune',
  description:
    'SR Group offers Luxury apartments in east pune. Their Midrise /highrise apartments provide the perfect blend of comfort and convenience.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <GoogleTagManager gtmId='AW-16529778378' />
      {children}
    </>
  );
}
