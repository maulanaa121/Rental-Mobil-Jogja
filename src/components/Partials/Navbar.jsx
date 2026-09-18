import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo-Rental-Mobil-Jogja.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="absolute top-0 left-0 z-50 w-full">
            <div className="mx-auto flex min-h-[70px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex h-[58px] w-[58px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white"
                >
                    <img
                        src={Logo}
                        alt="Rental Mobil Jogja"
                        className="h-full w-full object-contain"
                    />
                </Link>


                {/* Desktop Menu */}
                <nav className="hidden items-center gap-7 md:flex lg:gap-8">

                    <Link
                        to="/"
                        className="text-[16px] font-normal text-white transition-colors duration-300 hover:text-[#F2C94C]"
                    >
                        Beranda
                    </Link>

                    <Link
                        to="/daftar-mobil"
                        className="text-[16px] font-normal text-white transition-colors duration-300 hover:text-[#F2C94C]"
                    >
                        Daftar Mobil
                    </Link>

                    <Link
                        to="/tentang-kami"
                        className="text-[16px] font-normal text-white transition-colors duration-300 hover:text-[#F2C94C]"
                    >
                        Tentang Kami
                    </Link>

                    <Link
                        to="/faq"
                        className="text-[16px] font-normal text-white transition-colors duration-300 hover:text-[#F2C94C]"
                    >
                        FAQ
                    </Link>

                    <Link
                        to="/kontak"
                        className="text-[16px] font-normal text-white transition-colors duration-300 hover:text-[#F2C94C]"
                    >
                        Kontak
                    </Link>

                </nav>


                {/* Hamburger Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                >
                    <span
                        className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
                            isMenuOpen
                                ? "translate-y-[7px] rotate-45"
                                : ""
                        }`}
                    />

                    <span
                        className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
                            isMenuOpen
                                ? "opacity-0"
                                : ""
                        }`}
                    />

                    <span
                        className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
                            isMenuOpen
                                ? "-translate-y-[7px] -rotate-45"
                                : ""
                        }`}
                    />
                </button>

            </div>


            {/* Mobile Menu */}
            <div
                className={`absolute left-0 top-[70px] w-full bg-black/95 backdrop-blur-md transition-all duration-300 md:hidden ${
                    isMenuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-3 opacity-0"
                }`}
            >
                <nav className="flex flex-col px-5 py-3">

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="border-b border-white/10 py-4 text-[16px] text-white transition-colors hover:text-[#F2C94C]"
                    >
                        Beranda
                    </Link>

                    <Link
                        to="/daftar-mobil"
                        onClick={closeMenu}
                        className="border-b border-white/10 py-4 text-[16px] text-white transition-colors hover:text-[#F2C94C]"
                    >
                        Daftar Mobil
                    </Link>

                    <Link
                        to="/tentang-kami"
                        onClick={closeMenu}
                        className="border-b border-white/10 py-4 text-[16px] text-white transition-colors hover:text-[#F2C94C]"
                    >
                        Tentang Kami
                    </Link>

                    <Link
                        to="/faq"
                        onClick={closeMenu}
                        className="border-b border-white/10 py-4 text-[16px] text-white transition-colors hover:text-[#F2C94C]"
                    >
                        FAQ
                    </Link>

                    <Link
                        to="/kontak"
                        onClick={closeMenu}
                        className="py-4 text-[16px] text-white transition-colors hover:text-[#F2C94C]"
                    >
                        Kontak
                    </Link>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;