import React, { useContext, useState } from "react";
import { mobileData } from "../Stores/data/mobiles";
import TitleWithRectangle from "./Rec";
import CountDown from "./CountDown";
import { set } from "react-hook-form";

const Pr1 = () => {
const [startIndex,setStartIndex] = useState(0)
const toShowItem = 5

const toHandle = ()=>{
 if(startIndex+toShowItem < mobileData.length){
  setStartIndex(startIndex+1)
 }
}

const toPrev = () =>{
if(startIndex > 0){
  setStartIndex(startIndex-1)
}
}

const displayedItems = mobileData.slice(startIndex,startIndex+toShowItem)


  return (
  <div>
    <div className='Browse' >
      <div>
        <h4 style={{color:'red'}}> <TitleWithRectangle text="Today's"/> </h4>
      </div>
      <div style={{marginBottom:'20px'}}>
      <CountDown/>
      </div>
     
    
     <button onClick={toPrev}>
     left
     </button>
     <button onClick={toHandle}>
      right
     </button>

    <div className="card-container" style={{ display: "flex", gap: "20px", flexWrap: "wrap",minHeight:'auto' }}>
      {displayedItems.map((item) => (
        <div key={item.id} style={{ position: "relative", display: "flex", flexDirection: "column", width: "200px", padding: "10px", borderRadius: "8px", overflow: "hidden",height:'250px' }}>
          
          {/* Image Container */}
          <div style={{ position: "relative", overflow: 'hidden', height: '250px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' }}>
            <img 
              src={item.image} 
              alt={item.model} 
              style={{ objectFit: "contain", height: '100%', width: '100%', mixBlendMode: "multiply" }} 
            />

            {/* Discount Tag */}
            {item.discount && (
              <span style={{ position: "absolute", top: "5px", left: "5px", background: "red", color: "white", padding: "2px 6px", fontSize: "12px", borderRadius: "4px" }}>
                -{item.discount}%
              </span>
            )}

            {/* Icons */}
            <div style={{ position: "absolute", right: "5px", top: "7px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <i className="fas fa-eye" style={{fontSize: "18px", cursor: "pointer", background: "white", padding: "4px", borderRadius: "50%" }}></i>
              <i className="fas fa-heart" style={{  fontSize: "18px", cursor: "pointer", background: "white", padding: "4px", borderRadius: "50%" }}></i>
            </div>
          </div>

          {/* Product Details */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", marginTop: "3px", backgroundColor: 'white',height:'' }}>
            <p style={{ margin: "2px 0", fontSize: "16px", fontWeight: "bold",fontWeight:'500',lineHeight:'24px' }}>{item.company}</p>
            <p style={{ margin: "2px 0", fontSize: "16px", color: "gray" }}>{item.model}</p>
            <p style={{ margin: "2px 0", fontSize: "16px", color: "red",fontWeight:'500',lineHeight:'24px' }}>
  ${item.price} 
  <span className="original-price" style={{ textDecoration: "line-through", color: "gray", marginLeft: "5px",fontWeight:'500',fontSize:'16px',lineHeight:'24px' }}>
    ${item.originalPrice || 400}
  </span>
</p>

            <span style={{ color: "gold", fontSize: "18px", marginTop: "2px" }}>★★★★★ <span style={{fontFamily: 'sans-serif',color:'black',fontSize:'small'}}>(99)</span></span>
          </div>

        </div>
     
     ))}
    </div>
    </div>
    </div>
  );
};

export default Pr1;
