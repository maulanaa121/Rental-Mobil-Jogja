import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import VisiMisi from "../VisiMisi/VisiMisi";
import Footer from "../Footer/Footer";
import HeroBeranda from "../Beranda/HeroBeranda";
import Keunggulan from "../Beranda/Keunggulan";
import MobilUnggulan from "../Beranda/MobilUnggulan";
import Bersiaplah from "../Beranda/Bersiaplah";

const Beranda = () => {
    return (
        <>
            <Navbar />
            <HeroBeranda/>
            <Keunggulan/>
            <MobilUnggulan/>
            <Bersiaplah/>
            <Footer/>
        </>
    );
};

export default Beranda;