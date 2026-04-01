import { useState } from 'react';
import './ProductDetailModal.css';

export default function ProductDetailModal({ product, onClose }) {
  const [tab, setTab] = useState('ingredients');

  if (!product) return null;

  const tabs = ['ingredients', 'directions', 'gallery'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal__close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="modal__header" style={{ background: product.accentLight }}>
          <div className="modal__image-wrap">
            <div className="modal__image-circle" />
            <img src={product.image} alt={product.name} className="modal__image" />
          </div>
          <div className="modal__info">
            <span className="modal__tagline" style={{ color: product.color }}>
              {product.tagline}
            </span>
            <h2 className="modal__name">{product.name}</h2>
            <p className="modal__desc">{product.shortDesc}</p>
            <div className="modal__pricing-row">
              <div className="modal__pricing">
                <span className="modal__price" style={{ color: product.color }}>
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="modal__original-price">{product.originalPrice}</span>
                )}
              </div>
              {product.buyUrl && (
                <a
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__buy-btn"
                  style={{ background: product.color }}
                >
                  {product.buyLabel}
                </a>
              )}
            </div>
            <div className="modal__features">
              {product.details.features.map((f) => (
                <span key={f} className="modal__feature-tag">{f}</span>
              ))}
            </div>
            {product.wholesale && (
              <div
                className="modal__wholesale"
                style={{ background: product.accentLight }}
              >
                <span>
                  {product.wholesale.label} · {product.wholesale.minOrder.toLocaleString()} Bottle Minimum
                </span>
                <a
                  href={`mailto:${product.wholesale.email}?subject=Wholesale Inquiry - ${product.name}`}
                  className="modal__wholesale-cta"
                  style={{ color: product.color }}
                >
                  {product.wholesale.cta}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="modal__tabs">
          {tabs.map((t) => (
            <button
              key={t}
              className={`modal__tab ${tab === t ? 'modal__tab--active' : ''}`}
              onClick={() => setTab(t)}
              style={{
                color: tab === t ? product.color : '#999',
                borderBottomColor: tab === t ? product.color : 'transparent',
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="modal__body">
          {tab === 'ingredients' && (
            <div className="modal__ingredients">
              {product.ingredients.map((ing, i) => (
                <div key={i} className="modal__ingredient">
                  {ing.image && (
                    <img src={ing.image} alt={ing.name} className="modal__ingredient-image" />
                  )}
                  <div className="modal__ingredient-content">
                    <div className="modal__ingredient-header">
                      <span className="modal__ingredient-name">{ing.name}</span>
                      <span className="modal__ingredient-amount" style={{ color: product.color }}>
                        {ing.amount}
                      </span>
                    </div>
                    {ing.detail && (
                      <span className="modal__ingredient-detail">{ing.detail}</span>
                    )}
                    <p className="modal__ingredient-desc">{ing.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'directions' && (
            <div className="modal__directions">
              <div className="modal__directions-layout">
                <div className="modal__directions-text">
                  <h4 className="modal__directions-title">Directions</h4>
                  <p className="modal__directions-body">{product.details.directions}</p>

                  {product.details.startSlow && (
                    <>
                      <h4 className="modal__directions-title" style={{ marginTop: 24 }}>
                        Start Slow
                      </h4>
                      <p className="modal__directions-body">{product.details.startSlow}</p>
                    </>
                  )}

                  <p className="modal__directions-count">{product.details.count}</p>

                  {product.details.warnings && (
                    <>
                      <h4 className="modal__directions-title modal__directions-title--warning">
                        Warnings
                      </h4>
                      <p className="modal__directions-body modal__directions-body--small">
                        {product.details.warnings}
                      </p>
                    </>
                  )}

                  {product.details.otherIngredients && (
                    <>
                      <h4 className="modal__directions-title" style={{ marginTop: 20 }}>
                        Other Ingredients
                      </h4>
                      <p className="modal__directions-body modal__directions-body--small">
                        {product.details.otherIngredients}
                      </p>
                    </>
                  )}
                </div>

                {product.details.supFactsImage && (
                  <div className="modal__sup-facts">
                    <img
                      src={product.details.supFactsImage}
                      alt="Supplement Facts"
                      className="modal__sup-facts-image"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {tab === 'gallery' && (
            <div className="modal__gallery">
              {product.details.galleryImages.map((img, i) => (
                <div key={i} className="modal__gallery-item">
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FDA Disclaimer */}
        <div className="modal__disclaimer">
          *These statements have not been evaluated by the Food and Drug Administration.
          This product is not intended to prevent, diagnose, treat or cure any disease.
          All products manufactured in a Certified Facility (CGMF) in compliance with
          NSF/ANSI Standard 173, Section 8.
        </div>
      </div>
    </div>
  );
}
