import FadeIn from './FadeIn';
import ProductCard from './ProductCard';
import PRODUCTS from '../data/products';
import './ProductsSection.css';

export default function ProductsSection({ onSelectProduct }) {
  return (
    <section id="products" className="products-section">
      <div className="products-section__inner">
        <FadeIn>
          <div className="products-section__header">
            <span className="products-section__label">Our Formulations</span>
            <h2 className="products-section__title">
              Science-Backed.<br />
              <span className="products-section__title-emphasis">Plant-Powered.</span>
            </h2>
            <p className="products-section__subtitle">
              Premium plant extracts with optimal dosing, formulated by healthcare professionals.
            </p>
          </div>
        </FadeIn>
        <div className="products-section__grid">
          {PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
