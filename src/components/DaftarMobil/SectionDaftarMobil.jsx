import Celica from "../../assets/celica.png";
import Veloz from "../../assets/veloz.png";
import BMW from "../../assets/bmw.png";
import Civic from "../../assets/civic.png";
import Avanza from "../../assets/avanza.png";
import WhatsappIcon from "../../assets/icons/whatsapp.svg";

const SectionDaftarMobil = () => {
    const mobil = [
        {
            image: Celica,
            name: "Toyota Celica",
            description:
                "Mobil sport legendaris dengan desain elegan, performa tangguh, dan pengalaman berkendara yang menyenangkan.",
            price: "350.000/Hari",
            passengers: "2 Seat",
            transmission: "Manual",
            luggage: "Bagasi 2",
        },
        {
            image: Veloz,
            name: "Avanza Veloz",
            description:
                "Toyota Avanza Veloz menawarkan kabin luas, kenyamanan maksimal, dan performa andal untuk setiap perjalanan.",
            price: "400.000/Hari",
            passengers: "6 Seat",
            transmission: "Manual",
            luggage: "Bagasi 2",
        },
        {
            image: BMW,
            name: "BMW F32",
            description:
                "BMW F32 menghadirkan desain elegan, performa bertenaga, dan kenyamanan berkendara kelas premium.",
            price: "420.000/Hari",
            passengers: "2 Seat",
            transmission: "Matic",
            luggage: "Bagasi 2",
        },
        {
            image: Civic,
            name: "Civic Type R",
            description:
                "Honda Civic Type R menghadirkan performa tinggi, desain sporty, dan pengalaman berkendara yang mengesankan.",
            price: "270.000/Hari",
            passengers: "5 Seat",
            transmission: "Matic",
            luggage: "Bagasi 2",
        },
        {
            image: Avanza,
            name: "Avanza 2024",
            description:
                "Toyota Avanza 2024 menawarkan kabin lega, fitur modern, dan kenyamanan untuk setiap perjalanan.",
            price: "270.000/Hari",
            passengers: "5 Seat",
            transmission: "Manual",
            luggage: "Bagasi 2",
        },
    ];

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1200px]
                    px-6
                    sm:px-8
                    lg:px-10
                "
            >
                {/* =========================
                    HEADER
                ========================= */}
                <div className="text-center">
                    <h2
                        className="
                            text-2xl
                            font-bold
                            uppercase
                            text-[#1769AA]
                            sm:text-3xl
                        "
                    >
                        Daftar Mobil
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-2
                            max-w-[850px]
                            text-xs
                            leading-relaxed
                            text-gray-700
                            sm:text-sm
                        "
                    >
                        Temukan berbagai pilihan mobil berkualitas yang siap
                        menemani perjalanan Anda dengan harga terjangkau dan
                        pelayanan profesional.
                    </p>
                </div>

                {/* =========================
                    MOBIL GRID
                ========================= */}
                <div
                    className="
                        mt-8
                        grid
                        grid-cols-1
                        gap-8

                        sm:grid-cols-2

                        lg:grid-cols-3
                    "
                >
                    {mobil.map((item, index) => (
                        <div
                            key={index}
                            className="
                                overflow-hidden
                                rounded-xl
                                bg-white
                                shadow-md
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-xl
                            "
                        >
                            {/* =========================
                                IMAGE
                            ========================= */}
                            <div className="p-2">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="
                                        h-[170px]
                                        w-full
                                        rounded-lg
                                        object-cover
                                    "
                                />
                            </div>

                            {/* =========================
                                CONTENT
                            ========================= */}
                            <div className="px-3 pb-4">
                                {/* NAME */}
                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        leading-tight
                                        text-[#1769AA]
                                    "
                                >
                                    {item.name}
                                </h3>

                                {/* DESCRIPTION */}
                                <p
                                    className="
                                        mt-1
                                        min-h-[52px]
                                        text-[10px]
                                        leading-[1.5]
                                        text-gray-700
                                    "
                                >
                                    {item.description}
                                </p>

                                {/* PRICE */}
                                <div className="mt-2">
                                    <span className="text-[9px] font-medium text-gray-800">
                                        Rp
                                    </span>

                                    <span className="ml-1 text-xl font-bold text-black">
                                        {item.price}
                                    </span>
                                </div>

                                {/* =========================
                                    BADGES
                                ========================= */}
                                <div className="mt-2 flex flex-wrap gap-1">
                                    <span
                                        className="
                                            rounded
                                            bg-[#249FC0]
                                            px-2
                                            py-1
                                            text-[8px]
                                            font-medium
                                            text-white
                                        "
                                    >
                                        👤 {item.passengers}
                                    </span>

                                    <span
                                        className="
                                            rounded
                                            bg-[#249FC0]
                                            px-2
                                            py-1
                                            text-[8px]
                                            font-medium
                                            text-white
                                        "
                                    >
                                        ⚙ {item.transmission}
                                    </span>

                                    <span
                                        className="
                                            rounded
                                            bg-[#249FC0]
                                            px-2
                                            py-1
                                            text-[8px]
                                            font-medium
                                            text-white
                                        "
                                    >
                                        🧳 {item.luggage}
                                    </span>
                                </div>

                                {/* =========================
                                    DIVIDER
                                ========================= */}
                                <div className="my-3 border-t border-[#1769AA]" />

                                {/* =========================
                                    WHATSAPP BUTTON
                                ========================= */}
                                <a
                                    href={`https://wa.me/6288806834354?text=${encodeURIComponent(
                                        `Halo, saya ingin booking ${item.name}. Apakah mobil masih tersedia?`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        mx-auto
                                        flex
                                        w-fit
                                        items-center
                                        gap-2
                                        rounded-lg
                                        border
                                        border-[#1769AA]
                                        px-4
                                        py-2
                                        text-sm
                                        font-medium
                                        text-[#1769AA]
                                        transition-all
                                        duration-200
                                        hover:bg-[#1769AA]
                                        hover:text-white
                                    "
                                >
                                    Booking unit ini

                                    <img
                                                                src={WhatsappIcon}
                                                                alt="WhatsApp"
                                                                className="h-5 w-5"
                                                            />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionDaftarMobil;