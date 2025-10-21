


import Link from 'next/link';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  const alt = `${product.title} - ${product.category}`;
  return (
    <article className={styles.card} itemScope itemType="https://schema.org/Product">
      <Link href={`/product/${product.id}`} className={styles.link}>
        <div className={styles.imageWrap}>
          <img src={product.image} alt={alt} className={styles.img} loading="lazy" />
        </div>

        <div className={styles.meta}>
          <h3 className={styles.title} itemProp="name">{product.title}</h3>
          <p className={styles.price} itemProp="offers">${product.price}</p>
        </div>
      </Link>
    </article>
  )
}

