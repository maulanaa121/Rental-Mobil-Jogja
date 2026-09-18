import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeroDaftarMobil from '../HeroDaftarMobil/HeroDaftarMobil'
import Keunggulan from '../Keunggulan/Keunggulan'
import MobilUnggulan from '../MobilUnggulan/MobilUnggulan'
import Bersiaplah from '../Bersiaplah/Bersiaplah'

const DaftarMobil = () => {
  return (
    <div>
        <Navbar/>
        <HeroDaftarMobil/>
        <Keunggulan/>
        <Footer/>
        <MobilUnggulan/>
        <Bersiaplah/>
    </div>
  )
}

export default DaftarMobil
