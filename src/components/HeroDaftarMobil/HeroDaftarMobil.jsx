import React from "react";

import HeroImage from "../../assets/hero-daftar-mobil.png";
import Curve from "../../assets/curve.svg";

const HeroDaftarMobil = () => {
    return (
        <section className="relative h-[500px] w-full overflow-hidden sm:h-[560px] lg:h-[850px]">

    {/* Background */}
    <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url(${HeroImage})`,
        }}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/45" />

    {/* Content */}
    <div className="relative z-10 flex h-full items-center justify-center px-5 pb-8 text-center sm:px-8">
        <div className="mt-8 sm:mt-10">

            <h1 className="
                text-3xl
                font-extrabold
                uppercase
                leading-[1.15]
                text-white
                sm:text-4xl
                lg:text-5xl
                xl:text-[52px]
            ">
                Rental Mobil Jogja
                <br />
                Terpercaya Untuk Semua
                <br />
                Perjalanan
            </h1>

            {/* Scroll Indicator */}
            <div className="mt-6 flex justify-center sm:mt-7">
                <div className="flex flex-col items-center">
                    <span className="h-3 w-3 rotate-45 border-b-2 border-r-2 border-white/80" />
                    <span className="-mt-1 h-3 w-3 rotate-45 border-b-2 border-r-2 border-white/80" />
                </div>
            </div>

        </div>
    </div>

    {/* Curve */}
    <img
        src={Curve}
        alt=""
        className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-20
            h-auto
            w-full
        "
    />

</section>
    );
};

export default HeroDaftarMobil;