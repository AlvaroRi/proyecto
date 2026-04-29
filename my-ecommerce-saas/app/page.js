import styles from './page.module.css';
import ProductCard from '@/features/products/components/ProductCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>La Joyeria de Tu Vida</h1>
        <p className={styles.subtitle}>el placer de atenderte y adaptarnos a tus preferencias.</p>
        <button className={styles.cta}>Compra ahora</button>
      </section>

      <section className={styles.featured}>
        <h2>Nuestro Produco</h2>
        <div className={styles.grid}>
          {/* Mock data for now */}
          {[1, 2, 3, 4].map((id) => (
            <ProductCard key={id} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
}
