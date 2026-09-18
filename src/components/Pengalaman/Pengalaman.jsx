import PengalamanImage from "../../assets/pengalaman.png";

const Pengalaman = () => {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1200px]
                    grid-cols-1
                    items-center
                    gap-10
                    px-6

                    sm:px-8

                    lg:grid-cols-2
                    lg:gap-16
                    lg:px-10
                "
            >
                {/* =========================
                    TEXT
                ========================= */}
                <div className="max-w-[420px]">
                    <h2
                        className="
                            text-xl
                            font-bold
                            leading-tight
                            text-[#1769AA]

                            sm:text-2xl
                        "
                    >
                        Bersiaplah untuk pengalaman
                        <br />
                        sewa mobil terbaik di kota anda
                    </h2>

                    <p
                        className="
                            mt-4
                            text-sm
                            leading-[1.6]
                            text-gray-700
                            sm:text-[15px]
                        "
                    >
                        Berbagai pilihan mobil yang bersih, terawat,
                        dan siap menemani perjalanan wisata, bisnis,
                        maupun kebutuhan harian di Yogyakarta.
                    </p>

                    {/* LINK */}
                    <a
                        href="/daftar-mobil"
                        className="
                            mt-5
                            inline-block
                            border-b
                            border-gray-700
                            pb-1
                            text-xs
                            font-medium
                            text-gray-800
                            transition-colors
                            duration-200
                            hover:text-[#1769AA]
                            hover:border-[#1769AA]

                            sm:text-sm
                        "
                    >
                        Lihat Semua Mobil &gt;&gt;
                    </a>
                </div>

                {/* =========================
                    IMAGE
                ========================= */}
                <div className="w-full">
                    <img
                        src={PengalamanImage}
                        alt="Pilihan mobil rental Yogyakarta"
                        className="
                            h-auto
                            w-full
                            object-cover
                        "
                    />
                </div>
            </div>
        </section>
    );
};

export default Pengalaman;