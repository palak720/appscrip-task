
import styles from '../styles/Sidebar.module.css';

/**
 * SidebarFilter reproduces stacked filter rows with uppercase headings and chevrons.
 * categories: array of category strings
 * selectedCategories: Set
 * onToggleCategory: function(cat)*/
 
export default function SidebarFilter({ categories = [], selectedCategories = new Set(), onToggleCategory = ()=>{} }) {
  const filterRows = [
    'CUSTOMIZBLE',
    'IDEAL FOR',
    'OCCASION',
    'WORK',
    'FABRIC',
    'SEGMENT',
    'SUITABLE FOR',
    'RAW MATERIALS',
    'PATTERN'
  ];

  return (
    <div className={styles.container}>
      {filterRows.map((row) => (
        <div className={styles.row} key={row}>
          <div className={styles.rowHeading}>
            <span>{row}</span>
            <span className={styles.chev}>▾</span>
          </div>
          <div className={styles.rowBody}>All</div>
        </div>
      ))}

       {/*Category checkbox list below (example using fakestore categories)*/}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Category</h4>
        <ul className={styles.catList}>
          {categories.map(cat => {
            const id = `cat-${cat.replace(/\s+/g,'-')}`;
            const checked = selectedCategories.has(cat);
            return (
              <li key={cat} className={styles.catItem}>
                <label>
                  <input id={id} type="checkbox" checked={checked} onChange={()=>onToggleCategory(cat)} />
                  <span className={styles.catText}>{cat}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

