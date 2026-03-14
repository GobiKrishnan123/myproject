import '../styles/publications.css';

export default function PublicationCard({ pub }) {
  return (
    <div className="pub-card">
      <div className="pub-card-header">
        <span className="pub-category">{pub.category}</span>
        <span className="pub-year">{pub.year}</span>
      </div>
      <p className="pub-title">{pub.title}</p>
      <p className="pub-authors">{pub.authors}</p>
      <p className="pub-journal">{pub.journal}</p>
      <div className="pub-footer">
        <span className="pub-if">
          {pub.impactFactor
            ? <><strong>IF:</strong> {pub.impactFactor}</>
            : <span>Conference Proceedings</span>}
        </span>
        <a href={pub.doi} className="pub-link" target="_blank" rel="noreferrer">
          View Paper →
        </a>
      </div>
    </div>
  );
}
