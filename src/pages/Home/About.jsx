const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-wrapper">
        <div className="about-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cDi2fVCtuk0?si=MGpxaQOEGRKg_BsG"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="about-text">
          <h1 className="about-title">Zeph Tours,</h1>
          <h3 className="about-subtitle">Best Safaris and Adventures.</h3>
          <p className="about-para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            facilis dolores. Magnam doloremque, nobis, commodi cumque
            perspiciatis cupiditate qui, aliquam repudiandae minus dolore
            molestias laudantium!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
