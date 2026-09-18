import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import VisiMisi from "../VisiMisi/VisiMisi";
import Footer from "../Footer/Footer";
import HeroBeranda from "../Beranda/HeroBeranda";
import Keunggulan from "../Beranda/Keunggulan";

const Beranda = () => {
    return (
        <>
            <Navbar />
            <HeroBeranda/>
            <Keunggulan/>
            <Footer/>
        </>
    );
};

export default Beranda;