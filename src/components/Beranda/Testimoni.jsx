import TestimoniVector from "../../assets/testimoni-vector.svg";

const Testimoni = () => {
    const testimonials = [
        {
            name: "Lucas Hernandez",
            time: "2 Minggu lalu",
            initial: "L",
            text: "Selalu memuaskan kalau rental mobil di Jogja. Sekaligus, mobilnya bagus, nyaman, bersih, fasilitas ok dan selalu up to date. Drivernya juga profesional.",
        },
        {
            name: "Edward",
            time: "2 Minggu lalu",
            initial: "E",
            text: "Selalu memuaskan kalau rental mobil di Jogja. Sekaligus, mobilnya bagus, nyaman, bersih, fasilitas ok dan selalu up to date. Drivernya juga profesional.",
        },
        {
            name: "Bella Swan",
            time: "2 Minggu lalu",
            initial: "B",
            text: "Selalu memuaskan kalau rental mobil di Jogja. Sekaligus, mobilnya bagus, nyaman, bersih, fasilitas ok dan selalu up to date. Drivernya juga profesional.",
        },
    ];

    return (
        <section
            className="
                relative
                min-h-[700px]
                overflow-hidden
                bg-white

                lg:aspect-[1537/745]
                lg:min-h-0
            "
        >
            {/* =========================
                VECTOR BACKGROUND
            ========================= */}
            <img
                src={TestimoniVector}
                alt=""
                className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-0
                    h-auto
                    w-full
                "
            />

            {/* =========================
                CONTENT
            ========================= */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-[1350px]
                    px-6

                    sm:px-8
                    lg:px-10
                "
            >
                {/* =========================
                    TITLE
                ========================= */}
                <div
                    className="
                        pt-[95px]
                        text-center

                        sm:pt-[110px]
                        lg:pt-[120px]
                    "
                >
                    <h2
                        className="
                            text-2xl
                            font-bold
                            leading-tight
                            text-[#1769AA]

                            sm:text-3xl
                        "
                    >
                        Cerita mereka yang sudah
                        <br />
                        menjelajah dengan kami
                    </h2>
                </div>

                {/* =========================
                    TESTIMONIAL CARDS
                ========================= */}
                <div
                    className="
                        mx-auto
                        mt-24
                        grid
                        w-full
                        max-w-[1250px]
                        grid-cols-1
                        gap-6

                        sm:grid-cols-2

                        lg:grid-cols-3
                        lg:gap-8
                    "
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="
                                w-full
                                min-h-[210px]
                                rounded-lg
                                bg-white
                                p-7
                                shadow-md

                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >
                            {/* =========================
                                PROFILE
                            ========================= */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#2E78B7]
                                        text-sm
                                        font-bold
                                        text-white
                                    "
                                >
                                    {item.initial}
                                </div>

                                <div>
                                    <h3
                                        className="
                                            text-xs
                                            font-bold
                                            text-[#1769AA]
                                        "
                                    >
                                        {item.name}
                                    </h3>

                                    <p
                                        className="
                                            text-[10px]
                                            text-gray-500
                                        "
                                    >
                                        {item.time}
                                    </p>
                                </div>
                            </div>

                            {/* =========================
                                RATING
                            ========================= */}
                            <div className="mt-4 flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className="
                                            text-sm
                                            text-[#F5B400]
                                        "
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            {/* =========================
                                DESCRIPTION
                            ========================= */}
                            <p
                                className="
                                    mt-4
                                    text-[11px]
                                    leading-[1.7]
                                    text-gray-700
                                "
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimoni;