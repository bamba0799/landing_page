import { ReactNode, useState } from "react"
import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"


interface MainProps {
  children: ReactNode;
  onClickAccueil?: () => void;
  onClickTarif?: () => void;
  onClickApropos?: () => void;
  onClickContact?: () => void;
  getPage?: (page: any) => void;
}


const Main: React.FC<MainProps> = ({ children, onClickAccueil, onClickTarif, onClickApropos, onClickContact, getPage }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className="">
         {isSidebarOpen?
    <button onClick={()=>toggleSideBar()} className='fixed top-0 left-0 z-10 bg-slate-950/[0.2] w-full h-full'>
    </button>
    :null
    }
    <Header onClickAccueil={onClickAccueil} onClickApropos={onClickApropos} onClickTarif={onClickTarif} onClickContact={onClickContact}  toggleSideBar={toggleSideBar}/>
    <SideBar isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} getPage={getPage}/>
      {children}
    </div>
  );
}
 export default Main;