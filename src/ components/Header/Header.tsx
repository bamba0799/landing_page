import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import logo1 from "../../assets/logo1.png";
import Button from "../Button/Button";
import messi from '../../assets/lionel-messi.jpg';
import FirstButton from "../Button/FirstButton";
import SecondButton from "../Button/SecondButton";

interface HeaderProps {
  toggleSideBar: () => void;
  isActiveMenuBar?: boolean

}
type HeaderIconType = {
  icon: string,
  name: string,
  path: string
}

const Header: React.FC<HeaderProps> = ({ toggleSideBar, isActiveMenuBar = true }) => {
  const [activeTab, setActiveTab] = useState<string>("");
  const HeaderIcon: HeaderIconType[] = [
    {
      icon: "material-symbols:empty-dashboard-sharp",
      name: "Tableau de bord",
      path: "/home",
    },
    {
      icon: "fa:group",
      name: "Comité d'organisation",
      path: "/comite-organisation",
    },
    {
      icon: "mdi:account-student",
      name: "Séminariste",
      path: "/seminariste",
    },
    {
      icon: "fa-solid:home",
      name: "Dortoir",
      path: "/dortoir",
    },
    {
      icon: "heroicons:users-solid",
      name: "Visiteurs",
      path: "/visiteur",
    },

    {
      icon: "bi:patch-check-fill",
      name: "Permissions",
      path: "/permissions",
    },


  ]

  const handleRefresh = () => {
    window.location.reload();
  };


  const getOnglet = () => {
    const currentPath = window.location.pathname;
    console.log("currentPath", currentPath);

    const activeItem = HeaderIcon.find(item => item.path === currentPath);
    if (activeItem) {
      setActiveTab(activeItem.path);
    }
  }

  useEffect(() => {
    getOnglet();
  }, []);

  return (
    <nav className=" border-red-500 fixed top-0 left-0 right-0 z-50 w-[100%] max-w-full bg-white">
      {/* <h2>Header</h2> */}
      <div className="px-3 py-3 lg:px-5 lg:pl-3 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center ">
            <img className="object-fill " src={logo1} alt="" />
          </div>
          <div className="hidden lg:flex flex-row space-x-[50px]">
            <p className="text-blue-900 font-semibold text-[14px]">Accueil</p>
            <p className="text-blue-900 font-semibold text-[14px]">A propos </p>
            <p className="text-blue-900 font-semibold text-[14px]">Tarif</p>
            <p className="text-blue-900 font-semibold text-[14px]">Contact</p>
          </div>
          <div className="lg:hidden bg-blue-900 rounded-full flex flex-row items-center ">
            <button onClick={()=>console.log("rechercher")} className=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg ">
              <Icon icon="vaadin:menu" className="w-4 h-4 text-white/80" />
            </button>
            {/* <button onClick={toggleSideBar} className=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg ">
              <Icon icon="vaadin:menu" className="w-4 h-4 text-white/80" />
            </button> */}
          </div>
          <div className="hidden  lg:flex flex-row items-center space-x-5 ">
            {/* <button onClick={toggleSideBar} className=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg ">
              <p>Se connecter</p>
            </button> */}
            <FirstButton text={"Se connecter"}/>
            {/* <button onClick={toggleSideBar} className=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg ">
              <p>S'inscrire</p>
            </button> */}
            <SecondButton text={"Ouvrir un compte"}/>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Header; 