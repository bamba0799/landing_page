import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
// import logo1 from "../../assets/logo1.png";
import logoNoir from "../../assets/Logos/Logo_acwaba-noir.svg";
import SecondButton from "../Button/SecondButton";
import { useNavigate } from "react-router-dom";
import ConnexionModal from "../Modal/ConnexionModal";
import ConnexionModal2 from "../Modal/ConnexionModal2";

interface HeaderProps {
  toggleSideBar: () => void;
  isActiveMenuBar?: boolean
  onClickAccueil?: () => void;
  onClickTarif?: () => void;
  onClickApropos?: () => void;
  onClickContact?: () => void;
}

type HeaderIconType = {
  icon: string,
  name: string,
  path: string
}

const Header: React.FC<HeaderProps> = ({ onClickAccueil, onClickTarif, onClickApropos, onClickContact, toggleSideBar }) => {
  const navigate = useNavigate();
  const [openConnexionModal, setOpenConnexionModal] = useState<boolean>(false);
  const [openInscriptionModal2, setOpenInscriptionModal2] = useState<boolean>(false);
  console.log("openInscriptionModal2", openInscriptionModal2);

  const [activeTab, setActiveTab] = useState<string>("");
  console.log("activeTab", activeTab);
  
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
    <nav className=" border-red-500 fixed top-0 left-0 right-0 z-50 w-[100%] max-w-full bg-gradient-to-b from-white to-[#f7f8f8]">
      {/* <h2>Header</h2> */}
      <div className="px-3 py-3 lg:px-5 lg:pl-3 ">
        <div className="flex flex-row items-center justify-between">
          <div className=" flex flex-row items-center ">
            <img className=" absolute w-[140px] h-[140px] " src={logoNoir} alt=""  />
          </div>

          <div className="hidden lg:flex flex-row space-x-[50px]">
            <p onClick={onClickAccueil} className="text-brand_bleu_fonce_500 font-semibold text-[16px]">Accueil</p>
            <p onClick={onClickApropos} className="text-brand_bleu_fonce_500 font-semibold text-[16px]">A propos </p>
            <p onClick={onClickTarif} className="text-brand_bleu_fonce_500 font-semibold text-[16px]">Tarif</p>
            <p onClick={onClickContact} className="text-brand_bleu_fonce_500 font-semibold text-[16px]">Contact</p>
            <p onClick={() => navigate("/service")} className="text-brand_bleu_fonce_500 font-semibold text-[16px]">Services</p>
          </div>
          <div className="md:hidden bg-brand_bleu_fonce_500 rounded-full flex flex-row items-center  ">
            <button onClick={toggleSideBar} className=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg ">
              <Icon icon="vaadin:menu" className="w-4 h-4 text-white/80" />
            </button>
          </div>
          <div className="hidden  lg:flex flex-row items-center space-x-5 ">
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