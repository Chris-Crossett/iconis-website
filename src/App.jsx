import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductsSection from './components/ProductsSection';
import ProductDetailModal from './components/ProductDetailModal';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PRODUCTS from './data/products';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const onNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If navigating to a product ID, scroll to products section and open modal
      const product = PRODUCTS.find((p) => p.id === id);
      if (product) {
        const productsEl = document.getElementById('products');
        if (productsEl) productsEl.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => setSelectedProduct(product), 400);
      }
    }
  };

  // Track active section for navbar highlighting
  useEffect(() => {
    const sectionIds = ['home', 'products', 'about', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />

      <Navbar activeSection={activeSection} onNavigate={onNavigate} />
      <Hero onNavigate={onNavigate} />
      <TrustBar />
      <ProductsSection onSelectProduct={setSelectedProduct} />
      <AboutSection />
      <ContactSection />
      <Footer />

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
