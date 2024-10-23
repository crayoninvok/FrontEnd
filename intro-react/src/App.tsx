import Navbar from "./components/navbar"
import Homepage from "./pages/home"
import Aboutpage from "./pages/about"
import Contactpage from "./pages/contact"
import { Routes, Route } from 'react-router-dom'



function App() {

const name:string = "Dzaky"

  return (
   <div>
    <Navbar name={name} />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="About" element={<Aboutpage />} />
      <Route path="Contact" element={<Contactpage />} />
    </Routes>
   </div>
  )
}

export default App
