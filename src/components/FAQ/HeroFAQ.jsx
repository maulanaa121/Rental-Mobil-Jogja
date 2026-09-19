import HeroFAQImage from "../../assets/hero-faq.png";

const HeroFAQ = () => {
    return (
        <section
            className="
                relative
                h-[380px]
                w-full
                overflow-hidden
                bg-cover
                bg-center

                sm:h-[440px]
                lg:h-[500px]
            "
            style={{
                backgroundImage: `url(${HeroFAQImage})`,
            }}
        >
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30" />

            {/* BAYANGAN HITAM BAGIAN ATAS */}
            <div
                className="
                    absolute
                    left-0
                    right-0
                    top-0
                    z-[1]
                    h-[150px]
                    bg-gradient-to-b
                    from-black/70
                    via-black/35
                    to-transparent
                "
            />

            {/* BAYANGAN BAGIAN BAWAH */}
            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-[1]
                    h-[100px]
                    bg-gradient-to-t
                    from-black/25
                    to-transparent
                "
            />

            {/* TITLE */}
            <div
                className="
                    relative
                    z-10
                    flex
                    h-full
                    items-center
                    justify-center
                    px-6
                    text-center
                "
            >
                <h1
                    className="
                        max-w-[850px]
                        text-3xl
                        font-extrabold
                        uppercase
                        leading-[1.2]
                        text-white
                        drop-shadow-lg

                        sm:text-4xl

                        lg:text-5xl
                    "
                >
                    Temukan Jawaban Atas
                    <br />
                    Pertanyaan Yang Sering
                    <br />
                    Diajukan
                </h1>
            </div>
        </section>
    );
};

export default HeroFAQ;