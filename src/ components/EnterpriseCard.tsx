import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import SecondButton from "./Button/SecondButton";

type EnterpriseCardProps = {
  title?: string;
  description?: string;
  image?: string;
  color?: "orange" | "blue";
  data: string[]
  seeOver?: () => void;
  onClick?: () => void;

};

const EnterpriseCard: React.FC<EnterpriseCardProps> = ({ description, data, onClick }) => {
  return (
    
    <div className=" w-full h-full  border-red-600 shadow-sm shadow-black/30 rounded-[10px] bg-white flex flex-col justify-between items-center">
      <div className="w-full  border-b-emerald-900">
        <div className='rounded-t-[10px] bg-gradient-to-b from-orange-100 to-white  h-[135px] flex flex-col justify-between p-[20px]'>
          <div className="w-full flex flex-col justify-center items-center pt-[5px]">
            <div className="flex flex-row justify-between items-center">
              <p className="text-brand_orange text-[20px] font-bold">Entreprise</p>
              <Icon icon="jam:alert-f" className="text-brand_orange w-5 h-5 ml-2" />
            </div>
            <p className="text-brand_orange mt-[10px] text-[14px]">
              {description}
            </p>
          </div>
        </div>
        {/* Features */}
        <ul className="px-[20px] py-4 space-y-3">
          {data.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <Icon icon="mdi:check-circle-outline" className="text-brand_orange flex-shrink-0 w-5 h-5 mr-2" />
              <span className=' text-[14px] text-brand_bleu_inter'>{feature}</span>
            </li>
          ))}
          {/* <button onClick={seeOver} className='ml-[5px] flex flex-row  items-center'>
            <div className='   text-[15px] text-brand_bleu_inter'>Voir plus</div>
            <Icon icon="akar-icons:arrow-right" className="text-brand_orange w-[20px] h-[20px] ml-2" />
          </button> */}
        </ul>
      </div>

      {/* Call to Action */}
      <div className=" pb-[20px]">
        <SecondButton onClick={onClick} bgColor="bg-brand_orange" textColor="text-white" text={"Nous contacter"} />
      </div>
    </div>
    // <div className=" w-[438px]  h-[438px]   bg-gradient-to-b from-orange-100 to-white border border-orange-200 rounded-xl shadow-md p-6 flex flex-col ">
    //   <h2 className="text-brand_orange text-xl font-bold mb-2">Enterprise</h2>
    //   <p className="text-brand_orange text-sm mb-4">
    //     {description}
    //   </p>
    //   <ul className="text-sm text-gray-800 space-y-2 mb-6">
    //     <li className="flex items-center">
    //       <Icon icon="mdi:check-circle-outline" className="text-brand_orange w-5 h-5 mr-2" /> Fonctionnalités du{" "}
    //       <span className="font-semibold text-brand_orange">Plan Premium</span>
    //     </li>
    //     <li className="flex items-center">
    //       <Icon icon="mdi:check-circle-outline" className="text-brand_orange w-5 h-5 mr-2" />
    //       <span> Utilisateurs illimités</span>
    //     </li>
    //     <li className="flex items-center">
    //       <Icon icon="mdi:check-circle-outline" className="text-brand_orange w-5 h-5 mr-2" />
    //       <span> Nom de domaine personnalisé</span>
    //     </li>
    //     <li className="flex items-center">
    //       <Icon icon="mdi:check-circle-outline" className="text-brand_orange w-5 h-5 mr-2" /> 
    //       <span>Intégration custom (sur demande)</span>
    //     </li>
    //     <li className="flex items-center">
    //       <Icon icon="mdi:check-circle-outline" className="text-brand_orange w-5 h-5 mr-2" />
    //       <span className="font-semibold"> Détection fraude -{" "} acwaba Copilot</span>
    //     </li>
    //     <li className="flex items-center">
    //       <Icon icon="mdi:check-circle-outline" className="text-brand_orange w-5 h-5 mr-2" /> 
    //       <span>Custom Branding</span>
    //     </li>
    //   </ul>
    //   <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-lg">
    //     Nous contacter
    //   </button>
    // </div>
  );
};

export default EnterpriseCard;
