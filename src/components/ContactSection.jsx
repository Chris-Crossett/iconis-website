import FadeIn from './FadeIn';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__dots" />
      <div className="contact-section__inner">
        <FadeIn>
          <span className="contact-section__label">Get In Touch</span>
          <h2 className="contact-section__title">
            Questions? <span className="contact-section__title-emphasis">We'd love to hear from you.</span>
          </h2>
          <div className="contact-section__links">
            <a href="mailto:info@myiconis.com" className="contact-section__email">
              ✉ &nbsp; info@myiconis.com
            </a>
            <p className="contact-section__details">
              Salt Lake City, UT &nbsp;·&nbsp; +1 (662) 426-6471
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
