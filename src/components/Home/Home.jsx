import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
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