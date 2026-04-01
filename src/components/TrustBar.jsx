import FadeIn from './FadeIn';
import './TrustBar.css';

const TRUST_ITEMS = [
  { icon: '🌿', title: 'Plant-Based', desc: 'Natural ingredients' },
  { icon: '🇺🇸', title: 'Made in U.S.A.', desc: 'CGMF certified facility' },
  { icon: '🧬', title: 'Non-GMO', desc: 'Clean formulations' },
  { icon: '🔬', title: 'Science-Backed', desc: 'Research-driven formulas' },
];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="trust-bar__inner">
        {TRUST_ITEMS.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="trust-bar__item">
              <div className="trust-bar__icon">{item.icon}</div>
              <div className="trust-bar__title">{item.title}</div>
              <div className="trust-bar__desc">{item.desc}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
