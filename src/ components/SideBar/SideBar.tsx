import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import logo2 from "../../assets/logo2.png";

interface SideBarProps {
    isSidebarOpen: boolean;
    toggleSideBar?: () => void;
    getPage?: (page: any) => void;
}
const sideBarItems = [
    {
        name: "Accueil",
    },
    {

        name: "A propos",
 
    },
    {
        name: "Tarif",
    },
    {
        name: "Contact",
    },
    {
        name: "Services",
    },
    {
        name: "Connexion",
    },

    {
        name: "Ouvrir un compte",
    },
];





const SideBar: React.FC<SideBarProps> = ({ isSidebarOpen, toggleSideBar, getPage }) => {

    return (
        <aside
            className={` fixed top-0 left-0 z-50 bg-white w-full h-screen  bg-white-300  lg:hidden transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div className="h-full   overflow-auto">
                <div className="  h-[200px] bg-gradient-to-b from-[#0F5689] to-[#FFFFFF] flex items-center justify-center">
                    <div className="mb-[50px] relative  w-[230px] flex items-center justify-center">
                        <div className="flex items-center justify-center h-[90px] w-[90px] rounded-full bg-white ">
                            <img src={logo2} alt="logo" className="w-[40px] h-[40px]" />
                        </div>
                        <div onClick={toggleSideBar}>
                            <Icon icon="iconamoon:arrow-left-2" className="absolute left-0 top-[10px] w-[30px] h-[30px] text-[#253873]" />
                        </div>
                    </div>
                </div>

                {/* Menu items */}
                <div className="px-[8px]">
                    {sideBarItems.map((item, index) => (
                        <a
                            key={index}
                            // href={item.path}
                            className={`flex items-center rounded-md pl-2 py-[4px] hover:bg-blue-[20px] mt-2 ${"text-[#253873] font-semibold"
                                }`}
                            onClick={() => { if (getPage) getPage(item.name); if(toggleSideBar) toggleSideBar()}} // Update the active tab on click
                        >
                            <div className=" w-full border-b border-[#9CA2A9] pb-[5px] flex items-center justify-between">
                                <span className="ml-[6px] text-[13px]">{item.name}</span>
                                <Icon icon="iconamoon:arrow-right-2" className=" left-0 top-[10px] w-[20px] h-[20px] text-[#253873]" />

                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </aside>
    );
};

export default SideBar;
