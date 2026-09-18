import React from "react";
import { Link } from "react-router-dom";

import FooterBackground from "../../assets/footer-bg.jpeg";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#246B9E] text-white">

            {/* Background Pattern */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                    backgroundImage: `url(${FooterBackground})`,
                }}
            ></div>


            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[435px] w-full max-w-[1200px] flex-col items-center justify-center px-6 py-16 sm:px-8">

                {/* Title */}
                <h2
                    className="
                        text-center
                        font-serif
                        text-3xl
                        font-normal
                        uppercase
                        leading-tight

                        sm:text-4xl
                    "
                >
                    Rental Mobil
                    <br />
                    Jogja
                </h2>


                {/* Divider */}
                <div className="mt-7 h-[3px] w-full max-w-[780px] bg-white sm:mt-8"></div>


                {/* Navigation */}
                <nav className="mt-8 flex flex-wrap items-center justify-center text-sm sm:text-base">

                    <Link
                        to="/"
                        className="px-3 transition-opacity duration-300 hover:opacity-70 sm:px-4"
                    >
                        Beranda
                    </Link>

                    <span className="text-white/80">|</span>

                    <Link
                        to="/daftar-mobil"
                        className="px-3 transition-opacity duration-300 hover:opacity-70 sm:px-4"
                    >
                        Daftar Mobil
                    </Link>

                    <span className="text-white/80">|</span>

                    <Link
                        to="/tentang-kami"
                        className="px-3 transition-opacity duration-300 hover:opacity-70 sm:px-4"
                    >
                        Tentang Kami
                    </Link>

                    <span className="text-white/80">|</span>

                    <Link
                        to="/faq"
                        className="px-3 transition-opacity duration-300 hover:opacity-70 sm:px-4"
                    >
                        FAQ
                    </Link>

                    <span className="text-white/80">|</span>

                    <Link
                        to="/kontak"
                        className="px-3 transition-opacity duration-300 hover:opacity-70 sm:px-4"
                    >
                        Kontak
                    </Link>

                </nav>


                {/* Email Icon */}
                <a
                    href="mailto:info@rentalmobiljogja.com"
                    aria-label="Email Rental Mobil Jogja"
                    className="
                        mt-6
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#246B9E]
                        transition-transform
                        duration-300
                        hover:scale-110
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                    >
                        <rect
                            x="3"
                            y="5"
                            width="18"
                            height="14"
                            rx="2"
                        />

                        <path d="m3 7 9 6 9-6" />
                    </svg>
                </a>


                {/* Copyright */}
                <p className="mt-5 text-center text-xs text-white/60 sm:text-sm">
                    Copyright © 2026 Rental Mobil Jogja
                </p>

            </div>
        </footer>
    );
};

export default Footer;
