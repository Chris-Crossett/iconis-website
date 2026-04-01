import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__copyright">
          © {new Date().getFullYear()} Iconis Bioceuticals. All rights reserved.
        </div>
        <div className="footer__disclaimer">
          *These statements have not been evaluated by the FDA. Products are not intended
          to prevent, diagnose, treat or cure any disease.
        </div>
      </div>
    </footer>
  );
}
