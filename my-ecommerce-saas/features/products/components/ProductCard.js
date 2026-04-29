import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ id, name, price, image }) {
  // Default values for mock
  const productName = name || `Product ${id}`;
  const productPrice = price || '99.99';
  const productImage = image || '/images/placeholder.jpg';

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={productImage} 
          alt={productName} 
          width={280} 
          height={200} 
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{productName}</h3>
        <p className={styles.price}>${productPrice}</p>
        <Link href={`/products/${id}`} className={styles.link}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
