import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type EnterpriseCardProps = {
    title?: string;
    description?: string;
    image?: string;
    color?: "orange" | "blue";
};

const EnterpriseCard:React.FC<EnterpriseCardProps> = ({title, description,image, color}) => {
  return (
    <div className="bg-gradient-to-b from-orange-100 to-white border border-orange-200 h-[450px] w-full rounded-xl shadow-md p-6 flex flex-col items-center text-center ">
      <h2 className="text-orange-600 text-xl font-bold mb-2">Enterprise</h2>
      <p className="text-orange-400 text-sm mb-4">
        {description}
      </p>
      <ul className="text-sm text-gray-800 space-y-2 mb-6">
        <li className="flex items-center">
          <Icon icon="mdi:check-circle-outline" className="text-orange-400 w-5 h-5 mr-2" /> Fonctionnalités du{" "}
          <span className="font-semibold text-orange-500">Plan Premium</span>
        </li>
        <li className="flex items-center">
          <Icon icon="mdi:check-circle-outline" className="text-orange-400 w-5 h-5 mr-2" />
          <span> Utilisateurs illimités</span>
        </li>
        <li className="flex items-center">
          <Icon icon="mdi:check-circle-outline" className="text-orange-400 w-5 h-5 mr-2" />
          <span> Nom de domaine personnalisé</span>
        </li>
        <li className="flex items-center">
          <Icon icon="mdi:check-circle-outline" className="text-orange-400 w-5 h-5 mr-2" /> 
          <span>Intégration custom (sur demande)</span>
        </li>
        <li className="flex items-center">
          <Icon icon="mdi:check-circle-outline" className="text-orange-400 w-5 h-5 mr-2" />
          <span className="font-semibold"> Détection fraude -{" "} acwaba Copilot</span>
        </li>
        <li className="flex items-center">
          <Icon icon="mdi:check-circle-outline" className="text-orange-400 w-5 h-5 mr-2" /> 
          <span>Custom Branding</span>
        </li>
      </ul>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-lg">
        Nous contacter
      </button>
    </div>
  );
};

export default EnterpriseCard;
