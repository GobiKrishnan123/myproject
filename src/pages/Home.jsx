import { Link } from 'react-router-dom';
import PublicationCard from '../components/PublicationCard';
import publications from '../data/publications';
import '../styles/home.css';

const highlights = [
  { icon: '⚗️', title: 'Bifunctional Catalytic Properties of Metal Oxides', desc: 'Dual catalytic activity for oxygen evolution and reduction reactions in fuel cells.' },
  { icon: '🧲', title: 'Magnetic Properties of Metal Oxides', desc: 'Computational study of magnetic ordering transitions in microporous metal oxides.' },
  { icon: '☀️', title: 'Photovoltaic Properties of Perovskites', desc: 'First-principles study of perovskite materials for next-generation solar cells.' },
  { icon: '🔋', title: 'Electrical Properties of Olivine Materials', desc: 'Impedance spectroscopy of LiMPO₄ materials for energy storage applications.' },
];

const expCards = [
  { period: 'Sep 2022 – Present', role: 'Assistant Professor', org: 'SASTRA University, Kumbakonam' },
  { period: '2019 – 2022', role: 'UGC-DSK Post Doctoral Fellow', org: 'Central University of Tamil Nadu' },
  { period: '2018 – 2019', role: 'Research Associate', org: 'Central University of Tamil Nadu' },
  { period: '2012 – 2018', role: 'PhD Research Scholar', org: 'CSIR-CECRI, Karaikudi' },
];

const awards = [
  '🏅 UGC-DSK Post Doctoral Fellowship',
  '🌟 DST INSPIRE Fellowship',
  '📜 SET Qualified 2016',
  '📜 GATE Qualified 2010',
  '🥇 Gold Medal – MSc Physics',
  '🏆 Top 1% – IAPT National Physics Exam',
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-badge"><span></span> Available for Research Collaboration</div>
              <h1>Dr. G. Kruthika</h1>
              <p className="hero-role">Assistant Professor – Physics</p>
              <p className="hero-dept">Srinivasa Ramanujan Centre · SASTRA University, Kumbakonam</p>
              <p className="hero-bio">
                Physicist specializing in functional materials, metal oxide catalysis, and photovoltaic
                materials for solar energy applications. Research focuses on computational and experimental
                studies of materials used in energy conversion and storage technologies.
              </p>
              <div className="hero-actions">
                <Link to="/publications" className="btn hero-btn-primary">View Publications</Link>
                <Link to="/contact" className="btn hero-btn-outline">Get in Touch</Link>
              </div>
              <div className="hero-stats">
                <div className="stat-item"><div className="stat-num">9+</div><div className="stat-label">Publications</div></div>
                <div className="stat-item"><div className="stat-num">10+</div><div className="stat-label">Years Research</div></div>
                <div className="stat-item"><div className="stat-num">6</div><div className="stat-label">Awards</div></div>
                <div className="stat-item"><div className="stat-num">3</div><div className="stat-label">Students</div></div>
              </div>
            </div>
            <div className="hero-photo-wrap">
              <div className="hero-photo">👩‍🔬</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="section highlights">
        <div className="container">
          <p className="section-label">Research Focus</p>
          <h2 className="section-title">Research Highlights</h2>
          <div className="divider" />
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <div className="highlight-card" key={i}>
                <div className="highlight-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="section featured-pubs">
        <div className="container">
          <p className="section-label">Selected Works</p>
          <h2 className="section-title">Featured Publications</h2>
          <div className="divider" />
          <div className="pubs-grid">
            {publications.slice(0, 3).map(pub => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/publications" className="btn btn-outline">View All Publications →</Link>
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="section exp-summary">
        <div className="container">
          <p className="section-label">Career</p>
          <h2 className="section-title">Academic Experience</h2>
          <div className="divider" />
          <div className="exp-timeline">
            {expCards.map((e, i) => (
              <div className="exp-card" key={i}>
                <p className="exp-period">{e.period}</p>
                <h3>{e.role}</h3>
                <p>{e.org}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/experience" className="btn btn-outline">Full Experience →</Link>
          </div>
        </div>
      </section>

      {/* Awards Strip */}
      <section className="awards-strip">
        <div className="container">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Awards & Fellowships</h2>
          <div className="awards-list">
            {awards.map((a, i) => (
              <div className="award-chip" key={i}>{a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section contact-preview">
        <div className="container">
          <div className="contact-preview-inner">
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title">Open to Collaboration</h2>
              <div className="divider" />
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Srinivasa Ramanujan Centre, SASTRA University, Kumbakonam, Tamil Nadu</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>kruthikaganesan@gmail.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91-8838407178</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-cta-box">
              <h3>Interested in Collaboration?</h3>
              <p>Reach out for research collaborations, academic inquiries, or student mentorship opportunities.</p>
              <Link to="/contact" className="btn btn-primary">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
