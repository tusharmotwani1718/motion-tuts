import { useState } from 'react'
import Button from './components/01_Button.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <section className="flex flex-col items-center justify-center min-h-screen ">
      <Button />
    // </section>
  )
}

export default App
