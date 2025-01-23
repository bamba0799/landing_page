import { useEffect, useState } from 'react'
import Main from '../ components/Main/Main'

import homeImage1 from "../assets/homeImage1.png";
import featureImage2 from "../assets/featureImage2.png";
import grapheImage1 from "../assets/grapheImage1.png";
import targetImage1 from "../assets/targetImage1.png";
import SecondButton from '../ components/Button/SecondButton';
import FeatureCard from '../ components/FeatureCard';
import TargetCard from '../ components/TargetCard';


function Home() {
  return (
    <div className='bg-white min-h-screen'>
      <Main className=''>
        <div className="mt-[30px]   flex flex-col justify-between items-center">
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
          <div className='flex flex-col items-center '>
            {/* first */}
            <div className='mt-[100px] grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-[30px]'>
              <FeatureCard
                image={featureImage2}
                title="Analyse de données avec Ia"
                description="Suivez votre trésorerie à la transaction près. Analysez vos postes de dépenses et vos recettes en un seul clic."
              />
              <FeatureCard
                image={featureImage2}
                title="Devis & Facturation"
                description="Suivez votre trésorerie à la transaction près. Analysez vos postes de dépenses et vos recettes en un seul clic."
              />
              <FeatureCard
                image={featureImage2}
                title="Trésorerie"
                description="Suivez votre trésorerie à la transaction près. Analysez vos postes de dépenses et vos recettes en un seul clic."
              />
              <FeatureCard
                image={featureImage2}
                title="Trésorerie"
                description="Suivez votre trésorerie à la transaction près. Analysez vos postes de dépenses et vos recettes en un seul clic."
              />
              <FeatureCard
                image={featureImage2}
                title="Trésorerie"
                description="Suivez votre trésorerie à la transaction près. Analysez vos postes de dépenses et vos recettes en un seul clic."
              />
              <FeatureCard
                image={featureImage2}
                title="Trésorerie"
                description="Suivez votre trésorerie à la transaction près. Analysez vos postes de dépenses et vos recettes en un seul clic."
              />

            </div>
            {/* second */}
            <div className="mt-[20px] bg-gray-200 relative border h-[300px] lg:h-[400px] flex flex-col justify-center w-full overflow-hidden px-[20px]">
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
                      <div className="absolute -bottom-[20px] -right-[20px] lg:right-[10px] bg-white shadow-sm shadow-black/20  p-[10px] w-[190px] lg:w-[250px] h-[120px] border border-gray-200 rounded-[5px] z-20 text-center">
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
              <div className='w-full  text-center lg:w-[40%] border  border-red-800'>
                <p className='text-orange-400'>Nos cible</p>
                <p className='text-[18px] font-bold'>Découvrez nos cibles pour qui Acwaba est adapté</p>
              </div>
              <div className='border border-red-400'>
                <div className='flex flex-row justify-between items-center space-x-[20px]'>
                  <div>
                    <TargetCard image={targetImage1} title='PME' color='orange' />
                  </div>
                  <div className='mt-[20px]'>
                    <TargetCard image={targetImage1} title='PME' />
                  </div>
                </div>
                <div className='flex flex-row justify-between items-center mt-[0px]'>
                  <div>
                    <TargetCard image={targetImage1} title='PME' />
                  </div>
                  <div className='mt-[20px]'>
                    <TargetCard image={targetImage1} title='PME' color='orange'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[20px]'>
              <p>dsndsd</p>r
            </div>

          </div>

        </div>
      </Main>
    </div>
  )
}

export default Home
