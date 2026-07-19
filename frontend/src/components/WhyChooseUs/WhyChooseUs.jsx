import "./WhyChooseUs.css";

const features = [
  {
    icon: "🎓",
    title: "Verified Students",
    desc: "Every student assistant is verified before joining the platform.",
  },
  {
    icon: "🛡️",
    title: "Safe & Secure",
    desc: "Your safety and privacy are our highest priorities.",
  },
  {
    icon: "⚡",
    title: "Quick Booking",
    desc: "Book trusted student assistants in just a few clicks.",
  },
  {
    icon: "💰",
    title: "Affordable",
    desc: "Quality services at student-friendly and community-friendly prices.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <h2>Why Choose EarnMate?</h2>

      <p className="why-subtitle">
        We connect communities with talented student assistants through a safe,
        reliable, and affordable platform.
      </p>

      <div className="why-grid">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;