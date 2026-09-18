import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeroDaftarMobil from '../HeroDaftarMobil/HeroDaftarMobil'
import Keunggulan from '../Keunggulan/Keunggulan'
import MobilUnggulan from '../MobilUnggulan/MobilUnggulan'
import Bersiaplah from '../Bersiaplah/Bersiaplah'
import Testimoni from '../Testimoni/Testimoni'

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
        <h1 className='pt-48'>kkjk</h1>
    </div>
  )
}

export default DaftarMobil
