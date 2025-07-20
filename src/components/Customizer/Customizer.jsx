import { useState } from 'react';
import styles from './Customizer.module.css';

export default function Customizer({ product }) {
  const [customization, setCustomization] = useState({
    color: 'white',
    size: 'M',
    text: '',
    textColor: 'black',
    design: null
  });

  const colors = ['white', 'black', 'red', 'blue', 'green'];
  const sizes = ['S', 'M', 'L', 'XL'];
  const textColors = ['black', 'white', 'red', 'blue', 'gold'];

  const handleChange = (field, value) => {
    setCustomization(prev => ({ ...prev, [field]: value }));
  };

  const handleDesignUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        handleChange('design', event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.customizerContainer}>
      <h2 className={styles.title}>Customize {product.name}</h2>
      
      <div className={styles.customizerGrid}>
        {/* Options Panel */}
        <div className={styles.optionsPanel}>
          {/* Color Selection */}
          <div className={styles.optionGroup}>
            <label className={styles.optionLabel}>Base Color:</label>
            <div className={styles.colorOptions}>
              {colors.map(color => (
                <button
                  key={color}
                  onClick={() => handleChange('color', color)}
                  className={`${styles.colorOption} ${customization.color === color ? styles.selected : ''}`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className={styles.optionGroup}>
            <label className={styles.optionLabel}>Size:</label>
            <div className={styles.sizeOptions}>
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleChange('size', size)}
                  className={`${styles.sizeOption} ${customization.size === size ? styles.selectedSize : ''}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Text Customization */}
          <div className={styles.optionGroup}>
            <label className={styles.optionLabel}>Custom Text:</label>
            <input
              type="text"
              value={customization.text}
              onChange={(e) => handleChange('text', e.target.value)}
              className={styles.textInput}
              placeholder="Enter your text"
            />
          </div>

          {/* Text Color */}
          <div className={styles.optionGroup}>
            <label className={styles.optionLabel}>Text Color:</label>
            <div className={styles.colorOptions}>
              {textColors.map(color => (
                <button
                  key={color}
                  onClick={() => handleChange('textColor', color)}
                  className={`${styles.colorOption} ${customization.textColor === color ? styles.selected : ''}`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Design Upload */}
          <div className={styles.optionGroup}>
            <label className={styles.optionLabel}>Upload Design:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleDesignUpload}
              className={styles.fileInput}
            />
          </div>
        </div>

        {/* Preview Panel */}
        <div className={styles.previewPanel}>
          <h3 className={styles.previewTitle}>Live Preview</h3>
          <div className={styles.previewBox}>
            <div 
              className={styles.productPreview}
              style={{ backgroundColor: customization.color }}
            >
              {customization.design && (
                <img 
                  src={customization.design} 
                  alt="Custom design" 
                  className={styles.designImage}
                />
              )}
              {customization.text && (
                <div 
                  className={styles.productText}
                  style={{ color: customization.textColor }}
                >
                  {customization.text}
                </div>
              )}
              <div className={styles.sizeIndicator}>
                Size: {customization.size}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className={styles.addToCartButton}>
        Add to Cart - ${product.basePrice.toFixed(2)}
      </button>
    </div>
  );
}