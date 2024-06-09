import adventure from "../../data/Adventure";
import "./Trip.css";
import { IoLocation, IoPricetagsSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Adv = ({ img, location, price }) => {
  return (
    <div className="trip-wrapper">
      <img
        src={img}
        alt="This image shows a honeymon variety rooms."
        className="trip-img"
      />
      <div className="variety-txt">
        <p className="trip-desc">
          {<IoLocation />} <br />
          {location}
        </p>
        <p className="trip-desc">
          {<IoPricetagsSharp />} <br />
          Kshs. {price}
        </p>
      </div>
    </div>
  );
};

const Adventure = () => {
  return (
    <div className="trips">
      <h2 className="trip-header">Adventure</h2>
      <p className="trip-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, autem
        vero? Suscipit nemo vero provident, blanditiis corporis delectus beatae
        voluptate reprehenderit, ut fugit sapiente nesciunt?
      </p>
      <div className="trip-container">
        {adventure.map((currentPlace, i) => (
          <Adv
            key={i}
            img={currentPlace.img}
            location={currentPlace.location}
            price={currentPlace.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Adventure;
