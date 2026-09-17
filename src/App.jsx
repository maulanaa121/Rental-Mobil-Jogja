import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <section id="beranda" className="hero">
          <div className="hero-content">
            <h1>
              Rental Mobil
              <br />
              Jogja
            </h1>

            <p>
              Temukan kendaraan terbaik untuk perjalanan
              Anda di Yogyakarta.
            </p>

            <a href="#daftar-mobil" className="hero-button">
              Lihat Daftar Mobil
            </a>
          </div>
        </section>


        {/* Daftar Mobil */}
        <section id="daftar-mobil">
          <h2>Daftar Mobil</h2>
        </section>


        {/* Tentang Kami */}
        <section id="tentang-kami">
          <h2>Tentang Kami</h2>
        </section>


        {/* FAQ */}
        <section id="faq">
          <h2>FAQ</h2>
        </section>


        {/* Kontak */}
        <section id="kontak">
          <h2>Kontak</h2>
        </section>

      </main>
    </>
  );
}

export default App;