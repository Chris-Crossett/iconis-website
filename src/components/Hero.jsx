import { useState, useEffect } from 'react';
import PRODUCTS from '../data/products';
import './Hero.css';

export default function Hero({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Decorative elements */}
      <div className="hero__circle hero__circle--1" />
      <div className="hero__circle hero__circle--2" />
      <div className="hero__circle hero__circle--3" />
      <div className="hero__dots" />

      <div className={`hero__content ${loaded ? 'hero__content--loaded' : ''}`}>
        <div className={`hero__accent ${loaded ? 'hero__accent--loaded' : ''}`}>
          ✦ ✦ ✦
        </div>

        <h1 className={`hero__title ${loaded ? 'hero__title--loaded' : ''}`}>
          Live Free.<br />
          <span className="hero__title-emphasis">Live Confident.</span><br />
          Live Now.
        </h1>

        <p className={`hero__subtitle ${loaded ? 'hero__subtitle--loaded' : ''}`}>
          Plant-based formulations crafted by healthcare professionals.
          Premium extracts, optimal dosing, and science-backed ingredients
          to support your wellness journey.
        </p>

        <div className={`hero__buttons ${loaded ? 'hero__buttons--loaded' : ''}`}>
          <button className="hero__btn hero__btn--primary" onClick={() => onNavigate('products')}>
            Explore Products
          </button>
          <button className="hero__btn hero__btn--secondary" onClick={() => onNavigate('about')}>
            Our Story
          </button>
        </div>

        {/* Product previews */}
        <div className={`hero__previews ${loaded ? 'hero__previews--loaded' : ''}`}>
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className="hero__preview"
              onClick={() => onNavigate(product.id)}
              style={{
                transitionDelay: loaded ? `${1 + i * 0.15}s` : '0s',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="hero__preview-circle">
                <img src={product.image} alt={product.name} />
              </div>
              <span className="hero__preview-label">{product.tagline}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__fade-bottom" />
    </section>
  );
}
