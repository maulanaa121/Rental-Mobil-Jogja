import Navbar from "../Navbar/Navbar";
import Hero from "../TentangKami/HeroTentangKami";
import About from "../TentangKami/About";
import VisiMisi from "../VisiMisi/VisiMisi";
import Footer from "../Footer/Footer";

const Home = () => {
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

export default Home;