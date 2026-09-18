import Navbar from "../Navbar/Navbar";
import Hero from "../TentangKami/HeroTentangKami";
import About from "../TentangKami/About";
import VisiMisi from "../TentangKami/VisiMisi";
import Footer from "../Footer/Footer";

const TentangKami = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About/>
            <VisiMisi/>
            <Footer/>
        </>
    );
};

export default TentangKami;