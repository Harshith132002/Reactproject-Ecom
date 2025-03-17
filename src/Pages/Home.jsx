import React from 'react'
import Header from '../Components/Header'
import Navbar1 from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import UncontrolledExample from '../Components/Add'
import H1 from '../Components/H1'
import H2 from '../Components/H2'
import H3 from '../Components/H3'
import H4 from '../Components/H4'
import Footer from '../Components/Footer'
import Add2 from '../Components/Add2'
import C1 from '../Components/C1'
import ProCard from '../Components/ProCard'
import Round from '../Components/Round'
import Countdown from '../Components/CountDown'
import Add1 from '../Components/Add1'

const Home = () => {
  return (
   <>
   <div>
       <Header/>
      
      <Navbar1/>
      <div className="main-content">
      <div className='m1'>
        <div className='m2'>
      <Sidebar/>
      </div>
      <div className='m3'>
      <UncontrolledExample/>
      </div>
      </div>
      
      <div className="procard-wrapper">
            <ProCard />
          </div>
      <H2/>
      <H3/>
      <C1/>
      <H4/>
      <Add1/>
      <Round/>
      </div>
      <Footer/> 
      
    </div>
    </>
  )
}

export default Home