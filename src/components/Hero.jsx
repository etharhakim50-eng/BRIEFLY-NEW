function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <span className="hero-label">
          YOUR DAILY NEWS
        </span>

        <h1>
          The world,
          <br />
          one story
          <br />
          at a time.
        </h1>

        <p>
          Stay curious. Discover what's happening
          around the world, one story at a time.
        </p>

        <a href="#news" className="hero-btn">
          Explore stories
          <span>→</span>
        </a>

      </div>

      <div className="hero-circle">
        <span>BRIEFLY</span>
      </div>

    </section>
  );
}

export default Hero;