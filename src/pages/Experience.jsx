import '../styles/pages.css';

const teaching = [
  {
    period: 'Sep 2022 – Present',
    role: 'Assistant Professor',
    org: 'SASTRA University (Srinivasa Ramanujan Centre)',
    location: 'Kumbakonam, Tamil Nadu',
    desc: 'Teaching undergraduate and postgraduate Physics courses. Conducting research in computational materials science and guiding student projects in photovoltaic and catalytic materials.',
  },
];

const research = [
  {
    period: '2019 – 2022',
    role: 'UGC-DSK Post Doctoral Fellow',
    org: 'Central University of Tamil Nadu',
    location: 'Thiruvarur, Tamil Nadu',
    desc: 'Post-doctoral research on perovskite-based photovoltaic materials using first-principles DFT calculations. Investigated optoelectronic properties and interface engineering for solar cell applications.',
  },
  {
    period: '2018 – 2019',
    role: 'Research Associate',
    org: 'Central University of Tamil Nadu',
    location: 'Thiruvarur, Tamil Nadu',
    desc: 'Research on computational study of halide perovskites and their applications in photovoltaic devices.',
  },
  {
    period: '2012 – 2018',
    role: 'PhD Research Scholar',
    org: 'CSIR Central Electro Chemical Research Institute (CECRI)',
    location: 'Karaikudi, Tamil Nadu',
    desc: 'Doctoral research on metal oxide nanostructures (α-MnO₂) for bifunctional electrocatalysis (OER/ORR), magnetic properties, and olivine-structured LiMPO₄ materials for energy storage.',
  },
];

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-card">
            <p className="timeline-period">{item.period}</p>
            <h3>{item.role}</h3>
            <p className="org">{item.org} · {item.location}</p>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Career</p>
          <h1>Experience</h1>
          <p>Academic and research career spanning over a decade in materials science.</p>
        </div>
      </section>

      <div className="experience-body">
        <div className="container">
          <div className="exp-section">
            <h2>🏫 Teaching Experience</h2>
            <Timeline items={teaching} />
          </div>
          <div className="exp-section">
            <h2>🔬 Research Experience</h2>
            <Timeline items={research} />
          </div>
        </div>
      </div>
    </>
  );
}
