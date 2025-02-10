import React from "react";

type FeatureCardProps = {
  image: string; // Chemin ou URL de l'image
  title: string; // Titre du composant
  description: string; // Description du composant
};

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white relative w-[369px]  shadow-sm shadow-black/10 rounded-[16px] p-[4px]  md:p-[20px] h-[290px] md:h-[431px] overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <div className="w-[60px] h-[60px] md:w-[200px] md:h-[200px] mx-auto mb-4 bg-[#CFE8F4] rounded-full p-[2px]">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>

        <div className="z-10 relative flex flex-col items-center">
          <h3 className="text-[13px] md:text-[20px] font-semibold text-brand_bleu_inter mb-[4px] md:mb-2">{title}</h3>
          <p className="text-[14px] text-center text-brand_bleu_inter">{description}</p>
        </div>
      </div>

      <div className="absolute -bottom-[20px] -left-[20px] w-[140px] h-[140px] rounded-full bg-gray-100 z-0 flex flex-row justify-center items-center">
        <div className="w-[70px] h-[70px] rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
