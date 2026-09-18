import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import VisiMisi from "../VisiMisi/VisiMisi";
import Footer from "../Footer/Footer";
import HeroBeranda from "../Beranda/HeroBeranda";

const Beranda = () => {
    return (
        <>
            <Navbar />
            <HeroBeranda/>
            <Footer/>
        </>
    );
};

export default Beranda;