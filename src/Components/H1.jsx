import React from "react";
import { mobileData } from "../Stores/data/mobiles";
import { CartContext } from "../context/CartContext"; 
import { useContext } from "react";
import TitleWithRectangle from "./Rec";

const H1 = () => {
  const {addToCart} = useContext(CartContext)
  const F5im = mobileData.slice(0, 5);

  return (
   <>
   
   
      <div className="card-container" style={{marginTop:' 500px',}}>
      {F5im.map((item) => (
        <div className="product-card" key={item.id}>
          {item.discount && <div className="discount-badge">-{item.discount}%</div>}

          <img className="product-image" src={item.image} alt={item.model} />

          <div className="product-details">
            <h6 className="product-company">{item.company}</h6>
            <h6 className="product-model">{item.model}</h6>
            <h6 className="product-price">
              ${item.price}
              {item.originalPrice && (
                <span className="original-price">${item.originalPrice}</span>
              )}
            </h6>
            <div className="star-rating">⭐⭐⭐⭐⭐</div>
          </div>
          <div>
            <button style={{width:'100%',backgroundColor:'black',color:'white'}} onClick={()=>addToCart(item)}>Add to cart</button>
          
          
          </div>
         
        </div>
        
      ))}
    </div>
    <div style={{position:'absolute',left:'500px',marginTop:'30px'}}>
    <button style={{width:"280px", height:'40px',backgroundColor:'red'}}>View All Products</button>
    </div>
    
    </>
  );
};

export default H1;
