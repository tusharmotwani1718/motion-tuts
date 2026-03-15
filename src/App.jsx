import { useState } from 'react'
import Button from './components/01_Button.jsx';
import Card from './components/02_Card.jsx';
import Sidebar from './components/03_Sidebar_Variants.jsx';
import './App.css'

function App() {

  return (
    <>
    {/* // <section className="flex flex-col items-center justify-center min-h-screen "> */}
      <Button />
      <Card />
      <Sidebar />
    {/* // </section> */}
    </>
  )
}

export default App
