import '../styles/pages.css';

export default function ResearchCard({ area }) {
  return (
    <div className="research-card">
      <div className="research-icon">{area.icon}</div>
      <h3>{area.title}</h3>
      <p>{area.description}</p>
      <div className="research-keywords">
        {area.keywords.map(k => (
          <span key={k} className="tag">{k}</span>
        ))}
      </div>
    </div>
  );
}
