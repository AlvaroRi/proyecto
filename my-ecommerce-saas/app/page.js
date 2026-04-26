import styles from './page.module.css';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Elegance in Every Detail</h1>
        <p className={styles.subtitle}>Discover our exclusive collection of handcrafted jewelry.</p>
        <button className={styles.cta}>Shop Now</button>
      </section>

      <section className={styles.featured}>
        <h2>Featured Products</h2>
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
