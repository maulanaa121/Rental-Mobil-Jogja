import { useState } from "react";

import WhatsAppIcon from "../../assets/icons/whatsapp-white.svg";
import EmailIcon from "../../assets/icons/email.svg";

const KamiBantu = () => {
    const [activeCategory, setActiveCategory] = useState("Semua Topik");
    const [openIndex, setOpenIndex] = useState(null);

    const categories = [
        "Semua Topik",
        "Proses Pemesanan",
        "Metode Pembayaran",
        "Asuransi & Proteksi",
        "Syarat & Ketentuan",
        "Kendala Teknis",
    ];

    const faqs = [
        {
            category: "Proses Pemesanan",
            question:
                "Bagaimana cara memesan mobil melalui Rental Mobil Jogja?",
            answer:
                "Anda dapat melakukan pemesanan dengan memilih mobil yang tersedia kemudian menghubungi admin melalui WhatsApp. Admin akan membantu proses pemesanan dan mengonfirmasi ketersediaan mobil.",
        },
        {
            category: "Syarat & Ketentuan",
            question:
                "Apa saja syarat dokumen yang wajib dipersiapkan?",
            answer:
                "Pelanggan perlu menyiapkan identitas diri yang masih berlaku serta dokumen pendukung sesuai dengan ketentuan rental.",
        },
        {
            category: "Asuransi & Proteksi",
            question:
                "Apakah biaya sewa sudah termasuk asuransi kendaraan?",
            answer:
                "Ketentuan mengenai asuransi kendaraan dapat berbeda pada setiap jenis kendaraan dan layanan. Silakan tanyakan kepada admin sebelum melakukan pemesanan.",
        },
        {
            category: "Proses Pemesanan",
            question:
                "Bagaimana kebijakan jika saya ingin membatalkan pesanan?",
            answer:
                "Pembatalan pesanan dapat dilakukan dengan menghubungi admin Rental Mobil Jogja. Ketentuan pembatalan mengikuti kebijakan yang berlaku.",
        },
        {
            category: "Metode Pembayaran",
            question:
                "Metode pembayaran apa saja yang tersedia?",
            answer:
                "Pembayaran dapat dilakukan melalui metode yang tersedia dan telah disepakati dengan admin pada saat proses pemesanan.",
        },
        {
            category: "Kendala Teknis",
            question:
                "Apa yang harus dilakukan jika mengalami kendala saat melakukan pemesanan?",
            answer:
                "Silakan hubungi admin melalui WhatsApp atau email agar tim kami dapat membantu menyelesaikan kendala tersebut.",
        },
    ];

    const filteredFaqs =
        activeCategory === "Semua Topik"
            ? faqs
            : faqs.filter((faq) => faq.category === activeCategory);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

            <div className="mx-auto w-full max-w-[1100px]">

                {/* =================================
                    FAQ CONTENT
                ================================= */}
                <div className="mx-auto max-w-[1000px]">

                    {/* TITLE */}
                    <div className="text-center">

                        <h2
                            className="
                                text-2xl
                                font-extrabold
                                uppercase
                                leading-tight
                                text-[#1769AA]
                                sm:text-3xl
                            "
                        >
                            Ada Yang Bisa Kami Bantu?
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-2
                                max-w-[850px]
                                text-sm
                                leading-tight
                                text-gray-700
                                sm:text-base
                            "
                        >
                            Pusat bantuan Rental Mobil Jogja hadir untuk
                            memberikan jawaban cepat atas kendala sewa mobil
                            Anda.
                        </p>

                    </div>


                    {/* CATEGORY */}
                    <div
                        className="
                            mt-6
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-2
                        "
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => {
                                    setActiveCategory(category);
                                    setOpenIndex(null);
                                }}
                                className="
                                    rounded-full
                                    bg-[#1769AA]
                                    px-3
                                    py-1
                                    text-[11px]
                                    font-medium
                                    text-white
                                    transition
                                    duration-200
                                    hover:bg-[#125989]
                                    sm:px-4
                                    sm:text-xs
                                "
                            >
                                {category}
                            </button>
                        ))}
                    </div>


                    {/* FAQ LIST */}
                    <div
                        className="
                            mx-auto
                            mt-7
                            max-w-[850px]
                            space-y-4
                        "
                    >
                        {filteredFaqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={`${faq.category}-${faq.question}`}
                                    className="
                                        overflow-hidden
                                        rounded-xl
                                        border
                                        border-gray-400
                                        bg-white
                                    "
                                >

                                    {/* QUESTION */}
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        className="
                                            flex
                                            w-full
                                            items-center
                                            justify-between
                                            gap-5
                                            px-4
                                            py-3.5
                                            text-left
                                            text-sm
                                            font-medium
                                            text-gray-800
                                            transition
                                            hover:bg-gray-50
                                            sm:px-5
                                            sm:py-4
                                        "
                                    >
                                        <span>
                                            {faq.question}
                                        </span>

                                        <svg
                                            className={`
                                                h-5
                                                w-5
                                                shrink-0
                                                text-gray-900
                                                transition-transform
                                                duration-300
                                                ${
                                                    isOpen
                                                        ? "rotate-180"
                                                        : ""
                                                }
                                            `}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m6 9 6 6 6-6"
                                            />
                                        </svg>
                                    </button>


                                    {/* ANSWER */}
                                    <div
                                        className={`
                                            grid
                                            transition-all
                                            duration-300
                                            ${
                                                isOpen
                                                    ? "grid-rows-[1fr]"
                                                    : "grid-rows-[0fr]"
                                            }
                                        `}
                                    >
                                        <div className="overflow-hidden">
                                            <p
                                                className="
                                                    border-t
                                                    border-gray-200
                                                    px-4
                                                    py-4
                                                    text-xs
                                                    leading-relaxed
                                                    text-gray-600
                                                    sm:px-5
                                                    sm:text-sm
                                                "
                                            >
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>


                {/* =================================
                    KAMI BANTU
                ================================= */}
                <div
                    className="
                        mx-auto
                        mt-10
                        flex
                        w-full
                        max-w-[1000px]
                        flex-col
                        gap-7
                        rounded-[20px]
                        bg-[#2E78B7]
                        px-7
                        py-8
                        sm:px-10
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        lg:px-12
                        lg:py-9
                    "
                >

                    {/* TEXT */}
                    <div className="max-w-[450px] text-white">

                        <h2
                            className="
                                text-2xl
                                font-extrabold
                                uppercase
                                leading-[1.05]
                                sm:text-3xl
                            "
                        >
                            Masih Butuh Bantuan
                            <br />
                            Lebih Lanjut?
                        </h2>

                        <p
                            className="
                                mt-4
                                max-w-[390px]
                                text-xs
                                leading-[1.5]
                                text-white
                                sm:text-sm
                            "
                        >
                            Tim dukungan pelanggan eksklusif kami siap
                            membantu Anda 24 jam setiap hari untuk memastikan
                            pengalaman sewa mobil Anda tetap sempurna.
                        </p>

                    </div>


                    {/* BUTTONS */}
                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-3
                        "
                    >

                        {/* WHATSAPP */}
                        <a
                            href="https://wa.me/628xxxxxxxxxx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-md
                                bg-[#4353F5]
                                px-4
                                py-2.5
                                text-xs
                                font-medium
                                text-white
                                transition
                                duration-300
                                hover:bg-[#3544dc]
                            "
                        >
                            <img
                                src={WhatsAppIcon}
                                alt="WhatsApp"
                                className="h-4 w-4"
                            />

                            <span>
                                WhatsApp Admin
                            </span>
                        </a>


                        {/* EMAIL */}
                        <a
                            href="mailto:emailkamu@gmail.com"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-md
                                bg-[#4B4B4B]
                                px-4
                                py-2.5
                                text-xs
                                font-medium
                                text-white
                                transition
                                duration-300
                                hover:bg-[#3d3d3d]
                            "
                        >
                            <img
                                src={EmailIcon}
                                alt="Email"
                                className="h-4 w-4"
                            />

                            <span>
                                Kirim Email
                            </span>
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default KamiBantu;