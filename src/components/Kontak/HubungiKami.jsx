const HubungiKami = () => {
    return (
        <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1100px]
                    overflow-hidden
                    border
                    border-gray-200
                    bg-white
                    shadow-md
                    lg:grid-cols-2
                "
            >
                {/* =========================
                    INFORMASI KONTAK
                ========================= */}
                <div
                    className="
                        px-7
                        py-8
                        sm:px-9
                        sm:py-10
                        lg:px-8
                        lg:py-8
                    "
                >
                    {/* LABEL */}
                    <p
                        className="
                            text-lg
                            font-medium
                            text-[#1769AA]
                        "
                    >
                        Rental Mobil Jogja
                    </p>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[-2px]
                            text-3xl
                            font-medium
                            leading-tight
                            text-gray-900
                            sm:text-4xl
                        "
                    >
                        Hubungi Kami Segera
                    </h2>

                    {/* DESCRIPTION */}
                    <p
                        className="
                            mt-3
                            max-w-[430px]
                            text-sm
                            leading-[1.5]
                            text-gray-700
                        "
                    >
                        Butuh info lebih lanjut atau ingin booking?
                        Hubungi Rail Jawa Trans sekarang! Kami siap
                        melayani Anda dengan cepat dan ramah. Pesan
                        perjalanan Anda hari ini!
                    </p>

                    {/* =========================
                        ALAMAT
                    ========================= */}
                    <div className="mt-5 flex gap-3">
                        <div className="mt-0.5 shrink-0">
                            <svg
                                className="h-5 w-5 text-gray-900"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                                />
                                <circle
                                    cx="12"
                                    cy="10"
                                    r="2.5"
                                />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900">
                                Alamat
                            </h3>

                            <p
                                className="
                                    mt-1
                                    max-w-[330px]
                                    text-sm
                                    leading-[1.5]
                                    text-gray-400
                                "
                            >
                                Perum Tamantirto Asri 3, Blok A No. B4,
                                RT 006, Kasihan, Tamantirto, Kec.
                                Kasihan, Bantul
                            </p>
                        </div>
                    </div>

                    {/* =========================
                        WHATSAPP
                    ========================= */}
                    <div className="mt-5 flex gap-3">
                        <div className="mt-0.5 shrink-0">
                            <svg
                                className="h-5 w-5 text-gray-900"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.2A8 8 0 1 1 20 11.5Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.5 8.5c.2-.5.4-.5.7-.5h.4c.2 0 .3.1.4.3l.8 1.7c.1.2.1.4 0 .5l-.5.6c-.1.1-.1.3 0 .4.4.7 1 1.3 1.7 1.7.2.1.3.1.4 0l.6-.5c.2-.1.3-.1.5 0l1.7.8c.2.1.3.2.3.4v.4c0 .3 0 .5-.5.7"
                                />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900">
                                WhatsApp
                            </h3>

                            <div className="mt-1 flex flex-wrap gap-1 text-sm">
                                <a
                                    href="https://wa.me/6281329810339"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-gray-400
                                        underline
                                        transition
                                        hover:text-[#1769AA]
                                    "
                                >
                                    081329810339
                                </a>

                                <span className="text-gray-400">/</span>

                                <a
                                    href="https://wa.me/6285786010907"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-gray-400
                                        underline
                                        transition
                                        hover:text-[#1769AA]
                                    "
                                >
                                    085786010907
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* =========================
                        TELEPON
                    ========================= */}
                    <div className="mt-5 flex gap-3">
                        <div className="mt-0.5 shrink-0">
                            <svg
                                className="h-5 w-5 text-gray-900"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.8 2Z"
                                />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900">
                                Telepon
                            </h3>

                            <p
                                className="
                                    mt-1
                                    max-w-[330px]
                                    text-sm
                                    leading-[1.5]
                                    text-gray-400
                                "
                            >
                                Perum Tamantirto Asri 3, Blok A No. B4,
                                RT 006, Kasihan, Tamantirto, Kec.
                                Kasihan, Bantul
                            </p>
                        </div>
                    </div>

                    {/* =========================
                        EMAIL
                    ========================= */}
                    <div className="mt-5 flex gap-3">
                        <div className="mt-0.5 shrink-0">
                            <svg
                                className="h-5 w-5 text-gray-900"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect
                                    x="3"
                                    y="5"
                                    width="18"
                                    height="14"
                                    rx="2"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m3 7 9 6 9-6"
                                />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900">
                                Email
                            </h3>

                            <a
                                href="mailto:emailkamu@gmail.com"
                                className="
                                    mt-1
                                    inline-block
                                    text-sm
                                    text-gray-400
                                    underline
                                    transition
                                    hover:text-[#1769AA]
                                "
                            >
                                rentalmobiljogja@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* =========================
                    MAP
                ========================= */}
                <div
                    className="
                        relative
                        min-h-[350px]
                        bg-gray-100
                        sm:min-h-[400px]
                        lg:min-h-full
                    "
                >
                    <iframe
                        title="Lokasi Rental Mobil"
                        src="https://www.google.com/maps?q=Alun-Alun%20Yogyakarta&output=embed"
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            border-0
                            grayscale-[20%]
                        "
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
};

export default HubungiKami;