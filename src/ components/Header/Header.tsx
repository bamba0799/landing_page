import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import logoNoir from "../../assets/Logos/Logo_acwaba-noir.svg";
import SecondButton from "../Button/SecondButton";
import { useNavigate } from "react-router-dom";
import ConnexionModal from "../Modal/ConnexionModal";
import ConnexionModal2 from "../Modal/ConnexionModal2";
import { navigateTo } from "../../../services/utilis";

interface HeaderProps {
  toggleSideBar: () => void;
  isActiveMenuBar?: boolean
  onClickAccueil?: () => void;
  onClickTarif?: () => void;
  onClickApropos?: () => void;
  onClickContact?: () => void;
}


const Header: React.FC<HeaderProps> = ({ onClickAccueil, onClickTarif, onClickApropos, onClickContact, toggleSideBar }) => {
  const navigate = useNavigate();
  const [openConnexionModal, setOpenConnexionModal] = useState<boolean>(false);
  const [openInscriptionModal2, setOpenInscriptionModal2] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState<string>("");
  
  const menuItems = [
    { name: "Accueil", path:"/", onClick: onClickAccueil },
    { name: "A propos", path:"/about", onClick: onClickApropos },
    { name: "Tarif", path:"/tarif", onClick: onClickTarif },
    { name: "Contact", path:"/contact", onClick: onClickContact },
    { name: "Services", path:"/service", onClick: () => navigateTo(navigate, "/service") }
  ];


  const getOnglet = () => {
    let currentRoute: any = localStorage.getItem('currentRoute')
    const activeItem = menuItems.find(item => item.path === currentRoute);
    if (activeItem) {
      setActiveTab(activeItem.path);
    }
  }

  useEffect(() => {
    getOnglet();
  }, []);


  return (
    <nav className=" border-red-500 fixed top-0 left-0 right-0 z-50 w-[100%] max-w-full bg-gradient-to-b from-white to-[#f7f8f8]">
      {/* <h2>Header</h2> */}
      <div className="px-3 py-3 md:px-5 md:pl-3 ">
        <div className="flex flex-row items-center justify-between">
          <div className=" flex flex-row items-center ">
            <img className=" absolute w-[140px] h-[140px] " src={logoNoir} alt=""  />
          </div>

          <div className="hidden md:flex flex-row md:space-x-[20px] md:ml-[100px] lg:ml-[100px] lg:space-x-[50px]">
          {menuItems.map((item, index) => (
            <p
              key={index}
              onClick={item.onClick}
              className={`${(activeTab==item.path && item.path!="/tarif")?"text-brand_orange":"text-brand_bleu_fonce_500"} hover:underline font-semibold text-[16px] cursor-pointer`}
            >
              {item.name}
            </p>
          ))}
          </div>
          <div className="md:hidden bg-brand_bleu_fonce_500 rounded-full flex flex-row items-center  ">
            <button onClick={toggleSideBar} className=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg ">
              <Icon icon="vaadin:menu" className="w-4 h-4 text-white/80" />
            </button>
          </div>
          <div className="hidden  md:flex flex-row items-center md:space-x-3 lg:space-x-5 ">
            <SecondButton onClick={() => console.log("rrr")} bgColor="bg-transoarent" textColor="text-brand_bleu_inter" text={"Se connecter"} className="border border-brand_bleu_inter" />
            <SecondButton onClick={() => setOpenConnexionModal(true)} text={"Ouvrir un compte"} />
          </div>
        </div>
      </div>
      <ConnexionModal isSuivant={((val) => setOpenInscriptionModal2(val))} deleteAction={() => console.log("sss")} cancelAction={() => { setOpenConnexionModal(false) }} text='Etes vous sur de bien effacer?' open={openConnexionModal} onClose={() => setOpenConnexionModal(false)} />
      <ConnexionModal2 isSuivant={((val) => setOpenInscriptionModal2(val))} deleteAction={() => console.log("sss")} cancelAction={() => { setOpenConnexionModal(false) }} text='Etes vous sur de bien effacer?' open={openInscriptionModal2} onClose={() => setOpenConnexionModal(false)} />
    </nav>
  );
}

export default Header; 