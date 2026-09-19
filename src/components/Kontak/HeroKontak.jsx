import HeroKontakImage from "../../assets/hero-kontak.png";

const HeroKontak = () => {
    return (
        <section
            className="
                relative
                h-[360px]
                w-full
                overflow-hidden
                bg-cover
                bg-center

                sm:h-[420px]
                lg:h-[500px]
            "
            style={{
                backgroundImage: `url(${HeroKontakImage})`,
            }}
        >
            {/* OVERLAY GAMBAR */}
            <div className="absolute inset-0 bg-black/35" />

            {/* BAYANGAN HITAM BAGIAN ATAS */}
            <div
                className="
                    absolute
                    left-0
                    right-0
                    top-0
                    z-[1]
                    h-[160px]
                    bg-gradient-to-b
                    from-black/75
                    via-black/40
                    to-transparent
                "
            />

            {/* OVERLAY BAWAH */}
            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-[1]
                    h-[120px]
                    bg-gradient-to-t
                    from-black/35
                    to-transparent
                "
            />

            {/* JUDUL */}
            <div
                className="
                    relative
                    z-10
                    flex
                    h-full
                    items-center
                    justify-center
                    px-6
                    pt-8
                    text-center
                "
            >
                <h1
                    className="
                        max-w-[850px]
                        text-3xl
                        font-extrabold
                        uppercase
                        leading-[1.15]
                        text-white
                        drop-shadow-lg

                        sm:text-4xl

                        lg:text-5xl
                    "
                >
                    Hubungi Kami Untuk Kebutuhan
                    <br />
                    Rental Mobil Anda
                </h1>
            </div>
        </section>
    );
};

export default HeroKontak;