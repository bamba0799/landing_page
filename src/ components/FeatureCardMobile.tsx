import React from "react";

type FeatureCardMobileProps = {
  image: string; 
  title: string; 
  description: string;
  onClick: () => void;

};

const FeatureCardMobile: React.FC<FeatureCardMobileProps> = ({ image, title, onClick}) => {
  return (
    <button onClick={onClick} className="bg-white shadow-sm shadow-black/10 rounded-[10px] h-[140px] w-[140px] p-[4px] overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <div className="w-[60px]   bg-[#CFE8F4] rounded-full p-[2px]">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>
        <div className=" flex text-center flex-row justify-center items-center  mt-[10px] w-[120px]">
          <h3 className="text-[13px] items-center font-semibold text-brand_bleu_inter ">{title}</h3>
        </div>
      </div>
    </button>
  );
};

export default FeatureCardMobile;
