import React from "react";

const TitleWithRectangle = ({ text = "Today's" }) => {
  return (
    <div 
    className="flex items-center gap-[6px]"
   >
      {/* Red Rounded Rectangle */}
      <div
      className="w-[14px] h-[28px] bg-[#E74C3C] rounded-[6px]"
       
      ></div>

      {/* Dynamic Text */}
      <span 
      className="font-bold text-[#E74C3C] text-[18px]"
     >
        {text}
      </span>
    </div>
  );
};

export default TitleWithRectangle;
