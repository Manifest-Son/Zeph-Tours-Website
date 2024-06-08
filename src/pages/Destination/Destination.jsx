import "./Destination.css";
import place from "../../data/places";

// eslint-disable-next-line react/prop-types
const Places = ({ park, description, groupprice, individualprice, photo }) => {
  return (
    <li className="dest-list">
      <div className="cards">
        <h3>{park}</h3>
        <p>{description}</p>
        <button className="destination-more">Learn more</button>
      </div>
      <div className="prices">
        <p className="prices-txt">Group Price: Ksh. {groupprice}</p>
        <p className="prices-txt">Individual Price: Ksh. {individualprice}</p>
      </div>
      <img src={photo} alt={`An image of ${park}`} className="img" />
    </li>
  );
};
const Destination = () => {
  return (
    <section className="destination-contain">
      <h2 className="destination-header">Destinations</h2>
      <p className="destination-para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nihil
        eligendi cumque!
      </p>
      <div>
        <div className="destination-wrap">
          <ol className="list-wrap">
            {place.map((currentPlace, i) => (
              <Places
                key={i}
                park={currentPlace.park}
                description={currentPlace.description}
                groupprice={currentPlace.groupprice}
                individualprice={currentPlace.individualprice}
                photo={currentPlace.photo}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Destination;
