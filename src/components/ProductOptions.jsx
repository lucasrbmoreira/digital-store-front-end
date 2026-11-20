import { useState } from 'react';

const ProductOptions = ({ options = [], shape = 'square', radius = '4px', type = 'text' }) => {
  const [selected, setSelected] = useState(options[0] || null);

  return (
    <div className="product-options">
      {options.map((option) => {
        const isSelected = selected === option;
        const isColor = type === 'color';
        const classes = [
          'product-option-item',
          shape,
          !isColor ? 'text' : '',
          isSelected ? 'selected' : ''
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(option)}
            aria-label={option}
            className={classes}
            style={{
              borderRadius: shape === 'circle' ? '50%' : radius,
              backgroundColor: isColor ? option : undefined
            }}
          >
            {!isColor && option}
          </button>
        );
      })}
    </div>
  );
};

export default ProductOptions;