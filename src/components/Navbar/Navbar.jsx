import { useState } from "react";
import { Link } from "react-router-dom";

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
                <Link
                    to="/"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    <img
                        src={Logo}
                        alt="Rental Mobil Jogja"
                    />
                </Link>

                {/* Desktop / Mobile Menu */}
                <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>

                    <Link
                        to="/"
                        onClick={closeMenu}
                    >
                        Beranda
                    </Link>

                    <Link
                        to="/daftar-mobil"
                        onClick={closeMenu}
                    >
                        Daftar Mobil
                    </Link>

                    <Link
                        to="/tentang-kami"
                        onClick={closeMenu}
                    >
                        Tentang Kami
                    </Link>

                    <Link
                        to="/faq"
                        onClick={closeMenu}
                    >
                        FAQ
                    </Link>

                    <Link
                        to="/kontak"
                        onClick={closeMenu}
                    >
                        Kontak
                    </Link>

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