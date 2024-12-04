import { useEffect, useState } from 'react'
import Header from '../ components/Header/Header'
import SideBar from '../ components/SideBar/SideBar'
import Main from '../ components/Main/Main'
import Card from '../ components/Card/Card'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Menu from '../ components/SideBar/Menu'
import Dashboard from '../Pages/Dashboard'
import OrganizationComite from '../Pages/OrganizationComite'
import Seminarian from '../Pages/Seminarian'
import Dormitory from '../Pages/Dormitory'
import Visitor from '../Pages/Visitor'
import AuditTrail from '../Pages/AuditTrail'
import Permission from '../Pages/Permission'
// import { Button } from 'flowbite-react'
import Input from '../ components/Input/Input'
import HomeCard from '../ components/Card/HomeCard'
import PrimaryLayout from '../layouts/PrimaryLayout'
import { Icon } from '@iconify/react/dist/iconify.js'
import EditButton from '../ components/Button/EditButton'
import DeleteButton from '../ components/Button/DeleteButton'
import apiService from '../../services/api'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import Button from '../ components/Button/Button'
import { Commision, MembreCo, Seminariste } from '../../services/model'
import { set } from 'react-hook-form'

function Home() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)



  const [seminariste, setSeminariste] = useState<Seminariste>({
    frere: 0,
    soeur: 0,
    Total: 0,
    m: null
  })

  const [membreCo, setMembreCo] = useState<MembreCo>({
    Accueil_Hebergement: {
      frere: 0,
      soeur: 0,
      Total: 0
    },
    Administration: {
      frere: 0,
      soeur: 0,
      Total: 0
    },
    Formation: {
      frere: 0,
      soeur: 0,
      Total: 0
    }
  })

  const [dortoir, setDortoir] = useState({
    co: 0,
    seminariste: 0,
    non_defini: 0
  })
  const [commission, setCommission] = useState<Commision[]>([
    {
      commission: "",
      total_frères: 0,
      total_soeurs: 0,
      total_membres: ""
    }
  ])


  const commissionDataForExport = [
    {
      commission: "Neeraj",
      total_frères: "neeraj@gmail.com",
      total_soeurs: 2015,
      total_membres: 167000,
    },
    {
      commission: "Vikas",
      total_frères: "vikas@gmail.com",
      total_soeurs: 2013,
      total_membres: 785462,
    },

    {
      commission: "Rahul",
      email: "rahul@gmail.com",
      total_frères: "neeraj@gmail.com",
      total_soeurs: 2020,
      total_membres: 784596,
      
    }
  ]

  const columns = [
    { title: "Commission", field: "commission", },
    { title: "Total frères", field: "total_frères", },
    { title: "Total soeurs", field: "total_soeurs", type: "numeric" },
    { title: "Total membres", field: 'total_membres', type: "currency" }]

  // const downloadExcel = () => {
  //   const newData = commissionDataForExport.map(row => {
  //     delete row.tableData
  //     return row
  //   })
  //   const workSheet = XLSX.utils.json_to_sheet(newData)
  //   const workBook = XLSX.utils.book_new()
  //   XLSX.utils.book_append_sheet(workBook, workSheet, "students")
  //   //Buffer
  //   XLSX.write(workBook, { bookType: "xlsx", type: "buffer" })
  //   //Binary string
  //   XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
  //   //Download
  //   XLSX.writeFile(workBook, "StudentsData.xlsx")

  // }
      //https://github.com/vikas62081/material-table-YT/blob/pdfExport/src/App.js exporter en excel


  const downloadPdf = () => {
    const doc: any = new jsPDF()
    doc.text("Commission Ikhwane", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: commission
    })
    doc.save('table.pdf')
  }

  const getHomeData = async () => {
    setIsLoading(true)
    try {
      const { data: membreCo } = await apiService.getMembresCo();
      setMembreCo(membreCo)
      const { data: seminariste } = await apiService.getSeminariste()
      setSeminariste(seminariste)
      const { data: dortoir } = await apiService.getDortoir()

      setDortoir(dortoir)
      const { data: commission } = await apiService.getCommission()
      setCommission(commission)
      console.log("commission", commission);
    } catch (error) {
      setIsLoading(false)
      console.log("error", error);
    }
  }
  useEffect(() => {
    getHomeData()
  }, [])

  return (
    <div>
      <Main className=''>
        <PrimaryLayout title={"Tableau de bord"}>
          <div>
            <div className='flex flex-col lg:flex-row lg:items-center '>
              <div className=' flex flex-col items-center space-y-0 lg:flex-row lg:items-center  lg:space-y-0'>
                <HomeCard bg={'bg-secondary_orange'} title={'Membres de C.O'} item1={{
                  title: "Frères",
                  value: membreCo?.Formation.frere + membreCo?.Administration.frere + membreCo?.Accueil_Hebergement.frere
                }} item2={{
                  title: "Sœurs",
                  value: membreCo?.Formation.soeur + membreCo?.Administration.soeur + membreCo?.Accueil_Hebergement.soeur
                }}
                  item3={{
                    title: "Total",
                    value: membreCo?.Accueil_Hebergement.Total + membreCo?.Administration.Total + membreCo?.Formation.Total
                  }}
                  icon={'fa:group'} 
                  eye={false}
                />
                <div className='lg:w-[1px]  bg-primary_green lg:h-[100px] w-[95%] h-[1px]'></div>
                <HomeCard bg={'bg-secondary_orange'} title={'Nombre de séminariste'} item1={{
                  title: "Frères",
                  value: seminariste?.frere
                }} item2={{
                  title: "Sœurs",
                  value: seminariste?.soeur
                }}
                  item3={{
                    title: "Total",
                    value: seminariste?.Total
                  }}
                  icon={'mdi:account-student'}
                  eye={false}
                />
                <div className='lg:w-[1px]  bg-primary_green lg:h-[100px] w-[95%] h-[1px]'></div>
                <HomeCard bg={'bg-secondary_orange'} title={'Nombre de dortoirs'} item1={{
                  title: "Co",
                  value: dortoir?.co
                }} item2={{
                  title: "séminariste",
                  value: dortoir?.seminariste
                }}
                  item3={{
                    title: "Total",
                    value: dortoir?.non_defini + dortoir?.co + dortoir?.seminariste
                  }}
                  icon={'fa-solid:home'}
                  eye={false}
                />
                <div className='lg:w-[1px]  bg-primary_green lg:h-[100px] w-[95%] h-[1px]'></div>
                <HomeCard bg={'bg-secondary_orange'} title={'Nombre de formateur'} item1={{
                  title: "Frères",
                  value: 10
                }} item2={{
                  title: "Sœurs",
                  value: 12
                }}
                  item3={{
                    title: "Total",
                    value: 12
                  }}
                  icon={'fa-solid:home'}
                  eye={false}
                />

              </div>
              <HomeCard bg={'bg-quaternary_green mt-3 lg:mt-0 lg:ml-3'} title={'Nombre total de visite'} item1={{
                title: "Frères",
                value: 10
              }} item2={{
                title: "Sœurs",
                value: 12
              }}
                item3={{
                  title: "Total",
                  value: 10
                }}
                icon={'fa-solid:home'}
                eye={false}
              />
            </div>
            <div className='flex flex-row items-center justify-between mt-[10px]'>
              <div className=' '>
                <Input className='rounded-[5px]' type='text' id={"recherche"} placeholder='Rechercher' onChange={(e) => console.log(e.target.value)} />
              </div>
              <Button onClick={() => downloadPdf()} outline={true} className='button-icon bg-tertiary_green' bg={''}>
                <p className='text-secondary_green'>Exporter</p>
              </Button>
            </div>
            <div className="relative overflow-x-auto shadow-sm mt-[10px]">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white  bg-secondary_green">
                  <tr>
                    <th scope="col" className="px-6 py-3">Commission</th>
                    <th scope="col" className="px-6 py-3">Total frères</th>
                    <th scope="col" className="px-6 py-3">Total soeurs</th>
                    <th scope="col" className="px-6 py-3">Total membres</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
  
                  {
                    commission.map((item, index) => (
                      <tr className={`${index % 2 == 0 ? "bg-white":"bg-white/50"} dark:bg-gray-800`} key={index}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.commission}
                        </th>
                        <td className="px-6 py-4">{item.total_frères}</td>
                        <td className="px-6 py-4">{item.total_soeurs}</td>
                        <td className="px-6 py-4">{item.total_membres}</td>
  
                      </tr>
                    ))
                  }
                </tbody>
              </table>

            </div>
            <div className='mt-[10px] flex flex-row justify-between items-center'>
              <p className=' text-[12px] text-primary_green font-bold'>Les PCO du séminaire</p>
              <Button onClick={()=>navigate("/add-commission")} outline={true} className='button-icon bg-quaternary_green' bg={''}>
                <div className='border rounded-full p-[3px] bg-primary_green'>
                  <Icon icon="mdi:plus" className='text-white' />
                </div>
                <p className='text-secondary_green'>Ajouter un PCO</p>
              </Button>
            </div>
            <div className="relative overflow-x-auto shadow-sm mt-[10px]">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white  bg-secondary_green">
                  <tr>
                    <th scope="col" className="px-6 py-3">Nom et prénoms</th>
                    <th scope="col" className="px-6 py-3">Genre</th>
                    <th scope="col" className="px-6 py-3">Sous-comités</th>
                    <th scope="col" className="px-6 py-3">Contact</th>
                    <th scope="col" className="px-6 py-3">Situation</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">$udsuf</td>
                    <td className="px-6 py-4 text-right">
                      <div className='flex flex-row justify-start items-center space-x-2'>
                        <EditButton />
                        <DeleteButton />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1999</td>
                    <td className="px-6 py-4">$1999</td>
                    <td className="px-6 py-4 text-right">
                      <div className='flex flex-row justify-start items-center space-x-2'>
                        <EditButton />
                        <DeleteButton />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                    <td className="px-6 py-4">$99</td>
                    <td className="px-6 py-4 text-right">
                      <div className='flex flex-row justify-start items-center space-x-2'>
                        <EditButton />
                        <DeleteButton />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </PrimaryLayout>
      </Main>
    </div>
  )
}

export default Home
