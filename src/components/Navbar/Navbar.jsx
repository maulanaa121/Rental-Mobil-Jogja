import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo-Rental-Mobil-Jogja.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          <img src={Logo} alt="Rental Mobil Jogja" />
        </a>

        {/* Desktop Menu */}
        <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#beranda" onClick={closeMenu}>
            Beranda
          </a>

          <a href="#daftar-mobil" onClick={closeMenu}>
            Daftar Mobil
          </a>

          <a href="#tentang-kami" onClick={closeMenu}>
            Tentang Kami
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <a href="#kontak" onClick={closeMenu}>
            Kontak
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;