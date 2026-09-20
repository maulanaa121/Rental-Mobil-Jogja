import React from "react";

import MobilImage from "../../assets/mobil-cta.png";
import WhatsappIcon from "../../assets/icons/whatsapp.svg";

const Bersiaplah = () => {  
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-6 sm:px-8 lg:flex-row lg:gap-16 lg:px-10">

                {/* =========================
                    IMAGE MOBIL
                ========================= */}
                <div className="flex w-full justify-center lg:w-1/2 lg:justify-start" data-aos="fade-right" data-aos-delay="250">
                    <img
                        src={MobilImage}
                        alt="Rental Mobil Jogja"
                        className="
                            w-full
                            max-w-[420px]
                            object-contain

                            sm:max-w-[480px]

                            lg:max-w-[520px]
                        "
                    />
                </div>


                {/* =========================
                    CONTENT
                ========================= */}
                <div className="w-full text-center lg:w-1/2 lg:text-left" data-aos="fade-left" data-aos-delay="350">

                    <h2
                        className="
                            mx-auto
                            max-w-[500px]
                            text-2xl
                            font-bold
                            leading-tight
                            text-[#1769AA]

                            sm:text-3xl

                            lg:mx-0
                            lg:text-[32px]
                        "
                    >
                        Bersiaplah untuk pengalaman
                        <br className="hidden sm:block" />
                        sewa mobil terbaik di kota anda
                    </h2>


                    {/* =========================
                        BUTTON
                    ========================= */}
                    <a
                        href="https://wa.me/6288806834354?text=Halo%2C%20saya%20ingin%20menanyakan%20rental%20mobil."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            mt-6
                            inline-flex
                            h-[38px]
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            border
                            border-[#1769AA]
                            bg-white
                            px-4
                            text-sm
                            font-semibold
                            text-[#1769AA]

                            transition-all
                            duration-300

                            hover:bg-[#1769AA]
                            hover:text-white
                        "
                    >
                        Hubungi Kami

                        <img
                            src={WhatsappIcon}
                            alt="WhatsApp"
                            className="h-5 w-5"
                        />
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Bersiaplah;