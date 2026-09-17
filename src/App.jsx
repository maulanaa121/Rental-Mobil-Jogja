import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import DaftarMobil from "./components/DaftarMobil/DaftarMobil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar-mobil" element={<DaftarMobil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;