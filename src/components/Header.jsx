
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header>

      {/* thin top black bar with small red items */}
      <div className={styles.topbar}>
        <div className={styles.topInner}>
          <div className={styles.topItem}>▦ Lorem ipsum dolor</div>
          <div className={styles.topItem}>▦ Lorem ipsum dolor</div>
          <div className={styles.topItem}>▦ Lorem ipsum dolor</div>
        </div>
      </div>

      {/* main header */}
      <div className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.brandIcon}>✣</div>
          </div>

          <div className={styles.center}>
            <div className={styles.logo}>LOGO</div>
            <nav className={styles.nav}>
              <a>SHOP</a>
              <a>SKILLS</a>
              <a>STORIES</a>
              <a>ABOUT</a>
              <a>CONTACT US</a>
            </nav>
          </div>

          <div className={styles.right}>
            <div className={styles.icons}>
              <span className={styles.icon}>🔍</span>
              <span className={styles.icon}>♡</span>
              <span className={styles.icon}>👜</span>
              <span className={styles.icon}>👤</span>
              <span className={styles.lang}>ENG ▾</span>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
}

