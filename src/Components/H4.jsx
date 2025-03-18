import React, { useState } from "react";
import { speakerData } from "../Stores/data/speaker";
import TitleWithRectangle from "./Rec";
import { mobileData } from "../Stores/data/mobiles";

const H4 = () => {
  const F5im = speakerData.slice(0, 10);

  const [showAll, setShowAll] = useState(false);
  const displayItems = showAll ? speakerData : F5im;

  const toggleShowall = () => {
    setShowAll(!showAll);
  };
  return (
    <>
      <div className="Browse">
        <div>
          <h4 className="text-[red]">
            {" "}
            <TitleWithRectangle text="Our Products" />
          </h4>
        </div>
        <div>
          <h2>
            <b>Browse By Category</b>
          </h2>
        </div>

        <div>
          <div className="card-container flex gap-[20px] flex-wrap min-h-auto">
            {displayItems.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col w-[200px] p-[10px] rounded-[8px] overflow-hidden h-[250px]"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-[250px] w-full flex justify-center items-center bg-[#F5F5F5] ">
                  <img
                    src={item.image}
                    alt={item.model}
                    className="object-contain h-full w-full mix-blend-multiply"
                  />

                  {/* Discount Tag */}
                  {item.discount && (
                    <span
                     className="absolute top-[5px] left-[5px] bg-[#FF0000] px-[6px] py-[2px] text-[12px] rounded-[4px] text-white"
                    >
                      -{item.discount}%
                    </span>
                  )}

                  {/* Icons */}
                  <div
  className="absolute right-[5px] top-[7px] flex flex-col gap-[5px] "
                    
        
                  >
                    <i
                      className="fas fa-eye 
                      text-[18px] cursor-pointer bg-white
                      p-[4px] rounded-[50%]"
                   
                    ></i>
                    <i
                      className="fas fa-heart text-[18px] cursor-pointer bg-white
                      p-[4px] rounded-[50%]"
                     
                    ></i>
                  </div>
                </div>

                {/* Product Details */}
                <div
                  className="flex flex-col items-start mt-[3px] bg-white  "
                  
                  
                 
                >
                  <p
                  className="my-[2px] mt-0 text-[16px] font-bold leading-[24px]"
               >
                    {item.company}
                  </p>
                  <p
                    className="my-[2px] mx-0 text-[16px] text-[#808080]" 
                    
                    
                  >
                    {item.model}
                  </p>
                  <p
                   className="my-[2px] mt-0 text-[16px] font-bold leading-[24px] text-[#FF0000]"
                 
                  >
                    ${item.price}
                    <span
                      className="original-price line-through text-[#808080] ml-[5px] font-bold text-16px leading-[24px]"
                     
                    >
                      ${item.originalPrice || 400}
                    </span>
                  </p>

                  <span
                  className="text-[#FFD700],text-[18px] mt-[2px]"
                  >
                    ★★★★★{" "}
                    <span
                    className="font-sans text-black text-sm "
                     
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
      <div 
 className="aboslute left-[500px] mt-[30px]"     
>
        <button
className="bg-[#DB4444] w-[149px] h-[46px] rounded-[4px] py-[10px] px-0 gap-[10px] text-center"

          onClick={toggleShowall}
        >
          {showAll ? "Show Less" : "View All Products"}
        </button>
      </div>
    </>
  );
};

export default H4;
