import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/features/navigation/components/Navbar';
import Footer from '@/features/navigation/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Novedades Moricia | Acero inoxidable',
  description: 'Elegancia en cada detalle.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
