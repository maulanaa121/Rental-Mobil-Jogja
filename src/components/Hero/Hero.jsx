import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          MENGENAL LEBIH DEKAT
          <br />
          RENTAL MOBIL JOGJA KAMI
        </h1>
      </div>
    </section>
  );
};

export default Hero;