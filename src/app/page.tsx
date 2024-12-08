import React from 'react'
// import Header from './components/Header'
import HelloNike from './components/HelloNike'
import BestOfAirMax from './components/BestOfAirMax'
import Featured from './components/Featured'
import GearUp from './components/GearUp'
import Essentials  from './components/Essentials'
import Category from './components/Category'
// import Footer from './components/Footer'

export default function page() {
  return (
    <div>
      {/* <Header/> */}
      <HelloNike/>
      <BestOfAirMax/>
      <Featured/>
      <GearUp/>
      <Essentials/>
      <Category/>
      {/* <Footer/> */}
    </div>
  )
}
