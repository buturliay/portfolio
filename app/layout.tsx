import './globals.css';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
