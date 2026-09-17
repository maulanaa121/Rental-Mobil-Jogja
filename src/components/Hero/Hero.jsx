import React from "react";
import HeroImage from "../../assets/hero.png";

const Hero = () => {
    return (
        <section
            className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${HeroImage})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-5xl px-5 text-center sm:px-6 lg:px-8">

                <h1
                    className="
                        text-3xl
                        font-bold
                        uppercase
                        leading-tight
                        tracking-tight
                        text-white

                        sm:text-4xl
                        md:text-5xl
                        lg:text-6xl
                    "
                >
                    Mengenal Lebih Dekat
                    <br />
                    Rental Mobil Jogja Kami
                </h1>

            </div>
        </section>
    );
};

export default Hero;
