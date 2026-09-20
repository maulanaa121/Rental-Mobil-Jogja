import React from "react";

import Mobil1 from "../../assets/cars/toyota-fortuner-1.png";
import Mobil2 from "../../assets/cars/toyota-fortuner-2.png";
import Mobil3 from "../../assets/cars/toyota-fortuner-3.png";

import WhatsappIcon from "../../assets/icons/whatsapp.svg";

const MobilUnggulan = () => {

    const mobil = [
        {
            image: Mobil1,
            name: "Toyota Fortuner",
            harian: "Rp 1.200.000 - Rp 1.300.000",
            supir: "Rp 1.500.000 - 1.800.000",
            bulanan: "Rp 23.000.000",
            aosDelay:300
        },
        {
            image: Mobil2,
            name: "Toyota Fortuner",
            harian: "Rp 1.200.000 - Rp 1.300.000",
            supir: "Rp 1.500.000 - 1.800.000",
            bulanan: "Rp 23.000.000",
            aosDelay:400
        },
        {
            image: Mobil3,
            name: "Toyota Fortuner",
            harian: "Rp 1.200.000 - Rp 1.300.000",
            supir: "Rp 1.500.000 - 1.800.000",
            bulanan: "Rp 23.000.000",
            aosDelay:500
        },
    ];

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">

            <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10">

                {/* =========================
                    TITLE
                ========================= */}
                <div className="text-center" >

                    <h2 data-aos="fade-down" data-aos-delay="150" className="text-2xl font-bold uppercase text-[#1769AA] sm:text-3xl">
                        Mobil Unggulan
                    </h2>

                    <p data-aos="fade-up" data-aos-delay="200" className="mx-auto mt-2 max-w-[700px] text-xs leading-5 text-gray-700 sm:text-sm">
                        Pilih armada terbaik kami yang selalu terawat,
                        nyaman, dan siap menemani setiap perjalanan Anda
                        di Yogyakarta.
                    </p>

                </div>


                {/* =========================
                    CARDS
                ========================= */}
                <div className="mt-8 grid grid-cols-1 justify-items-center gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

                    {mobil.map((item, index) => (

                        <div
                            data-aos="fade-down" data-aos-delay={item.aosDelay}
                            key={index}
                            className="
                                w-full
                                max-w-[270px]
                                overflow-hidden
                                rounded-md
                                bg-white
                                shadow-[0_3px_12px_rgba(0,0,0,0.12)]
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-[0_6px_20px_rgba(0,0,0,0.16)]
                            "
                        >

                            {/* =========================
                                CAR IMAGE
                            ========================= */}
                            <div className="flex h-[115px] items-center justify-center px-4 pt-3">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-contain"
                                />

                            </div>


                            {/* =========================
                                CONTENT
                            ========================= */}
                            <div className="px-4 pb-3">

                                {/* Car Name */}
                                <div className="mt-1 flex h-[25px] items-center justify-center rounded-full border-2 border-[#1769AA] bg-[#20A7D7]">

                                    <h3 className="text-[10px] font-bold text-white">
                                        {item.name}
                                    </h3>

                                </div>


                                {/* Daily */}
                                <div className="mt-3 text-center">

                                    <p className="text-[9px] font-medium text-gray-800">
                                        {item.harian}
                                    </p>

                                    <p className="mt-0.5 text-[8px] text-gray-600">
                                        (1-2 jam / dalam kota)
                                    </p>

                                </div>


                                {/* With Driver */}
                                <div className="mt-3 text-center">

                                    <p className="text-[9px] font-medium text-gray-800">
                                        {item.supir}
                                    </p>

                                    <p className="mt-0.5 text-[8px] text-gray-600">
                                        (Harian + Supir)
                                    </p>

                                </div>


                                {/* Monthly */}
                                <div className="mt-3 text-center">

                                    <p className="text-[9px] font-medium text-gray-800">
                                        {item.bulanan}
                                    </p>

                                    <p className="mt-0.5 text-[8px] text-gray-600">
                                        (Monthly)
                                    </p>

                                </div>


                                {/* Separator */}
                                <div className="mx-auto my-3 h-px w-[80%] bg-[#1769AA]"></div>


                                {/* WhatsApp Button */}
                                <a
                                    href="https://wa.me/6288806834354?text=Halo%2C%20saya%20ingin%20memesan%20Toyota%20Fortuner."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        mx-auto
                                        flex
                                        h-[28px]
                                        w-[120px]
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-[#1769AA]
                                        bg-white
                                        text-[9px]
                                        font-bold
                                        text-[#1769AA]
                                        transition-all
                                        duration-300
                                        hover:bg-[#1769AA]
                                        hover:text-white
                                    "
                                >
                                    Pesan sekarang

                                    <img
                                        src={WhatsappIcon}
                                        alt="WhatsApp"
                                        className="h-4 w-4"
                                    />
                                </a>


                                {/* Car Details */}
                                <button
                                    type="button"
                                    className="
                                        mx-auto
                                        mt-2
                                        flex
                                        items-center
                                        gap-1
                                        text-[8px]
                                        text-gray-700
                                        transition-colors
                                        hover:text-[#1769AA]
                                    "
                                >
                                    Car Details

                                    <span className="text-[9px]">
                                        ⓘ
                                    </span>
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default MobilUnggulan;