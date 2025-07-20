import styles from './Card.module.css';

export default function Card({ product, onAddToCart }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      {onAddToCart && (
        <button 
          onClick={() => onAddToCart(product)}
          className={styles.addButton}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}