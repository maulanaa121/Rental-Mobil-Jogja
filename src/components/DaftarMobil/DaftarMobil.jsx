import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeroDaftarMobil from '../HeroDaftarMobil/HeroDaftarMobil'
import Keunggulan from '../Keunggulan/Keunggulan'
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
    </div>
  )
}

export default DaftarMobil
