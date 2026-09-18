import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaftarMobil from "./components/DaftarMobil/DaftarMobil";
import Beranda from "./components/Pages/Beranda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/daftar-mobil" element={<DaftarMobil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;