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
    <div >
      <div className="Browse">
        <div>
          <h4 
          className="text-red-600 ">
            <TitleWithRectangle text="Today's" />
          </h4>
        </div>
        <div className="flex justify-around"
        >
          <div className="mb-[20px]">
            <CountDown />
          </div>

          <div className="flex gap-[10px]"
          >
          <div>
            <button
 className="rounded-[50%] h-[40px] w-[40px] flex justify-center items-center bg-[#f5f5f5] 
 text-black border-none "         
          
                onClick={handleNext}
                disabled={startIndex + itemsToShow >= mobileData.length}
              >
               <i class="fa-solid fa-arrow-left"></i>
              </button>
            </div>
            <div>
              <button
  className="rounded-[50%] h-[40px] w-[40px] flex justify-center items-center bg-[#f5f5f5] text-black border-none"            
               
                onClick={handlePrev}
                disabled={startIndex === 0}
              >
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            
          </div>
        </div>
        <div
          className="card-container flex gap=[20px] min-h-auto"
          
        >
          {displayedItems.map((item) => (
            <div
              key={item.id}
className="relative flex flex-col w-[200px] p-[10px] rounded-[8px] overflow-hidden h-[350px]"              
             
            >
              {/* Image Container */}
<div
 className="relative overflow-hidden h-[350px] w-full flex justify-center items-center bg-[#F5F5F5] "              
               
              >
                <img
                  src={item.image}
                  alt={item.model}
                 className="object-contain h-full w-full mix-blend-multiply"
                
                />

                {/* Discount Tag */}
                {item.discount && (
                  <span
className="absolute top-[5px] left-[5px] bg-red-500 text-white py-[2px] px-[6px] text-[12px] rounded-[4px]"
                  >
                    -{item.discount}%
                  </span>
                )}

                {/* Icons */}
                <div
 className="absolute right-[5px] top-[7px] flex flex-col gap-[5px]"               
                
                >
                  <i
                    className="fas fa-eye text-[18px] cursor-pointer bg-white p-[4px] rounded-[50%]"
                  
                  ></i>
                  <i
                    className="fas fa-heart text-[18px] cursor-pointer bg-white p-[4px] rounded-[50%]"
                   
                  ></i>
                </div>
              </div>
               
               <div><button onClick={()=>{console.log('btn is clicked'),addToCart(item)}}>Add to Cart</button></div>
               
              {/* Product Details */}
              <div
className="flex flex-col items-start mt-[3px] bg-white"              
               
              >
                <p
   className="my-[2px] mx-0 text-[16px] font-semibold leading-[24px]"              
                 
                >
                  {item.company}
                </p>
                <p 
className="my-[2px] mx-0 text-[16px] text-gray-300"                
>
                  {item.model}
                </p>
                <p
className="my-[2px] mx-0 text-[16px] font-semibold leading-[24px] text-red-600"                  
                 
                >
                  ${item.price}
                  <span
                    className="original-price line-through text-gray-400 ml-[5px] font-bold text-[16px] leading-[24px]                             "
               
                  >
                    ${item.originalPrice || 400}
                  </span>
                </p>

                <span 
  className="text-#FFD700 text-[18px] mt-[2px]">
                  ★★★★★ <span 
className="font-sans text-black text-sm "
>(99)</span>
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

