import React from "react";

import VisiMisiImage from "../../assets/VisiMisi.png";

const VisiMisi = () => {
    return (
        <section className="bg-white py-20 sm:py-24 lg:py-28">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col px-6 sm:px-8 lg:flex-row lg:items-center lg:px-10">

                {/* =========================
                    IMAGE
                ========================= */}
                <div className="w-full lg:w-[42%]">
                    <div className="overflow-hidden">
                        <img
                            src={VisiMisiImage}
                            alt="Rental Mobil Jogja"
                            className="
                                h-[280px]
                                w-full
                                object-cover

                                sm:h-[360px]

                                lg:h-[420px]
                            "
                        />
                    </div>
                </div>


                {/* =========================
                    VISI & MISI
                ========================= */}
                <div className="flex w-full flex-col gap-2 sm:gap-3 lg:w-[58%]">

                    {/* VISI */}
                    <div
                        className="
                            bg-[#2E6FA3]
                            px-6
                            py-6
                            text-white

                            sm:px-7
                            sm:py-7

                            lg:px-8
                            lg:py-6
                        "
                    >
                        <h2 className="text-2xl font-bold uppercase leading-none sm:text-3xl">
                            Visi
                        </h2>

                        <p className="mt-4 max-w-[650px] text-xs leading-5 sm:text-[13px]">
                            Menjadi penyedia jasa rental mobil terpercaya di
                            Yogyakarta dengan pelayanan profesional, armada
                            berkualitas, dan kepuasan pelanggan sebagai
                            prioritas utama.
                        </p>
                    </div>


                    {/* MISI */}
                    <div
                        className="
                            bg-[#2E6FA3]
                            px-6
                            py-6
                            text-white

                            sm:px-7
                            sm:py-7

                            lg:px-8
                            lg:py-6
                        "
                    >
                        <h2 className="text-2xl font-bold uppercase leading-none sm:text-3xl">
                            Misi
                        </h2>

                        <ul className="mt-4 list-disc space-y-1 pl-4 text-xs leading-5 sm:text-[13px]">
                            <li>
                                Menyediakan armada yang bersih, aman, dan
                                selalu dalam kondisi terbaik.
                            </li>

                            <li>
                                Memberikan pelayanan yang cepat, ramah, dan
                                profesional kepada setiap pelanggan.
                            </li>

                            <li>
                                Menawarkan harga sewa yang transparan dan
                                kompetitif tanpa biaya tersembunyi.
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default VisiMisi;