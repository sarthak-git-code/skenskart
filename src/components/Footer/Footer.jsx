import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>SkensKart</h3>
          <p className={styles.footerText}>
            Your smart shopping companion for product comparison and customization.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubheading}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><a href="/" className={styles.footerLink}>Home</a></li>
            <li><a href="/compare" className={styles.footerLink}>Compare</a></li>
            <li><a href="/customize" className={styles.footerLink}>Customize</a></li>
            <li><a href="/cart" className={styles.footerLink}>Cart</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubheading}>Contact</h4>
          <ul className={styles.footerContacts}>
            <li className={styles.contactItem}>
              <i className={`${styles.contactIcon} material-icons`}>email</i>
              contact@skenskart.com
            </li>
            <li className={styles.contactItem}>
              <i className={`${styles.contactIcon} material-icons`}>phone</i>
              +1 (555) 123-4567
            </li>
            <li className={styles.contactItem}>
              <i className={`${styles.contactIcon} material-icons`}>location_on</i>
              123 Shopping St, Retail City
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; {currentYear} SkensKart. All rights reserved.
        </p>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className={styles.socialLink} aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className={styles.socialLink} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}