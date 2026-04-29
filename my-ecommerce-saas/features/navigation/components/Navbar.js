import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <div className="logo">
          <Link href="/">Novedades Morticia</Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/products">Productos</Link></li>
          <li><Link href="/cart">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  );
}
