import "./Stats.css";

const stats = [
  {
    number: "500+",
    label: "Student Assistants",
  },
  {
    number: "1000+",
    label: "Happy Customers",
  },
  {
    number: "50+",
    label: "Services Every Week",
  },
  {
    number: "4.9★",
    label: "Average Rating",
  },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;