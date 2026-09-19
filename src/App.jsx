import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaftarMobil from "./components/Pages/DaftarMobil";
import Beranda from "./components/Pages/Beranda";
import TentangKami from "./components/Pages/TentangKami";
import FAQ from "./components/Pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/daftar-mobil" element={<DaftarMobil />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;