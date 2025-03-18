import React, { useContext, useState } from "react";
import { mobileData } from "../Stores/data/mobiles";
import TitleWithRectangle from "./Rec";
import CountDown from "./CountDown";
import { set } from "react-hook-form";

const Pr1 = () => {
  const [startIndex, setStartIndex] = useState(0);
  const toShowItem = 5;

  const toHandle = () => {
    if (startIndex + toShowItem < mobileData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const toPrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const displayedItems = mobileData.slice(startIndex, startIndex + toShowItem);

  return (
    <div>
      <div className="Browse">
        <div>
          <h4 className="text-[#FF0000]">
            {" "}
            <TitleWithRectangle text="Today's" />{" "}
          </h4>
        </div>
        <div className="mb-[20px]" style={{ marginBottom: "20px" }}>
          <CountDown />
        </div>

        <button onClick={toPrev}>left</button>
        <button onClick={toHandle}>right</button>

        <div
 className="card-container flex gap-[20px] flex-wrap min-h-auto"
         
       
        >
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col w-[200px] p-[10px] rounded-[8px] overflow-hidden h-[250px]"
            
            >
              {/* Image Container */}
              <div
className="relative overflow-hidden h-[250px] w-full flex justify-center
items-center bg-[#F5F5F5]  "
>
                <img
                  src={item.image}
                  alt={item.model}
className="contain h-full w-full mix-blend-multiply"                 
                 
                  
                />

                {/* Discount Tag */}
                {item.discount && (
                  <span
 className="absolute top-[5px] left-[5px] bg-[#FF0000] text-white py-2px px-6px text-[12px] rounded-[4px]"                  
   
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
                    className="fas fa-heart  text-[18px] cursor-pointer bg-white p-[4px] rounded-[50%]"
                   
                    
                  ></i>
                </div>
              </div>

              {/* Product Details */}
              <div
className="flex flex-col items-start text-left mt-[3px] bg-white "              
               
              >
                <p
                className="my-[2px] mx-0 text-[16px] font-bold leading-[24px]"
                 
                >
                  {item.company}
                </p>
                <p 
className="my-[2px] mx-0 text-[16px] text-[#808080]"                
>
                  {item.model}
                </p>
                <p
className="my-[2px] mx-0 text-[16px] text-[#FF0000] leading-[24px]"                
                
                >
                  ${item.price}
                  <span
                    className="original-price line-through text-[#808080] ml-[5px] mr-[500] font-[500] text-[16px] leading-[24px] "
                   
                  >
                    ${item.originalPrice || 400}
                  </span>
                </p>

                <span
                className="text-#FFD700 tetx-[18px] mt-[2px]"
                 
                >
                  ★★★★★{" "}
                  <span
                  className="font-sans text-black text-sm"
                    
                  >
                    (99)
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pr1;
