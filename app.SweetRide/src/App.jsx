import { useState } from 'react'
import SweetRide from './assets/logosr.jpeg'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


function App() {
  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={SweetRide} className="logo sr" alt="sr logo" />
        </a>
        <NavBar />
        <ItemListContainer greeting = "Bienvenido/a a SweetRide"/>
      </div>
      <div className="card">
        
      </div>
    </>
  )
}

export default App
