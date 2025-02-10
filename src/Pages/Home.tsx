import { useEffect, useRef, useState } from 'react'
import Main from '../ components/Main/Main'
import { motion } from "framer-motion";
import homeImage1 from "../assets/homeImage1.png";
import feature1 from "../assets/feature/feature1.png";
import feature2 from "../assets/feature/feature2.png";
import feature3 from "../assets/feature/feature3.png";
import feature4 from "../assets/feature/feature4.png";
import feature5 from "../assets/feature/feature5.png";
import feature6 from "../assets/feature/feature6.png";
import featur from "../assets/bgIcon.png";
import grapheImage1 from "../assets/grapheImage1.png";
import tfeImage from "../assets/cible/tfeImage.png";
import pmeImage from "../assets/cible/pmeImage.png";
import startupImage from "../assets/cible/startupImage.png";
import associationImage from "../assets/cible/associationImage.png";
import SecondButton from '../ components/Button/SecondButton';
import FeatureCard from '../ components/FeatureCard';
import TargetCard from '../ components/TargetCard';
import PricingCard from '../ components/PricingCard';
import targetBgImage from "../assets/targetBgImage.png";
import EnterpriseCard from '../ components/EnterpriseCard';
import Arrowright from '../assets/Arrowright.png';
import Arrowleft from '../assets/Arrowleft.png';
import questionbg from '../assets/questionbg.png';
import Fuseemany from '../assets/Fuseemany.png';
import FuseeOne from '../assets/FuseeOne.png';
import { Icon } from '@iconify/react/dist/iconify.js';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import ConnexionModal from '../ components/Modal/ConnexionModal';
import ConnexionModal2 from '../ components/Modal/ConnexionModal2';
import FeatureCardMobile from '../ components/FeatureCardMobile';
import GeneralModal from '../ components/Modal/GeneralModal';

function Home() {
  const [tarifButtonId, setTarifButtonId] = useState(0);
  const [openConnexionModal, setOpenConnexionModal] = useState<boolean>(false);
  const [openInscriptionModal2, setOpenInscriptionModal2] = useState<boolean>(false);
  const [openDescriptionModal, setOpenDescriptionModal] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [bgSize, setBgSize] = useState("120%");


  const accueilRef = useRef<HTMLDivElement>(null);
  const aproposRef = useRef<HTMLDivElement>(null);
  const tarifRef = useRef<HTMLDivElement>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: "Comment puis-je renouveler mon abonnement ?", answer: "Vous pouvez renouveler votre abonnement via la section Mon Compte." },
    { question: "Ma connexion et mes données sont-elles sécurisées ?", answer: "Oui, nous utilisons des protocoles de sécurité avancés pour protéger vos données." },
    { question: "Puis-je me désabonner à tout moment ?", answer: "Oui, vous pouvez résilier votre abonnement à tout moment dans les paramètres." },
    { question: "Puis-je récupérer les informations saisies ?", answer: "Oui, vous pouvez télécharger vos données depuis votre espace utilisateur." },
  ];


  // Fonction pour faire défiler vers une section spécifique
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const tarifButtonData = [
    { id: 0, title: "Mensuelle" },
    { id: 1, title: "Annuelle" },
  ];

  const features = [
    {
      image: feature1,
      title: "Analyse de données",
      description:
        "Notre module analytics vous offre des graphes et un tableau de bord dynamique et intuitifs afin de comprendre et suivre vos statistiques en temps réel",
    },
    {
      image: feature2,
      title: "Devis & Facturation",
      description:
        "Editer des devis et des factures, suivez le recouvrement de vos factures, relancer automatiquement vos clients.",
    },
    {
      image: feature3,
      title: "Trésorerie",
      description:
        "Suivez votre trésorerie à la transaction près. Analyser vos postes de dépenses et vos recettes en un seul clic.",
    },
    {
      image: feature4,
      title: "Intégration Bancaire",
      description:
        "Définissez vos entités et suivez la facturation et la trésorerie de vos différentes entités. Vous pouvez, grâce aux statistiques d’acwaba, visualiser les entités les plus rentables ou les plus chères.",
    },
    {
      image: feature5,
      title: "Sécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pharetra, mollis cras. Luctus pharetra duis nisi, fermentum, ipsum et felis odio.",
    },
    {
      image: feature6,
      title: "Multi-entités",
      description:
        "Notre module analytics vous offre des graphes et un tableau de bord dynamique et intuitifs afin de comprendre et suivre vos statistiques en temps réel.",
    },
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
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam sed lobortis pellentesque vestibulum ultrices quam eu.",
      name: "Laurence Françoise",
      company: "HADEM Solutions",
    },

  ];


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBgSize("150%"); // Mobile
      } else if (window.innerWidth < 1024) {
        setBgSize("90%"); // Tablette
      } else {
        setBgSize("90%"); // PC
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Appliquer immédiatement la bonne taille

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="bg-white min-h-screen z-[100px]">
      <Main onClickAccueil={() => scrollToSection(accueilRef)} onClickApropos={() => scrollToSection(aproposRef)} onClickTarif={() => scrollToSection(tarifRef)}>
        <div className="mt-[30px] flex flex-col justify-between items-center">
          {/* Section principale */}
          <section ref={accueilRef} className=" w-full relative bg-gradient-to-b from-[#011E3E] to-[#0E5588] text-white ">
            <div className="border border-orange-800 mx-[20px] md:mx-[50px] mt-[50px] md:mt-[100px]  flex flex-col lg:flex-row items-center lg:justify-between ">
              {/* Image principale */}
              <div className="w-full  border-red-800 flex justify-center lg:hidden mb-6">
                <img
                  src={homeImage1}
                  alt="Illustration de la page d'accueil"
                  className=" w-full md:w-2/3 object-cover"
                />
              </div>
              <div className='border md:w-[45%]'>
                {/* Texte principal */}
                <h1 className=" font-poppins text-[24px] md:text-[38px] font-bold leading-tight mb-4">
                  Le pilotage de votre activité n'a jamais été aussi simple
                </h1>
                <p className="text-[12px] md:text-[20px] mb-6">
                  Facturez vos clients, et suivez votre trésorerie aisément,
                  tout en focus sur votre activité
                </p>
                {/* Boutons */}
                <div className="w-full flex flex-col lg:flex-row  lg:items-center space-y-4 lg:space-y-0 lg:space-x-3">
                  <SecondButton onClick={() => setOpenConnexionModal(true)} shadow=' shadow-custom' text={"Ouvrir un compte"} />
                  <SecondButton bgColor='bg-neutral_blanc' textColor='text-brand_bleu_inter' text={"Tester gratuitement"} />
                </div>
                {/* Flèche vers le bas */}

              </div>
              <div className=" border w-full lg:w-[50%] hidden lg:flex justify-center  ">
                <img
                  src={homeImage1}
                  alt="Illustration de la page d'accueil"
                  className="w-2/3"
                />
              </div>
            </div>
            <div className="flex flex-col items-center mt-[30px] mb-[70px] z-40 ">
              {/* Première flèche */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className=" w-[30px] h-[30px] text-white " // Utilisation de -mt-1 pour réduire l'espace
                animate={{ opacity: [0, 1, 0], y: [-3, 0, 3] }} // Même animation mais avec un délai différent
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.1 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75L12 19.5l-7.5-6.75" />
              </motion.svg>

              {/* Deuxième flèche plus proche */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className=" w-[30px] h-[30px] text-white -mt-[8px]" // Utilisation de -mt-1 pour réduire l'espace
                animate={{ opacity: [0, 1, 0], y: [-3, 0, 3] }} // Même animation mais avec un délai différent
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75L12 19.5l-7.5-6.75" />
              </motion.svg>
            </div>

            <div className="absolute z-[999px] -bottom-[50px] left-0 w-full h-[100px] bg-white border-t-[8px] border-t-[#F76E25]  transform -skew-y-[6deg] lg:-skew-y-[2deg] origin-bottom"></div>
          </section>
          {/* first */}
          <div className='mt-[20px] z-10 md:mt-[100px] w-full px-[20px] md:px-[50px]  border-red-600'>
            <div className=' w-full flex flex-col text-center justify-center'>
              <p className='text-brand_orange text-[16px] md:text-[24px] font-poppins'>Nos Fonctionnalités exceptionnelles</p>
              <p className='font-bold text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] font-poppins'>Suivez la rentabilité de votre activité en temps réels</p>
            </div>
          </div>
          {/* feature md */}
          <div className=" hidden  md:mt-[20px] md:grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 mx-[20px] md:mx-[50px] border">
            <FeatureCard
              image={feature1}
              title="Analyse de données avec IA"
              description="Notre module analytics vous offre des graphes et un tableau de bord dynamique et intuitifs afin de comprendre et suivre vos statistiques en temps réel"
            />
            <FeatureCard
              image={feature2}
              title="Devis & Facturation"
              description="Editer des devis et des factures, suivez le recouvrement de vos factures, relancer automatiquement vos clients."
            />
            <FeatureCard
              image={feature3}
              title="Trésorerie"
              description="Suivez votre trésorerie à la transaction près. Analyser vos postes de dépenses et vos recettes en un seul clic."
            />
            <FeatureCard
              image={feature4}
              title="Intégration Bancaire"
              description="Définissez vos entités et suivez la facturation et la trésorerie de vos différentes entités. Vous pouvez, grâce aux statistiques d’acwaba, visualiser les entités les plus rentables ou les plus chères."
            />
            <FeatureCard
              image={feature5}
              title="Sécurité"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pharetra, mollis cras. Luctus pharetra duis nisi, fermentum, ipsum et felis odio."
            />
            <FeatureCard
              image={feature6}
              title="Multi-entités"
              description="Notre module analytics vous offre des graphes et un tableau de bord dynamique et intuitifs afin de comprendre et suivre vos statistiques en temps réel."
            />
          </div>
          {/* feature mobile */}
          <div className="mt-[10px] md:mt-[20px] grid grid-cols-2 gap-4 mx-[20px]  md:hidden">
            {features.map((_item) => (
              <FeatureCardMobile
                onClick={() => { setDescription(_item.description); setOpenDescriptionModal(true) }}
                image={_item.image}
                title={_item.title}
                description={_item.description}
              />
            ))}


          </div>
          {/* second */}
          <div style={{ backgroundSize: bgSize }} ref={aproposRef} className="border border-red-800  mt-[20px] px-[20px] md:px-[50px] bg-[#FAFAFA] relative h-[300px] lg:h-[400px] flex flex-col justify-center w-full  bg-[url('/bgIcon.png')] bg-full bg-center bg-no-repeat">
            {/* Texte (doit être au-dessus du cercle) */}
            <div className=" z-10 w-full  border-red-800 flex flex-col ">

              <div className='mt-[20px] z-10 md:mt-[100px]  w-full px-[20px] md:hidden  border-red-600'>
                <div className=' w-full flex flex-col text-center justify-center'>
                  <p className='text-brand_orange text-[16px] md:text-[24px] font-poppins'>Notre espace analytique dynamique</p>
                  <p className='font-bold text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] font-poppins'>Suivez la rentabilité de votre activité en temps réels</p>
                </div>
              </div>
              <div className='border border-red-600 flex flex-col md:flex-row mt-[20px] md:mt-[0px] items-center justify-center md:space-x-[30px]'>
                <div className='w-full md:w-[55%] md:h-[300px]  border border-green-800'>
                  <div className='w-full h-full relative'>
                    <img src={grapheImage1} alt={"title"} className="w-full h-full object-contain" />
                    <div className="absolute -bottom-[40px] right-[0px] md:right-[10px] bg-neutral_blanc shadow-sm shadow-black/20 py-[10px] md:py-[20px]  px-[10px] w-[199px] md:w-[395px] h-[110px] md:h-[215px] border-[1.4px] border-neutral_gris  rounded-[16px] z-20 text-start flex flex-col justify-between">
                      <p className=' font-bold text-[12px] text-brand_bleu_fonce_500 md:text-[20px]'>Un tableau de bord intuitif</p>
                      <p className='text-[8px] md:text-[14px] text-neutral_gris '>Pour suivre en temps réels votre  chiffre d’affaire</p>
                      <p className="text-[8px] md:text-[14px] text-brand_bleu_fonce_500 ">Grâce à votre tableau de bord intuitif, vos
                        graphes et statistiques dynamiques, suivez
                        l’évolution financières de votre activités plus
                        facilement</p>
                    </div>
                  </div>
                </div>
                <div className='mt-[20px] z-10  w-full px-[20px] hidden md:flex border border-red-600 md:w-[35%] '>
                  <div className=' w-full flex flex-col text-starts justify-center'>
                    <p className='text-brand_orange text-[16px] md:text-[24px] font-poppins'>Notre espace analytique dynamique</p>
                    <p className='font-bold text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] font-poppins'>Suivez la rentabilité de votre activité en temps réels</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* third */}
          <div className='px-[30px] mt-[30px] md:mt-[20px]  border-blue-600 w-full flex flex-col md:flex-row justify-between md:px-[130px]'>
            <div className='w-full flex flex-col items-center justify-between md:w-[40%]  border border-red-800'>
              <div className='mt-[20px] z-10 md:mt-[10px] w-full px-[20px] md:px-[50px]  border-red-600'>
                <div className=' w-full flex flex-col text-center md:text-start md:w-[350px] justify-center'>
                  <p className='text-brand_orange text-[16px] md:text-[24px] font-poppins'>Nos cibles</p>
                  <p className='font-bold text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] font-poppins'>Découvrez nos cibles pour qui Acwaba est adapté</p>
                </div>
              </div>
              <div>
                <img src={targetBgImage} alt="" className='opacity-5 hidden md:flex' />
              </div>
            </div>
            <div className='mt-[10px] md:mt-[0px] border-red-400 flex flex-col items-center '>
              <div className='flex flex-row  items-center space-x-[9px] md:space-x-[20px]'>
                <div>
                  <TargetCard image={tfeImage} title='TFE' color='orange' />
                </div>
                <div className='mt-[9px] md:mt-[20px]'>
                  <TargetCard image={pmeImage} title='PME' />
                </div>
              </div>
              <div className='flex flex-row space-x-[9px] md:space-x-[20px] items-center mt-[0px]'>
                <div>
                  <TargetCard image={startupImage} title='startup' />
                </div>
                <div className='mt-[9px] md:mt-[20px]'>
                  <TargetCard image={associationImage} title='Association' color='orange' />
                </div>
              </div>
            </div>
          </div>
          {/* fourth les tarifs */}
          <div style={{ backgroundSize: bgSize }}  ref={tarifRef} className="bg-[#FAFAFA] overflow-hidden relative  border-red-600 mt-[50px] w-full flex flex-col items-center bg-[url('/bgIcon.png')] bg-full bg-center bg-no-repeat">
            {/* button */}
            <div className='mt-[20px] z-10  w-full px-[20px]  border border-red-600 flex flex-row justify-center'>
              <div className=' w-full md:w-[800px] flex flex-col text-center justify-center'>
                <p className='text-brand_orange text-[16px] md:text-[24px] font-poppins'>Nos tarifs</p>
                <p className='font-bold text-brand_bleu_fonce_500 mt-[7px] text-[20px] md:text-[32px] font-poppins'>Choisissez l’offre qui vous correspond</p>
                <p className=' text-[12px] md:text-[14px] text-neutral_gris'>Comparer les fonctionnalités et sélectionner la meilleure offre pour votre business.
                  Acwaba propose plusieurs offres qui s’adaptent à tout type de d’entreprise.</p>
              </div>
            </div>
            <div className="h-[40px] w-[80%] z-10 md:w-[400px] rounded-full bg-surface_bleu mt-[20px] flex justify-around">
              {tarifButtonData.map((_item, index) => (
                <button
                  key={index}
                  onClick={() => setTarifButtonId(index)}
                  className={`w-[50%] text-[14px] md:text-[16px] text-brand_bleu_inter h-full rounded-full ${index === tarifButtonId ? "bg-brand_orange text-white" : "bg-transparent"
                    }`}
                >
                  {_item.title}
                </button>
              ))}
            </div>
            {/* Conteneur scrollable */}
            <div className="mt-[20px]   border-blue-700 w-full  px-[20px] pt-10  z-10 overflow-x-scroll md:overflow-hidden flex space-x-5 md:justify-center scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
              <div className={`flex-shrink-0 w-[90%] lg:w-[300px]`}>
                <PricingCard
                  title='Start'
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
                  title='Premium'
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
          </div>
          {/* fifth */}
          <div className="bg-white w-full">
            {/* Section Header */}
            <div className=" w-full   border-green-900 flex flex-col items-center lg:items-start  lg:px-[20px]">
              <p className="text-orange-400 font-semibold text-lg">
                Nos clients
              </p>
              <h2 className="text-blue-900 text-[20px] font-bold">
                Observez ce que disent <br /> ceux qui ont testé Acwaba
              </h2>
            </div>
            <div className=' hidden lg:flex relative w-full '>
              <div className=" absolute -top-10 right-0 flex items-start justify-start px-[20px] pt-[20px] w-[400px] h-[200px] bg-orange-50 rounded-md">
                <button className="w-10 h-10 flex items-center justify-center rounded-full  border-orange-400 bg-white text-orange-500 hover:bg-orange-100">
                  <span>&larr;</span>
                </button>
                <button className="w-10 h-10 ml-[20px] flex items-center justify-center rounded-full  border-orange-400 bg-white text-orange-500 hover:bg-orange-100 ">
                  <span>&rarr;</span>
                </button>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="relative  mx-auto ">
              <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-6">
                {testimonials.map((testimonial: any, index: number, self: any[]) => (
                  <div
                    key={testimonial.id}
                    className={`bg-white rounded-xl ${index == 0 ? "ml-[20px]" : ""} ${index + 1 == self.length ? "mr-[20px]" : ""} shadow-lg p-6 flex-shrink-0 w-[300px]`}
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
              <div className="bg-white  border-red-600 bg-opacity-90 w-full lg:w-1/2 rounded-lg p-6 lg:p-8 lg:ml-auto">
                <p className="text-orange-500 font-semibold text-sm">FAQ</p>
                <h2 className="text-blue-900 font-bold text-lg lg:text-2xl mb-6">
                  Souhaitez-vous nous poser une question ?
                </h2>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {questions.map((item, index) => (
                    <div key={index} className="border-b border-blue-900 pb-3">
                      <button
                        className="flex justify-between items-center w-full cursor-pointer focus:outline-none"
                        onClick={() => toggleQuestion(index)}
                      >
                        <p className="text-gray-700 font-medium">{item.question}</p>
                        <Icon
                          icon={openIndex === index ? "bi:chevron-up" : "bi:chevron-down"}
                          className="text-blue-900 w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                          }`}
                      >
                        <p className="text-gray-600 text-sm">{item.answer}</p>
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
          {/* seventh */}
          <div className='mt-[20px] w-full border border-red-800'>
            <div className="bg-white w-full py-12 px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
              {/* Mobile: une seule fusée */}
              <div className="lg:hidden">
                <img
                  src={FuseeOne} // Remplace par l'image réelle
                  alt="Rocket"
                  className="w-32 h-32"
                />
              </div>
              {/* Texte */}
              <div className="lg:w-1/2 text-center lg:text-left mt-[10px] lg:mt-0">
                <p className="text-orange-500 font-bold text-sm uppercase mb-4">
                  Prêt à embarquer avec Acwaba ?
                </p>
                <h2 className="text-blue-900 text-2xl font-bold mb-6">
                  Gagnez du temps dans <br /> votre facturation et <br /> la gestion de <br />
                  votre trésorerie.
                </h2>
                <button className="bg-blue-800 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-900">
                  Ouvrir un compte
                </button>
              </div>

              {/* Image */}
              <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
                {/* Web: grille de fusées */}
                <div className="hidden lg:flex ">
                  <img src={Fuseemany} />
                </div>


              </div>
            </div>

          </div>
          {/* footer */}
          <div className='mt-[20px] w-full border border-red-800'>
            <footer className="w-ful">
              <div className=" flex flex-col md:flex-row ">
                {/* 1 */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 w-full md:w-[50%]">
                  <div className="flex flex-col items-center">
                    {/* Logo */}
                    <img src="/path-to-your-logo/acwaba.png" alt="Acwaba" className="h-12 mb-4" />

                    {/* Subscription Text */}
                    <p className="text-center mb-4 max-w-md">
                      Rejoignez notre liste d’abonnés pour recevoir instantanément les dernières nouvelles et offres spéciales.
                    </p>

                    {/* Subscription Form */}
                    <div className="flex justify-between md:justify-center md:space-x-5 w-full">
                      <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-2 rounded-full text-black focus:outline-none"
                      />
                      <button className="bg-orange-500 hover:bg-orange-600  py-2 px-[20px] md:px-[40px] rounded-full text-[14px]">
                        Verifier
                      </button>
                    </div>

                    {/* Copyright Text */}
                    <p className="text-sm mt-6">© Copyright 2024. All Rights Reserved by Acwaba</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4">
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                        <img src="/path-to-your-icons/facebook.png" alt="Facebook" className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                        <img src="/path-to-your-icons/instagram.png" alt="Instagram" className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                        <img src="/path-to-your-icons/youtube.png" alt="YouTube" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="bg-[#BFDBFE] overflow-hidden relative  border-red-600   flex flex-col items-cent w-full md:w-[50%]">
                  {/* contact */}
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className=" p-8 rounded-lg flex flex-row justify-between md:space-x-[80px] space-x-[0px] md: z-10">
                      {/* Pages Section */}
                      <div>
                        <h2 className=" font-bold text-blue-900 mb-4">Pages</h2>
                        <ul className="space-y-2 text-blue-900">
                          <li><a href="#" className="hover:underline">Accueil</a></li>
                          <li><a href="#" className="hover:underline">À propos</a></li>
                          <li><a href="#" className="hover:underline">Tarif</a></li>
                          <li><a href="#" className="hover:underline">Contact</a></li>
                          <li><a href="#" className="hover:underline">Conditions générales</a></li>
                        </ul>
                      </div>

                      {/* Contacts Section */}
                      <div>
                        <h2 className=" font-bold text-blue-900 mb-4">Contacts</h2>
                        <ul className="space-y-3 text-blue-900">
                          <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-blue-700" />
                            <span>25 Rue de Ponthieu<br />75008, Paris<br />France</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FaEnvelope className="text-blue-700" />
                            <a href="mailto:contact@acwaba.com" className="hover:underline">contact@acwaba.com</a>
                          </li>
                          <li className="flex items-center gap-2">
                            <FaPhone className="text-blue-700" />
                            <span>
                              +33 6 63 67 31 02<br />
                              +33 6 60 53 04 97
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[0px] bottom-[0px] right-[0px]  w-[380px] h-[380px] rounded-full bg-gray-300/30 z-0 flex flex-row justify-center items-center">
                    <div className="w-[300px] h-[300px] rounded-full bg-[#BFDBFE]"></div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <GeneralModal open={openDescriptionModal} onClose={() => setOpenDescriptionModal(false)} >
          <div className='text-center bg-white p-4'>
            {description}
          </div>
        </GeneralModal>
        <ConnexionModal isSuivant={((val) => setOpenInscriptionModal2(val))} deleteAction={() => console.log("sss")} cancelAction={() => { setOpenConnexionModal(false) }} text='Etes vous sur de bien effacer?' open={openConnexionModal} onClose={() => setOpenConnexionModal(false)} />
        <ConnexionModal2 isSuivant={((val) => setOpenInscriptionModal2(val))} deleteAction={() => console.log("sss")} cancelAction={() => { setOpenConnexionModal(false) }} text='Etes vous sur de bien effacer?' open={openInscriptionModal2} onClose={() => setOpenConnexionModal(false)} />
      </Main>
    </div>
  );
}

export default Home;
