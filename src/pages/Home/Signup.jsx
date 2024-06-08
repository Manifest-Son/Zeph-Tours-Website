const Subscribe = () => {
  return (
    <section className="signup-container">
      <h2 className="signup-title">Sucbcribe to our Newsletter Today</h2>
      <div className="signup-wrapper">
        <form action="">
          <fieldset className="signup">
            <legend>Subscribe</legend>
            <label htmlFor="fName">First Name:</label>
            <input
              type="text"
              name="firstName"
              className="signup-input"
              placeholder="John"
            />
            <label htmlFor="lName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              className="signup-input"
              placeholder="Doe"
            />
            <label htmlFor="email">E-mail Address</label>
            <input
              type="email"
              name="email"
              className="signup-input"
              placeholder="johndoe@example.com"
            />
            <button name="submit" className="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
