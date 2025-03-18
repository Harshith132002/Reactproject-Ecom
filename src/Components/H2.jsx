import React from 'react'
import TitleWithRectangle from './Rec'

const H2 = () => {
  return (
    <div className='Browse' >
      <div>
        <h4 style={{color:'red'}}> <TitleWithRectangle text='Categories' /> </h4>
      </div>
      <div>
        <h2 className='font-semibold text-[48px] tracking-[4%]' ><b>Browse By Category</b></h2>
      </div>
     
   <div className='box-i'>
      <div className="box"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgF4N-DZXtAU0irxHAmIkzG19sMHEtW-d9mw&s" alt="" className='i1'/><h5 className='i2'>Phones</h5></div>
      <div className="box"><img src="https://t4.ftcdn.net/jpg/01/27/53/71/360_F_127537153_k1y9h4hUoAmbNXs6QlgWkCBd87qWwp2X.jpg" alt="" className='i1' /><h5 className='i2'>Laptop</h5></div>
      <div className="box"><img src="https://cdn-icons-png.flaticon.com/512/3767/3767201.png" alt="" className='i1'/><h5 className='i2'>Smartwatch</h5></div>
      <div className="box"><img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png" alt="" className='i1'/><h5 className='i2'>Camera</h5></div>
      <div className="box"><img src="https://cdn-icons-png.flaticon.com/512/27/27130.png" alt="" className='i1'/><h5 className='i2'>HeadPHONE</h5></div>
      <div className="box"><img src="https://cdn-icons-png.flaticon.com/512/7708/7708371.png" alt="" className='i1'/><h5 className='i2'>Gaming</h5></div>
      </div>
     </div>
     
      
      
  )
}

export default H2

