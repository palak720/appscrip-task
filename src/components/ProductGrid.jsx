
import ProductCard from "./ProductCard";
import styles from "../styles/Product.module.css";

export default function ProductGrid({ products, filterOpen }) {
  return (
    <div
      className={`${styles.productGrid} ${
        filterOpen ? styles.withFilter : styles.noFilter
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
