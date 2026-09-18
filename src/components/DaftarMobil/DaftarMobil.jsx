import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeroDaftarMobil from '../Beranda/HeroBeranda'
import Keunggulan from '../Beranda/Keunggulan'
import MobilUnggulan from '../MobilUnggulan/MobilUnggulan'
import Bersiaplah from '../Bersiaplah/Bersiaplah'
import Testimoni from '../Testimoni/Testimoni'
import Pengalaman from '../Pengalaman/Pengalaman'

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
