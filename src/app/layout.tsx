import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'tailwindcss/tailwind.css'
import PublicNavbar from '../components/public/PublicNavbar';
import PrivateNavbar from '@/components/public/PrivateNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Resume/Website',
  description: 'Generate Your own portfolio website ❤️',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <PrivateNavbar />
        {children}
      </body>
    </html>
  );
}