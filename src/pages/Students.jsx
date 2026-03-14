import '../styles/pages.css';

const students = [
  {
    name: 'Gopika G Pillai',
    topic: 'Tin-based oxides for photovoltaic applications – First-principles study of electronic and optical properties',
    status: 'Ongoing',
    emoji: '👩‍🎓',
  },
  {
    name: 'R. Suresh',
    topic: 'Intermediate band solar cell materials – Computational investigation of impurity-doped semiconductors',
    status: 'Ongoing',
    emoji: '👨‍🎓',
  },
  {
    name: 'K. Vaigal',
    topic: 'Photocatalytic water splitting materials – DFT study of metal oxide heterostructures',
    status: 'Ongoing',
    emoji: '👨‍🎓',
  },
];

export default function Students() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Mentorship</p>
          <h1>Students Mentored</h1>
          <p>Guiding the next generation of researchers in computational and experimental materials science.</p>
        </div>
      </section>

      <div className="students-body">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <p className="section-label">Current Students</p>
            <h2 className="section-title">Research Scholars</h2>
            <div className="divider" />
          </div>
          <div className="students-grid">
            {students.map((s, i) => (
              <div className="student-card" key={i}>
                <div className="student-avatar">{s.emoji}</div>
                <h3>{s.name}</h3>
                <p className="student-topic">{s.topic}</p>
                <span className="student-status">{s.status}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64, background: 'var(--bg-soft)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '36px 40px' }}>
            <p className="section-label">Opportunities</p>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Interested in Research?</h2>
            <p style={{ fontSize: 15, color: 'var(--text-body)', lineHeight: 1.8, maxWidth: 640, marginBottom: 24 }}>
              Dr. Kruthika welcomes motivated students interested in computational materials science,
              photovoltaics, and energy materials. Prospective students with backgrounds in Physics,
              Chemistry, or Materials Science are encouraged to reach out.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['MSc Projects', 'PhD Positions', 'Summer Internships', 'Collaborative Research'].map(t => (
                <span key={t} className="tag" style={{ fontSize: 13, padding: '6px 14px' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
