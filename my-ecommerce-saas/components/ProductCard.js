import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ id, name, price, image }) {
  // Default values for mock
  const productName = name || `Product ${id}`;
  const productPrice = price || '99.99';
  const productImage = image || '/images/placeholder.jpg';

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={productImage} alt={productName} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{productName}</h3>
        <p className={styles.price}>${productPrice}</p>
        <Link href={`/products/${id}`} className={styles.link}>
          View Details
        </Link>
      </div>
    </div>
  );
}
