import React from 'react'
import Navbar from '../Partials/Navbar'
import Footer from '../Partials/Footer'
import HeroDaftarMobil from '../Beranda/HeroBeranda'
import Keunggulan from '../Beranda/Keunggulan'
import MobilUnggulan from '../Beranda/MobilUnggulan'
import Bersiaplah from '../Beranda/Bersiaplah'
import Testimoni from '../Beranda/Testimoni'
import Pengalaman from '../Beranda/Pengalaman'

const DaftarMobil = () => {
  return (
    <div>
        <Navbar/>
        <HeroDaftarMobil/>
        <Keunggulan/>
        <Footer/>
        <MobilUnggulan/>
        <Bersiaplah/>
        <Testimoni/>
        <Pengalaman/>
        <Footer/>
    </div>
  )
}

export default DaftarMobil
