import React, { useState } from "react";
import { speakerData } from "../Stores/data/speaker";
import TitleWithRectangle from "./Rec";
import { mobileData } from "../Stores/data/mobiles";

const H4 = () => {
  const F5im = speakerData.slice(0, 10);

   const[showAll,setShowAll] = useState(false)
   const displayItems = showAll? speakerData : F5im;


   const toggleShowall=()=>{
    setShowAll(!showAll);
   }
  return (
    <>
      <div className="Browse">
        <div>
          <h4 style={{ color: "red" }}> <TitleWithRectangle text ="Our Products" /></h4>
        </div>
        <div>
          <h2>
            <b>Browse By Category</b>
          </h2>
        </div>

        <div>
        <div className="card-container" style={{ display: "flex", gap: "20px", flexWrap: "wrap",minHeight:'auto' }}>
    {displayItems.map((item) => (
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
      <div style={{position:'absolute',left:'500px',marginTop:'30px'}}>
      <button style={{backgroundColor:'#DB4444',width:'149px',height:'46px',borderRadius:"4px",padding:"10px 0",gap:'10px',textAlign:'center'}} onClick={toggleShowall}>{showAll ? "Show Less" : "View All Products"}</button>
    </div>
    </>
  );
};

export default H4;

