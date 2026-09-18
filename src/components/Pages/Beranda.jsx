import Navbar from "../Navbar/Navbar";
import Hero from "../TentangKami/HeroTentangKami";
import About from "../TentangKami/About";
import VisiMisi from "../TentangKami/VisiMisi";
import Footer from "../Footer/Footer";
import HeroBeranda from "../Beranda/HeroBeranda";
import Keunggulan from "../Beranda/Keunggulan";
import MobilUnggulan from "../Beranda/MobilUnggulan";
import Bersiaplah from "../Beranda/Bersiaplah";
import Testimoni from "../Beranda/Testimoni";
import Pengalaman from "../Beranda/Pengalaman";

const Beranda = () => {
    return (
        <>
            <Navbar />
            <HeroBeranda/>
            <Keunggulan/>
            <MobilUnggulan/>
            <Bersiaplah/>
            <Testimoni/>
            <Pengalaman/>
            <Footer/>
        </>
    );
};

export default Beranda;