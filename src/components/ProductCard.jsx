import { useState } from 'react';
import FadeIn from './FadeIn';
import './ProductCard.css';

export default function ProductCard({ product, index, onSelect }) {
  const [hovered, setHovered] = useState(false);

  const savePercent = product.originalPrice
    ? Math.round((1 - parseFloat(product.price.slice(1)) / parseFloat(product.originalPrice.slice(1))) * 100)
    : null;

  return (
    <FadeIn delay={index * 0.15}>
      <div
        className={`product-card ${hovered ? 'product-card--hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onSelect(product)}
      >
        {/* Image area */}
        <div className="product-card__image-area" style={{ background: product.accentLight }}>
          <div className="product-card__image-circle" />
          <img
            src={product.image}
            alt={product.name}
            className={`product-card__image ${hovered ? 'product-card__image--hovered' : ''}`}
          />
          {savePercent && (
            <div className="product-card__badge" style={{ background: product.color }}>
              SAVE {savePercent}%
            </div>
          )}
        </div>

        {/* Content */}
        <div className="product-card__content">
          <span className="product-card__tagline" style={{ color: product.color }}>
            {product.tagline}
          </span>
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__desc">{product.shortDesc}</p>
          <div className="product-card__footer">
            <div className="product-card__pricing">
              <span className="product-card__price" style={{ color: product.color }}>
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="product-card__original-price">
                  {product.originalPrice}
                </span>
              )}
            </div>
            <span className="product-card__cta" style={{ color: product.color, borderBottomColor: product.color }}>
              Learn More →
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
