import { useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import About from './Pages/About'
import H1 from './Components/H1'
import H2 from './Components/H2'
import Add2 from './Components/Add2'
import S1 from './Components/S1'
import { CartProvider } from './context/CartContext'
import Cart from './Pages/Cart'
import { Form } from 'react-hook-form'
import Call from './Components/Call'
import Error from './Components/Error'
import Errorp from './Pages/Errorp'
import R4 from './Components/R4'
import ProCard from './Components/ProCard'
import Round from './Components/Round'
import CountDown from './Components/CountDown'
import Add1 from './Components/Add1'
import Pr1 from './Components/Pr1'




function App() {


  return (
    <>
   
      <div>
       
       { <Routes>
      <Route path='/' element = {<Home/>}/>
       <Route path='/Contact' element= {<Contact/>}/>
       <Route path='/About' element= {<About/>}/>
       <Route path='/Signup' element= {<Signup/>}/>
       <Route path='/Cart' element={<Cart/>}/>
      </Routes>
           }
     
     
        </div>
        
    </>
  )
}

export default App
