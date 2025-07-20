import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav({ cartCount }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.navLogo}>SkensKart</Link>
        <div className={styles.navLinks}>
          <Link to="/compare" className={styles.navLink}>Compare</Link>
          <Link to="/customize" className={styles.navLink}>Customize</Link>
          <Link to="/cart" className={styles.navLink}>
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}