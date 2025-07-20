import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable';
import styles from './Compare.module.css';

export default function Compare({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleProductSelection = (product) => {
    setSelectedProducts(prev => {
      if (prev.some(p => p.id === product.id)) {
        return prev.filter(p => p.id !== product.id);
      } else if (prev.length < 4) {
        return [...prev, product];
      }
      return prev;
    });
  };

  if (loading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.comparePage}>
      <h1 className={styles.pageTitle}>Product Comparison</h1>
      <p className={styles.pageSubtitle}>Select up to 4 products to compare</p>

      <div className={styles.productGrid}>
        {products.map(product => (
          <div 
            key={product.id}
            onClick={() => toggleProductSelection(product)}
            className={`${styles.productCardWrapper} ${
              selectedProducts.some(p => p.id === product.id) ? styles.selected : ''
            }`}
          >
            <Card 
              product={product} 
              onAddToCart={addToCart}
            />
          </div>
        ))}
      </div>

      {selectedProducts.length > 1 && (
        <div className={styles.comparisonSection}>
          <h2 className={styles.sectionTitle}>Comparison Results</h2>
          <ComparisonTable products={selectedProducts} />
          <button 
            onClick={() => selectedProducts.forEach(p => addToCart(p))}
            className={styles.addAllButton}
          >
            Add All to Cart
          </button>
        </div>
      )}
    </div>
  );
}