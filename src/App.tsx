import { useState } from 'react'
import './App.css'
import Header from './ components/Header/Header'
import SideBar from './ components/SideBar/SideBar'
import Main from './ components/Main/Main'
import Card from './ components/Card/Card'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home'
import Menu from './ components/SideBar/Menu'
import Dashboard from './Pages/Dashboard'
import OrganizationComite from './Pages/OrganizationComite'
import Seminarian from './Pages/Seminarian'
import Dormitory from './Pages/Dormitory'
import Visitor from './Pages/Visitor'
import AuditTrail from './Pages/AuditTrail'
import Permission from './Pages/Permission'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>
  },
  {
    path: '/comite-organisation',
    element: <OrganizationComite/>
  },
  {
    path: '/seminariste',
    element: <Seminarian/>
  },
  {
    path: '/dortoir',
    element: <Dormitory/>
  },
  {
    path: '/visiteur',
    element: <Visitor/>
  },
  {
    path: '/piste-audit',
    element: <AuditTrail/>
  },
  {
    path: '/permissions',
    element: <Permission/>
  },

])

function App() {
  const [count, setCount] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  return (
  <div>
   {isSidebarOpen?
    <button onClick={()=>toggleSideBar()} className='absolute bg-slate-950/[0.2] w-full h-full'>
    
    </button>
    :null
    }
   <Header toggleSideBar={toggleSideBar}/>
    {/* <div className='mt-[60px]'>
    <Menu/>
    </div> */}
    <SideBar isSidebarOpen={isSidebarOpen}/>
    <Main className=''>
      <RouterProvider router={router}/>
    </Main>
  </div>
  )
}

export default App
