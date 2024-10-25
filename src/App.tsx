import Navbar from './Navbar'
import Aboutpage from './Page/Aboutpage'
import Contactpage from './Page/Contactpage'
import Homepage from './Page/Homepage'
import './Style.css'
import { Routes, Route } from "react-router-dom"

function App() {


  return (
   <div>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='About' element={<Aboutpage />}></Route>
      <Route path='Contact' element={<Contactpage />}></Route>
    </Routes>
      <Navbar />
   </div>
  )
}

export default App
