import React from "react";
import { computerData } from "../Stores/data/computers";
import TitleWithRectangle from "./Rec";

const H1 = () => {
  const F5im = computerData.slice(0, 5);

  return (
    <>
      <div className="Browse">
        <div>
          <h4 style={{ color: "red" }}> <TitleWithRectangle text="This Month" /></h4>
        </div>
        <div className="flex justify-between mt-[40px]" >
          <h2>
            <b>Best Selling Products</b>
          </h2>
          <button className="w-[149px] h-[46px] rounded-[4px] p-[10px 0] gap-[10px] text-center" >view All</button>
        </div>
      

  <div className="card-container flex gap-[20px] flex-wrap min-h-auto" >
    {F5im.map((item) => (
      <div key={item.id} className="relative flex flex-col  w-[200px] p-[10px] rounded-[8px] h-[250px] overflow-hidden" >
        
        {/* Image Container */}
        <div className="relative overflow-hidden h-[250px] w-full flex justify-center items-center   bg-[#F5F5F5]" >
          <img 
            src={item.image} 
            alt={item.model} 
            className="object-contain h-full w-full mix-blend-multiply"
           
          />

          {/* Discount Tag */}
          {item.discount && (
            <span className = ' absolute top-[5px] left-[5px] bg-[#FF0000] text-white px-[6px] py-[2px] text-[12px] rounded-[4px] '
            >
              -{item.discount}%
            </span>
          )}

          {/* Icons */}
          <div className = 'absolute right-[5px] top-[7px] flex flex-col gap-[5px]'>
            <i className="fas fa-eye text-[18px]  cursor-pointer bg-white p-[4px] rounded-[50%] "></i>
            <i className="fas fa-heart text-[18px]  cursor-pointer bg-white p-[4px] rounded-[50%]" ></i>
          </div>
        </div>

        {/* Product Details */}
        <div 
        className="flex flex-col items-start text-left mt-[3px] bg-white" >
        
        
        
      
          <p className='mt-[2px] mb-0 text-[16px] font-bold leadin-[24px]  '
          
          
          
          style={{ margin: "2px 0", fontSize: "16px", fontWeight: "bold",fontWeight:'500',lineHeight:'24px' }}>{item.company}</p>
          <p className ='mt-[2px] mb-0 text-[16px] text-[#808080] '>{item.model}</p>
          <p className = 'mt-[2px] mb-0 text-[16px] text-[red] font-[500] leading-[24px]'
          >
${item.price} 
<span className="original-price line-through text-[gray] ml-[5px] font-[500px] text-[16px] leading-[24px] " >
  ${item.originalPrice || 400}
</span>
</p>

          <span  
          className="text-[gold] text-[18px] mt-[2px] "

         >★★★★★ <span 
         className="font-serif text-black text-sm"
         >(99)</span></span>
        </div>

      </div>

        
            ))}
          </div>
        </div>
     
    </>
  );
};

export default H1;
