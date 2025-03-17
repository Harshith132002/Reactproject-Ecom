import React, { useState } from "react";
import { mobileData } from "../Stores/data/mobiles";
import TitleWithRectangle from "./Rec";
import CountDown from "./CountDown";
import useCart from "../store/useStore";

const ProCard = () => {
  const addToCart = useCart((state) => state.addToCart)
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;

  const handleNext = () => {
    if (startIndex + itemsToShow < mobileData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const displayedItems = mobileData.slice(startIndex, startIndex + itemsToShow);

  return (
    <div>
      <div className="Browse">
        <div>
          <h4 style={{ color: "red" }}>
            <TitleWithRectangle text="Today's" />
          </h4>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ marginBottom: "20px" }}>
            <CountDown />
          </div>

          <div style={{ display: "flex",gap:'10px' }}>
          <div>
            <button
                style={{
                  borderRadius: "50%", // Make it circular
                  height: "40px",
                  width: "40px", // Ensure width equals height for a perfect circle
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: '#F5F5F5',
                  color:'black',
                  border:'none'
                }}
                onClick={handleNext}
                disabled={startIndex + itemsToShow >= mobileData.length}
              >
               <i class="fa-solid fa-arrow-left"></i>
              </button>
            </div>
            <div>
              <button
                style={{
                  borderRadius: "50%", // Make it circular
                  height: "40px",
                  width: "40px", // Ensure width equals height for a perfect circle
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: '#F5F5F5',
                  color:'black',
                  border:'none'
                }}
                onClick={handlePrev}
                disabled={startIndex === 0}
              >
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            
          </div>
        </div>
        <div
          className="card-container"
          style={{
            display: "flex",
            gap: "20px",
            minHeight: "auto",
          }}
        >
          {displayedItems.map((item) => (
            <div
              key={item.id}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                width: "200px",
                padding: "10px",
                borderRadius: "8px",
                overflow: "hidden",
                height: "250px",
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: "250px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F5F5F5",
                }}
              >
                <img
                  src={item.image}
                  alt={item.model}
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                    mixBlendMode: "multiply",
                  }}
                />

                {/* Discount Tag */}
                {item.discount && (
                  <span
                    style={{
                      position: "absolute",
                      top: "5px",
                      left: "5px",
                      background: "red",
                      color: "white",
                      padding: "2px 6px",
                      fontSize: "12px",
                      borderRadius: "4px",
                    }}
                  >
                    -{item.discount}%
                  </span>
                )}

                {/* Icons */}
                <div
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "7px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <i
                    className="fas fa-eye"
                    style={{
                      fontSize: "18px",
                      cursor: "pointer",
                      background: "white",
                      padding: "4px",
                      borderRadius: "50%",
                    }}
                  ></i>
                  <i
                    className="fas fa-heart"
                    style={{
                      fontSize: "18px",
                      cursor: "pointer",
                      background: "white",
                      padding: "4px",
                      borderRadius: "50%",
                    }}
                  ></i>
                </div>
              </div>
               
               <div><button onClick={()=>{console.log('btn is clicked'),addToCart(item)}}>Add to Cart</button></div>
               
              {/* Product Details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  marginTop: "3px",
                  backgroundColor: "white",
                  height: "",
                }}
              >
                <p
                  style={{
                    margin: "2px 0",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  {item.company}
                </p>
                <p style={{ margin: "2px 0", fontSize: "16px", color: "gray" }}>
                  {item.model}
                </p>
                <p
                  style={{
                    margin: "2px 0",
                    fontSize: "16px",
                    color: "red",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  ${item.price}
                  <span
                    className="original-price"
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                      marginLeft: "5px",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    ${item.originalPrice || 400}
                  </span>
                </p>

                <span style={{ color: "gold", fontSize: "18px", marginTop: "2px" }}>
                  ★★★★★ <span style={{ fontFamily: "sans-serif", color: "black", fontSize: "small" }}>(99)</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProCard;

