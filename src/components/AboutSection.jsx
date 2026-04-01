import FadeIn from './FadeIn';
import IMAGES from '../data/images';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-section__inner">
        <FadeIn>
          <div className="about-section__content">
            <div className="about-section__photo-wrap">
              <div className="about-section__photo">
                <img src={IMAGES.shellie} alt="Shellie Crossett" />
              </div>
            </div>
            <div className="about-section__text">
              <span className="about-section__label">Our Founder</span>
              <h2 className="about-section__name">Shellie Crossett</h2>
              <p className="about-section__credentials">
                MSN, FNP, NP-C &nbsp;·&nbsp; President
              </p>
              <p className="about-section__bio">
                Trained at the University of Southern Indiana as a Board Certified Family Nurse Practitioner,
                Shellie started Iconis Bioceuticals with the purpose of providing innovative formulations
                that address specific needs of our customers.
              </p>
              <p className="about-section__bio">
                With a passion for researching ways to help people feel and appear more healthy and confident,
                she has explored alternative, non-traditional medical approaches with more natural options —
                achieving her goal of people being able to <em>Live Free. Live Confident. Live Now.</em>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="about-section__usa-banner">
            <img src={IMAGES.madeInUSA} alt="Made in USA" className="about-section__usa-image" />
            <div>
              <h4 className="about-section__usa-title">Manufactured in the U.S.A.</h4>
              <p className="about-section__usa-desc">
                All products are made in a Certified Facility (CGMF) in compliance with NSF/ANSI Standard 173,
                Section 8. GMP requirements enforced by the US FDA under Title 21 CFR.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
