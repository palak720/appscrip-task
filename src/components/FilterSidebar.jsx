
import styles from "../styles/Product.module.css";

export default function FilterSidebar({ isOpen, onClose }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.filterHeader}>
        <h3>Filters</h3>
        <button onClick={onClose}>✕</button>
      </div>
      <div className={styles.filterContent}>
        <label>
          <input type="checkbox" /> Men
        </label>
        <label>
          <input type="checkbox" /> Women
        </label>
        <label>
          <input type="checkbox" /> Accessories
        </label>
      </div>
    </aside>
  );
}
