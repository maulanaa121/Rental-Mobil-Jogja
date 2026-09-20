import React from "react";

import AboutImage1 from "../../assets/about-1.png";
import AboutImage2 from "../../assets/about-2.png";
import AboutImage3 from "../../assets/about-3.png";
import AboutImage4 from "../../assets/about-4.png";

const About = () => {
    return (
        <section className="bg-white py-20 sm:py-24 lg:py-28">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 px-6 sm:px-8 lg:flex-row lg:gap-20 lg:px-10">

                {/* =========================
                    CONTENT
                ========================= */}
                <div className="w-full lg:w-[45%]">

                    <h2 data-aos = "fade-right" data-aos-delay="250" className="max-w-[350px] text-3xl font-bold uppercase leading-[1.15] text-[#1769AA] sm:text-4xl">
                        Tentang Rental
                        <br />
                        Mobil Jogja
                    </h2>

                    <p data-aos = "fade-right" data-aos-delay="350" className="mt-5 max-w-[500px] text-sm leading-6 text-gray-700 sm:text-[15px]">
                        Kami adalah penyedia jasa rental mobil di Yogyakarta
                        yang berkomitmen menghadirkan layanan transportasi yang
                        aman, nyaman, dan terpercaya. Dengan armada yang selalu
                        terawat serta pelayanan profesional, kami siap memenuhi
                        kebutuhan perjalanan wisata, bisnis, keluarga, maupun
                        keperluan pribadi.
                    </p>

                    <p data-aos = "fade-right" data-aos-delay="450" className="mt-3 max-w-[500px] text-sm leading-6 text-gray-700 sm:text-[15px]">
                        Kepuasan pelanggan menjadi prioritas utama dalam setiap
                        layanan yang kami berikan.
                    </p>

                </div>


                {/* =========================
                    IMAGE GALLERY
                ========================= */}
                <div className="grid w-full max-w-[520px] grid-cols-2 gap-2 sm:gap-3 lg:w-[55%]">

                    {/* Kolom kiri */}
                    <div className="flex flex-col gap-2 sm:gap-3">

                        {/* Image 1 */}
                        <div className="overflow-hidden">
                            <img data-aos = "fade-zoom-in" data-aos-delay="250"
                                src={AboutImage1}
                                alt="Rental Mobil Jogja"
                                className="h-[140px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[175px] lg:h-[190px]"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="overflow-hidden">
                            <img data-aos = "fade-zoom-in" data-aos-delay="350"
                                src={AboutImage2}
                                alt="Armada Rental Mobil Jogja"
                                className="h-[200px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[250px] lg:h-[285px]"
                            />
                        </div>

                    </div>


                    {/* Kolom kanan */}
                    <div className="flex flex-col gap-2 sm:gap-3">

                        {/* Image 3 - tinggi */}
                        <div className="overflow-hidden">
                            <img data-aos = "fade-zoom-in" data-aos-delay="450"
                                src={AboutImage3}
                                alt="Rental Mobil Jogja"
                                className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[310px] lg:h-[380px]"
                            />
                        </div>

                        {/* Image 4 */}
                        <div className="overflow-hidden">
                            <img data-aos = "fade-zoom-in" data-aos-delay="550"
                                src={AboutImage4}
                                alt="Armada Mobil"
                                className="h-[90px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[115px] lg:h-[135px]"
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
