import { useEffect, useState } from 'react'
import Main from '../ components/Main/Main'

import homeImage1 from "../assets/homeImage1.png";
import featureImage2 from "../assets/featureImage2.png";
import grapheImage1 from "../assets/grapheImage1.png";
import targetImage1 from "../assets/targetImage1.png";
import SecondButton from '../ components/Button/SecondButton';
import FeatureCard from '../ components/FeatureCard';
import TargetCard from '../ components/TargetCard';
import PricingCard from '../ components/PricingCard';
import targetBgImage from "../assets/targetBgImage.png";
import EnterpriseCard from '../ components/EnterpriseCard';
import Arrowright from '../assets/Arrowright.png';
import Arrowleft from '../assets/Arrowleft.png';
import questionbg from '../assets/questionbg.png';
import { Icon } from '@iconify/react/dist/iconify.js';

function Home() {
  const [tarifButtonId, setTarifButtonId] = useState(0);

  const tarifButtonData = [
    { id: 0, title: "Mensuelle" },
    { id: 1, title: "Annuelle" },
  ];


  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam sed lobortis pellentesque vestibulum ultrices quam eu.",
      name: "Laurence Françoise",
      company: "HADEM Solutions",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam sed lobortis pellentesque vestibulum ultrices quam eu.",
      name: "Laurence Françoise",
      company: "HADEM Solutions",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam sed lobortis pellentesque vestibulum ultrices quam eu.",
      name: "Laurence Françoise",
      company: "HADEM Solutions",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Main>
        <div className="mt-[30px] flex flex-col justify-between items-center">
          {/* Section principale */}
          <section className="w-full relative bg-gradient-to-b from-blue-900 to-blue-800 text-white ">
            <div className="border border-orange-800 lg:mx-[30px]   py-12 flex flex-col lg:flex-row items-center lg:justify-between ">
              {/* Image principale */}
              <div className="w-full border border-red-800 flex justify-center lg:hidden mb-6">
                <img
                  src={homeImage1}
                  alt="Illustration de la page d'accueil"
                  className="w-2/3 object-cover"
                />
              </div>
              <div className='border lg:w-[50%]'>
                {/* Texte principal */}
                <h1 className="text-2xl font-bold leading-tight mb-4">
                  Le pilotage de votre activité n'a jamais été aussi simple
                </h1>
                <p className="text-sm mb-6">
                  Facturez vos clients, et suivez votre trésorerie aisément,
                  tout en focus sur votre activité
                </p>
                {/* Boutons */}
                <div className="w-full flex flex-col lg:flex-row  lg:items-center space-y-4 lg:space-y-0 lg:space-x-3">
                  <SecondButton shadow=' shadow-custom' text={"Ouvrir un compte"} />
                  <SecondButton bgColor='bg-white' textColor='text-black' text={"Tester gratuitement"} />
                </div>
                {/* Flèche vers le bas */}

              </div>
              <div className="border w-full lg:w-[50%] hidden lg:flex justify-center mb-6">
                <img
                  src={homeImage1}
                  alt="Illustration de la page d'accueil"
                  className="w-2/3"
                />
              </div>
            </div>
            <div className="flex justify-center mt-8 mb-20 z-[999999px]">
              <button className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12.75L12 19.5l-7.5-6.75"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute z-[999px] -bottom-[50px] left-0 w-full h-[100px] bg-white border-[5px] border-t-orange-500  transform -skew-y-[6deg] lg:-skew-y-[2deg] origin-bottom"></div>
          </section>

          {/* first */}
          <div className="mt-[100px] grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-[30px]">
            <FeatureCard
              image={featureImage2}
              title="Analyse de données avec IA"
              description="Suivez votre trésorerie à la transaction près."
            />
            <FeatureCard
              image={featureImage2}
              title="Devis & Facturation"
              description="Gérez vos devis et factures en un seul clic."
            />
            <FeatureCard
              image={featureImage2}
              title="Trésorerie"
              description="Optimisez la gestion de votre trésorerie."
            />
          </div>
          {/* second */}
          <div className="mt-[20px]  bg-gray-200 relative border h-[300px] lg:h-[400px] flex flex-col justify-center w-full overflow-hidden px-[20px]">
            {/* Texte (doit être au-dessus du cercle) */}
            <div className="relative z-10 w-full border border-red-800 flex flex-col ">
              <div className='w-full lg:w-[40%] border flex flex-col text-center justify-center lg:hidden  mb-[20px]  border-red-800'>
                <p className='text-orange-400'>Notre espace analytique dynamique</p>
                <p className='text-[18px] font-bold'>Suivez la rentabilité de votre activité en temps réels</p>
              </div>
              <div className='flex flex-col lg:flex-row  items-center justify-between'>
                <div className='w-full lg:w-[55%] lg:h-[300px] lg:text-start border border-green-800 '>
                  <div className='w-full h-full relative'>
                    <img src={grapheImage1} alt={"title"} className="w-full h-full object-contain" />
                    <div className="absolute -bottom-[20px] right-[0px] lg:right-[10px] bg-white shadow-sm shadow-black/20  p-[10px] w-[190px] lg:w-[250px] h-[120px] border border-gray-200 rounded-[5px] z-20 text-center">
                      <p className=' font-bold text-[12px] lg:text-[14px]'>Un tableau de bord intuitif</p>
                      <p className="text-[12px] text-gray-700 "> Grâce à votre tableau de bord intuitif  de la trésorerie, vous pouvez suivre vos recettes et dépenses</p>
                    </div>
                  </div>
                </div>
                <div className='w-full hidden lg:flex lg:flex-col  lg:w-[40%] border   border-red-800'>
                  <p className='text-orange-400'>Notre espace analytique dynamique</p>
                  <p className='text-[18px] font-bold'>Suivez la rentabilité de votre
                    activité en temps réels</p>
                </div>

              </div>
            </div>
            {/* Cercle décoratif (doit rester en arrière-plan) */}
            <div className="absolute -top-[100px] left-[50%] -translate-x-[240px] w-[480px] h-[480px] rounded-full bg-gray-300/30 z-0 flex flex-row justify-center items-center">
              <div className="w-[400px] h-[400px] rounded-full bg-gray-200"></div>
            </div>
          </div>
          {/* third */}
          <div className='px-[30px] mt-[20px] border w-full flex flex-col lg:flex-row justify-between'>
            <div className='w-full flex flex-col items-center lg:w-[50%] border  border-red-800'>
              <div className='text-center'>
                <p className='text-orange-400'>Nos cible</p>
                <p className='text-[18px] font-bold'>Découvrez nos cibles pour qui Acwaba est adapté</p>
              </div>
              <div>
                <img src={targetBgImage} alt="" className='opacity-5 hidden lg:flex' />
              </div>
            </div>
            <div className='border border-red-400 flex flex-col items-center '>
              <div className='flex flex-row  items-center space-x-[20px] lg:space-x-[40px]'>
                <div>
                  <TargetCard image={targetImage1} title='PME' color='orange' />
                </div>
                <div className='mt-[20px] lg:mt-[40px]'>
                  <TargetCard image={targetImage1} title='PME' />
                </div>
              </div>
              <div className='flex flex-row space-x-[20px] lg:space-x-[40px] items-center mt-[0px]'>
                <div>
                  <TargetCard image={targetImage1} title='PME' />
                </div>
                <div className='mt-[20px] lg:mt-[40px]'>
                  <TargetCard image={targetImage1} title='PME' color='orange' />
                </div>
              </div>
            </div>
          </div>
          {/* fourth les tarifs */}
          <div className="bg-gray-200 overflow-hidden relative border border-red-600 mt-[50px] w-full flex flex-col items-center">
            {/* button */}
            <div className="h-[40px] w-[80%] z-10 lg:w-[400px] rounded-full bg-blue-500/20 mt-[10px] flex justify-around">
              {tarifButtonData.map((_item, index) => (
                <button
                  key={index}
                  onClick={() => setTarifButtonId(index)}
                  className={`w-[50%] h-full rounded-full ${index === tarifButtonId ? "bg-orange-400 text-white" : "bg-transparent"
                    }`}
                >
                  {_item.title}
                </button>
              ))}
            </div>
            {/* Conteneur scrollable */}
            <div className="mt-[20px]  border border-blue-700 w-full  px-[20px] pt-10  z-10 overflow-x-scroll lg:overflow-hidden flex space-x-5 lg:justify-center scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
              <div className={`flex-shrink-0 w-[90%] lg:w-[300px]`}>
                <PricingCard
                  title='start'
                  price={29}
                  description='Adapté aux auto-entrepreneurs & TPE'
                  data={[
                    "Clients & Fournisseurs",
                    "Devis & Facturation",
                    "1 utilisateur",
                    "Gestion de la trésorerie",
                    "Connection bancaire - 1 seul compte",
                    "Prévision bancaire - 1 seul scénario",
                  ]}
                />
              </div>
              <div className={`flex-shrink-0 w-[90%] lg:w-[300px]`}>
                <PricingCard
                  title='premium'
                  price={29}
                  description='Adapté aux auto-entrepreneurs & TPE'
                  data={[
                    "Clients & Fournisseurs",
                    "Devis & Facturation",
                    "1 utilisateur",
                    "Gestion de la trésorerie",
                    "Connection bancaire - 1 seul compte",
                    "Prévision bancaire - 1 seul scénario",
                  ]}
                />
              </div>
              <div className={`flex-shrink-0 w-[90%] lg:w-[300px]`}>
                <EnterpriseCard
                  title='premium'
                  description='Une offre personnalisée selon vos besoins. '
                />
              </div>

            </div>
            {/* voir avantage */}
            <div className=' hidden  w-full  border-red-600 lg:flex flex-row justify-between items-center'>
              <div className='w-[43%]  border-red-800' >
                <img src={Arrowleft} alt="" className=' object-cover w-full' />
              </div>
              <div className='w-[15%] flex justify-start ml-1 items-center  border-red-800'>
                <a href='' className='text-[12px] font-bold text-blue-800'>Voir tous les avantages</a>
                <Icon icon="weui:arrow-filled" className="text-blue-800 w-5 h-5" />
              </div>
              <div className='w-[43%]  border-red-800'>
                <img src={Arrowright} alt="" className=' object-cover w-full' />
              </div>
            </div>
            <div className="absolute -top-[100px]  left-[50%] -translate-x-[240px] w-[480px] h-[480px] rounded-full bg-gray-300/30 z-0 flex flex-row justify-center items-center">
              <div className="w-[400px] h-[400px] rounded-full bg-gray-200"></div>
            </div>
          </div>
          {/* fifth */}
          <div className="bg-white w-full">
            {/* Section Header */}
            <div className=" w-full  border border-green-900 flex flex-col items-center lg:items-start  lg:px-[20px]">
              <p className="text-orange-400 font-semibold text-lg">
                Nos clients
              </p>
              <h2 className="text-blue-900 text-[20px] font-bold">
                Observez ce que disent <br /> ceux qui ont testé Acwaba
              </h2>
            </div>
            <div className=' hidden lg:flex relative w-full '>
              <div className=" absolute -top-10 right-0 flex items-start justify-start px-[20px] pt-[20px] w-[400px] h-[200px] bg-orange-50 rounded-md">
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-400 bg-white text-orange-500 hover:bg-orange-100">
                  <span>&larr;</span>
                </button>
                <button className="w-10 h-10 ml-[20px] flex items-center justify-center rounded-full border border-orange-400 bg-white text-orange-500 hover:bg-orange-100 ">
                  <span>&rarr;</span>
                </button>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="relative max-w-6xl mx-auto ">
              <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-xl shadow-lg p-6 flex-shrink-0 w-[300px]"
                  >
                    <p className="text-gray-600 text-sm mb-4">{testimonial.text}</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="font-bold text-gray-800">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
          {/* Sixth */}
          <div className="mt-[20px] w-full">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-8 bg-cover bg-center  shadow-lg"
              style={{ backgroundImage: `url(${questionbg})` }}
            >
              {/* Section FAQ */}
              <div className="bg-white border border-red-600 bg-opacity-90 w-full lg:w-1/2 rounded-lg p-6 lg:p-8 lg:ml-auto">
                <p className="text-orange-500 font-semibold text-sm">FAQ</p>
                <h2 className="text-blue-900 font-bold text-lg lg:text-2xl mb-6">
                  Souhaitez-vous nous poser une question ?
                </h2>
                {/* FAQ Items */}
                <div className="space-y-4">
                  {[
                    "Comment puis-je renouveler mon abonnement ?",
                    "Ma connexion et mes données sont-elles sécurisées ?",
                    "Puis-je me désabonner à tout moment ?",
                    "Puis-je récupérer les informations saisies ?",
                  ].map((question, index) => (
                    <div
                      key={index}
                      className="border-b border-blue-900 pb-3 cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700 font-medium">{question}</p>
                        <button>
                          <Icon icon="bi:chevron-down" className="text-blue-900 w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex mt-6 justify-between">
                  <button className="w-[48%] py-2 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900">
                    Questions Fonctionnelles
                  </button>
                  <button className="w-[48%] py-2 bg-transparent border-2 border-blue-800 text-blue-800 font-medium rounded-lg hover:bg-blue-800 hover:text-white">
                    Questions Support
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </Main>
    </div>
  );
}

export default Home;
