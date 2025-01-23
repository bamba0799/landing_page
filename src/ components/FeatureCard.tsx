import React from "react";

type FeatureCardProps = {
  image: string; // Chemin ou URL de l'image
  title: string; // Titre du composant
  description: string; // Description du composant
};

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white relative w-full  shadow-md shadow-black/30 rounded-lg p-[20px] h-[270px] overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <div className="w-[100px] h-[100px] mx-auto mb-4 bg-[#CFE8F4] rounded-full p-[2px]">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>

        <div className="z-10 relative flex flex-col items-center">
          <h3 className="text-[18px] font-semibold text-blue-900 mb-2">{title}</h3>
          <p className="text-[12px] text-blue-900">{description}</p>
        </div>
      </div>

      <div className="absolute -bottom-[20px] -left-[20px] w-[80px] h-[80px] rounded-full bg-gray-100 z-0 flex flex-row justify-center items-center">
        <div className="w-[50px] h-[50px] rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
