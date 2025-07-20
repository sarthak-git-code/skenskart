import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to SkensKart</h1>
      <p className={styles.subtitle}>Smart Shopping Tools</p>
      
      <div className={styles.ctaContainer}>
        <Link to="/compare" className={styles.ctaButton}>Compare Products</Link>
        <Link to="/customize" className={`${styles.ctaButton} ${styles.secondaryButton}`}>
          Customize Items
        </Link>
      </div>
    </div>
  );
}