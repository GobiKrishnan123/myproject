import '../styles/pages.css';

const awards = [
  {
    medal: '🏅',
    title: 'UGC-DSK Post Doctoral Fellowship',
    desc: 'Awarded by the University Grants Commission – Dr. S. Kothari Post Doctoral Fellowship scheme for outstanding post-doctoral research in Physical Sciences.',
    year: '2019',
  },
  {
    medal: '🌟',
    title: 'DST INSPIRE Fellowship',
    desc: 'Innovation in Science Pursuit for Inspired Research (INSPIRE) Fellowship awarded by the Department of Science and Technology, Government of India, for doctoral research.',
    year: '2012',
  },
  {
    medal: '📜',
    title: 'SET Qualified',
    desc: 'Qualified the State Eligibility Test (SET) for Lectureship in Physics, demonstrating eligibility for assistant professorship in Tamil Nadu.',
    year: '2016',
  },
  {
    medal: '📜',
    title: 'GATE Qualified',
    desc: 'Qualified the Graduate Aptitude Test in Engineering (GATE) in Physics, a national-level examination conducted by IITs.',
    year: '2010',
  },
  {
    medal: '🥇',
    title: 'Gold Medal – MSc Physics',
    desc: 'Awarded Gold Medal for academic excellence and top rank in MSc Physics at Madurai Kamaraj University.',
    year: '2011',
  },
  {
    medal: '🏆',
    title: 'Top 1% – IAPT National Physics Exam',
    desc: 'Achieved top 1% ranking in the Indian Association of Physics Teachers (IAPT) National Physics Examination.',
    year: '2008',
  },
  {
    medal: '🎤',
    title: 'Physics Talent Quest Program',
    desc: 'Presented research work at the Physics Talent Quest Program, a national-level platform for young physics researchers.',
    year: '2009',
  },
];

export default function Awards() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Recognition</p>
          <h1>Awards & Fellowships</h1>
          <p>National fellowships, academic distinctions, and competitive examination qualifications.</p>
        </div>
      </section>

      <div className="awards-body">
        <div className="container">
          <div className="awards-grid">
            {awards.map((a, i) => (
              <div className="award-card" key={i}>
                <div className="award-medal">{a.medal}</div>
                <div className="award-info">
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className="award-year">{a.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
