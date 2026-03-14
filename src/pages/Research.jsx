import ResearchCard from '../components/ResearchCard';
import researchAreas from '../data/research';
import '../styles/pages.css';

export default function Research() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Research</p>
          <h1>Research Areas</h1>
          <p>Computational and experimental investigation of functional materials for energy applications.</p>
        </div>
      </section>

      <div className="research-body">
        <div className="container">
          <div className="research-grid" style={{ paddingTop: 8 }}>
            {researchAreas.map(area => (
              <ResearchCard key={area.id} area={area} />
            ))}
          </div>

          <div style={{ marginTop: 56, background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '36px 40px' }}>
            <p className="section-label">Methodology</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Computational Approach</h2>
            <p style={{ fontSize: 15, color: 'var(--text-body)', lineHeight: 1.8, maxWidth: 720 }}>
              Research employs first-principles Density Functional Theory (DFT) calculations using VASP and
              Quantum ESPRESSO codes on high-performance computing clusters. Structural optimizations,
              electronic band structure calculations, density of states analysis, and optical property
              computations are performed to understand and predict material behavior before experimental
              validation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
              {['VASP', 'Quantum ESPRESSO', 'DFT+U', 'GGA/PBE', 'HSE06', 'VESTA', 'Materials Project', 'HPC Clusters'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
