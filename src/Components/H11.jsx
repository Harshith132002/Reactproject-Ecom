import React from 'react'
import {mobileData} from '../Stores/data/mobiles'


const H1 = () => {
  
const F5im = mobileData.slice(0,5)
  return (
    <div style={{display:'flex'}}>
    {
    
    F5im.map((item)=>(<div key={item.id}>
    
    <div>
      <img src={item.image} style={{width:'100px',height:'100px'}} alt="" />
    </div>
    <div>
      <h6>{item.company}</h6><h6>{item.model}</h6>
      <h6>{item.price}</h6>
    </div>
    </div>
  
    )
    )
     
     }
    </div>
  )
}

export default H1