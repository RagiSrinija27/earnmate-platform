import "./PopularServices.css";

const services = [
  {
    icon: "🧹",
    title: "House Cleaning",
    desc: "Keep your home neat and fresh.",
  },
  {
    icon: "🪴",
    title: "Gardening",
    desc: "Lawn care and plant maintenance.",
  },
  {
    icon: "🍳",
    title: "Cooking",
    desc: "Fresh homemade meals on demand.",
  },
  {
    icon: "📚",
    title: "Tutoring",
    desc: "Academic support from students.",
  },
  {
    icon: "🛒",
    title: "Grocery Shopping",
    desc: "Convenient shopping assistance.",
  },
  {
    icon: "❤️",
    title: "Elderly Assistance",
    desc: "Friendly support for senior citizens.",
  },
];

function PopularServices() {
  return (
    <section className="services-section">
      <h2>Popular Services</h2>

      <p className="services-subtitle">
        Reliable help from verified student assistants for your everyday needs.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularServices;