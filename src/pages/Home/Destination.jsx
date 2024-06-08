import "./Home.css";
import toprated from "../../data/destination";

// eslint-disable-next-line react/prop-types
const Rated = ({ img, title, description, price }) => {
  return (
    <div>
      <div className="destination-wrapper">
        <img src={img} alt="A photo of a park" className="destination-img" />
        <h2 className="description-title">{title}</h2>
        <p className="description">{description}</p>
        <div className="description-footer">
          <p className="price">{price}</p>
          <button className="description-cta">Learn More</button>
        </div>
      </div>
    </div>
  );
};

const Destination = () => {
  return (
    <section className="destination-rated">
      <h2 className="dest-title">Check out these higly rated sites</h2>
      <div className="destination-container">
        {toprated.map((currentPlace, i) => (
          <Rated
            key={i}
            img={currentPlace.img}
            title={currentPlace.title}
            description={currentPlace.description}
            price={currentPlace.price}
          />
        ))}
        ;
      </div>
    </section>
  );
};

export default Destination;
