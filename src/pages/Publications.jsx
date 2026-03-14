import { useState, useMemo } from 'react';
import PublicationCard from '../components/PublicationCard';
import publications from '../data/publications';
import '../styles/publications.css';

const categories = ['All', 'Catalysis', 'Magnetic Properties', 'Photovoltaics', 'Olivine Materials'];

export default function Publications() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    return publications.filter(p => {
      const matchCat = activeFilter === 'All' || p.category === activeFilter;
      const q = search.toLowerCase();
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.journal.toLowerCase().includes(q) || String(p.year).includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeFilter]);

  return (
    <div className="publications-page">
      <section className="pub-page-hero">
        <div className="container">
          <p className="section-label">Research Output</p>
          <h1>Publications</h1>
          <p>{publications.length} peer-reviewed publications in high-impact journals</p>
        </div>
      </section>

      <div className="pub-controls">
        <div className="container pub-controls-inner">
          <input
            className="pub-search"
            type="text"
            placeholder="Search by title, journal, or year…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="pub-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <p className="pub-results-info">
          Showing <strong>{filtered.length}</strong> of <strong>{publications.length}</strong> publications
        </p>
        {filtered.length > 0 ? (
          <div className="pub-grid">
            {filtered.map(pub => <PublicationCard key={pub.id} pub={pub} />)}
          </div>
        ) : (
          <div className="pub-empty">
            <div style={{ fontSize: '3rem' }}>🔍</div>
            <p>No publications match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
