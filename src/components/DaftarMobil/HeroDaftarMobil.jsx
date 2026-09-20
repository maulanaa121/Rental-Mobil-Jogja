import HeroImage from "../../assets/hero-mobil.png";

const HeroDaftarMobil = () => {
    return (
        <section
            className="
                relative
                h-[420px]
                w-full
                overflow-hidden
                bg-cover
                bg-center

                sm:h-[480px]
                lg:h-[560px]
            "
            style={{
                backgroundImage: `url(${HeroImage})`,
            }}
        >
            {/* OVERLAY GELAP SELURUH HERO */}
            <div className="absolute inset-0 bg-black/25" />

            {/* BAYANGAN HITAM BAGIAN ATAS */}
            <div
                className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[160px]
                    bg-gradient-to-b
                    from-black/70
                    via-black/35
                    to-transparent
                "
            />

            {/* BAYANGAN SEDIKIT DI BAGIAN BAWAH */}
            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-[140px]
                    bg-gradient-to-t
                    from-black/35
                    to-transparent
                "
            />

            {/* CONTENT */}
            <div data-aos="fade-right" data-aos-delay="250"
                className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    px-6
                    text-center
                "
            >
                <h1
                    className="
                        max-w-[750px]
                        text-3xl
                        font-extrabold
                        uppercase
                        leading-[1.2]
                        text-white
                        drop-shadow-md

                        sm:text-4xl
                        lg:text-5xl
                    "
                >
                    Pilih Armada Berkualitas
                    <br />
                    Sesuai Kebutuhan
                    <br />
                    Perjalanan Anda
                </h1>

                {/* ARROW */}
                <a
                    href="#armada"
                    aria-label="Lihat daftar armada"
                    className="
                        mt-8
                        flex
                        flex-col
                        items-center
                        transition-transform
                        duration-300
                        hover:translate-y-1
                    "
                >
                    <span
                        className="
                            h-5
                            w-5
                            rotate-45
                            border-b-2
                            border-r-2
                            border-white
                        "
                    />

                    <span
                        className="
                            -mt-2
                            h-5
                            w-5
                            rotate-45
                            border-b-2
                            border-r-2
                            border-white
                        "
                    />
                </a>
            </div>
        </section>
    );
};

export default HeroDaftarMobil;