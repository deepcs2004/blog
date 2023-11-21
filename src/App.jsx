import './App.css'
import {Outlet} from 'react-router-dom'
import Navbar from './Componentss/Navbar'
import Footer from './Componentss/Footer'


function App() {
  

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
