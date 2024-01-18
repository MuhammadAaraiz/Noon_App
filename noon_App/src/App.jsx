import React from 'react'

import './App.css'
import { CardsDiv, First_Banner } from './Components/First_slider'
import { Sliders_Div } from './Components/Slider'
import { Header } from './Components/Navbar'
import ActionAreaCard from './Components/Cards'
const App = () => {
  return (
    <>

      <Header />
      <div className="container-fluid Image_container">
        <img width={"100%"} src={First_Banner} alt="" />
      </div>
      <Sliders_Div />
      <CardsDiv />
      <ActionAreaCard />
    </>
  )
}

export default App

