import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jewelry Store | Premium SaaS Ecommerce',
  description: 'Handcrafted jewelry for modern elegance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="main-header">
          <nav className="nav-container">
            <div className="logo">BIJOUX</div>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="main-footer">
          <div className="footer-content">
            <p>&copy; 2026 Jewelry Store. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
