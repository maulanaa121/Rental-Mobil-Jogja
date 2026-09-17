import ArmadaIcon from "../../assets/icons/armada.svg";
import HargaIcon from "../../assets/icons/harga.svg";
import BookingIcon from "../../assets/icons/booking.svg";
import DriverIcon from "../../assets/icons/driver.svg";
import AntarJemputIcon from "../../assets/icons/antar-jemput.svg";
import CustomerServiceIcon from "../../assets/icons/customer-service.svg";

const Keunggulan = () => {

    const keunggulan = [
    {
        icon: ArmadaIcon,
        title: "Armada Terawat",
        description:
            "Seluruh kendaraan selalu menjalani perawatan rutin, bersih, dan siap digunakan demi memberikan kenyamanan selama perjalanan.",
    },
    {
        icon: HargaIcon,
        title: "Harga Transparan",
        description:
            "Nikmati tarif sewa yang jelas tanpa biaya tersembunyi, sehingga Anda dapat menyewa mobil dengan lebih tenang.",
    },
    {
        icon: BookingIcon,
        title: "Booking Mudah",
        description:
            "Proses pemesanan cepat dan praktis melalui website atau WhatsApp tanpa prosedur yang rumit.",
    },
    {
        icon: DriverIcon,
        title: "Driver Profesional",
        description:
            "Didukung pengemudi yang berpengalaman, ramah, dan memahami rute di Yogyakarta untuk perjalanan yang aman dan nyaman.",
    },
    {
        icon: AntarJemputIcon,
        title: "Layanan Antar Jemput",
        description:
            "Mobil dapat diantar dan dijemput sesuai lokasi yang disepakati, termasuk hotel, bandara, stasiun, atau alamat tujuan Anda.",
    },
    {
        icon: CustomerServiceIcon,
        title: "Layanan Pelanggan Responsif",
        description:
            "Tim customer service kami siap membantu menjawab pertanyaan dan memberikan solusi terbaik untuk setiap kebutuhan.",
    },
];

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10">

                {/* =========================
                    TITLE
                ========================= */}
                <div className="mb-6 text-center sm:mb-7">
                    <h2 className="text-2xl font-bold uppercase text-[#1769AA] sm:text-3xl">
                        Keunggulan Dalam Setiap Proses
                    </h2>
                </div>


                {/* =========================
                    CARDS
                ========================= */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">

                    {keunggulan.map((item, index) => (
                        <div
                            key={index}
                            className="
                                flex
                                min-h-[170px]
                                flex-col
                                border
                                border-[#2E78B7]
                                bg-white
                                p-4

                                transition-all
                                duration-300

                                hover:-translate-y-1
                                hover:shadow-md

                                sm:min-h-[180px]
                            "
                        >

                            {/* Icon */}
                            <div className="mb-1 flex h-10 items-center">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="h-10 w-10 object-contain"
                                />
                            </div>


                            {/* Title */}
                            <h3 className="text-[17px] font-bold leading-tight text-[#1769AA]">
                                {item.title}
                            </h3>


                            {/* Description */}
                            <p className="mt-2 text-[11px] leading-[1.5] text-gray-700 sm:text-xs">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Keunggulan;