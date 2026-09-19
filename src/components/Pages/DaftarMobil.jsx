import React from 'react'
import Navbar from '../Partials/Navbar'
import Footer from '../Partials/Footer'
import HeroDaftarMobil from '../DaftarMobil/HeroDaftarMobil'
import SectionDaftarMobil from '../DaftarMobil/SectionDaftarMobil'

const DaftarMobil = () => {
  return (
    <div>
        <Navbar/>
        <HeroDaftarMobil/>
        <SectionDaftarMobil/>
        <Footer/>
    </div>
  )
}

export default DaftarMobil
