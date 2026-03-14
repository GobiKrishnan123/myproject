import { Link } from 'react-router-dom';
import '../styles/footer.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/experience', label: 'Experience' },
  { to: '/awards', label: 'Awards' },
  { to: '/students', label: 'Students Mentored' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-brand-name">Dr. G. Kruthika</p>
            <p className="footer-brand-sub">Assistant Professor, Department of Physics</p>
            <p className="footer-bio">
              Physicist specializing in functional materials, metal oxide catalysis, and photovoltaic
              materials for solar energy applications at SASTRA University, Kumbakonam.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              {navLinks.map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item"><span>📍</span><span>Srinivasa Ramanujan Centre, SASTRA University, Kumbakonam, Tamil Nadu</span></div>
              <div className="footer-contact-item"><span>✉️</span><span>kruthikaganesan@gmail.com</span></div>
              <div className="footer-contact-item"><span>📞</span><span>+91-8838407178</span></div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dr. G. Kruthika · SASTRA University</span>
          <span>Department of Physics · Srinivasa Ramanujan Centre</span>
        </div>
      </div>
    </footer>
  );
}
