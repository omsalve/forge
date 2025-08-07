import Head from 'next/head';
import './globals.css';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400', // Bebas Neue only comes in 400
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata = {
  title: "Gym Tracker App",
  description: "Track macros, weight, and progress like a beast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable}`}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200&display=swap" rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );  
}
