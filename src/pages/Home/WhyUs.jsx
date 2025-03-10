import whyus from "../../data/whyus";

// eslint-disable-next-line react/prop-types
const Why = ({ icon, title, description }) => {
  return (
    <div className="why">
      <div className="why-icons">{icon}</div>
      <h2 className="why-title">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="why-us-section">
      {whyus.map((currWhy, i) => (
        <Why
          key={i}
          icon={<currWhy.icon />}
          title={currWhy.title}
          description={currWhy.description}
        />
      ))}
    </section>
  );
};

export default WhyUs;
