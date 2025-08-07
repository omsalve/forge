
import './globals.css';
import { Saira_Condensed } from 'next/font/google';

const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-saira'
});


 


export const metadata = {
  title: "Gym Tracker App",
  description: "Track macros, weight, and progress like a beast.",
};

export default function RootLayout({ children }) {
     return (
    <html lang="en" className={saira.className}>
      <body>{children}</body>
    </html>
  );
  
}
