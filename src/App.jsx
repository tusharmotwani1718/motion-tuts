import { useState } from 'react'
import Button from './components/01_Button.jsx';
import Card from './components/02_Card.jsx';
import Sidebar from './components/03_Sidebar_Variants.jsx';
import './App.css'
import Features from './components/04_Features_hooks.jsx';

function App() {

  return (
    <>
    {/* // <section className="flex flex-col items-center justify-center min-h-screen "> */}
      <Button />
      <Card />
      <Sidebar />
      <Features />
    {/* // </section> */}
    </>
  )
}

export default App
