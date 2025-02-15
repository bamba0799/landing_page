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
import logo1 from "../assets/logo1.png";
import grapheImage1 from "../assets/grapheImage1.png";
import tfeImage from "../assets/cible/tfeImage.png";
import pmeImage from "../assets/cible/pmeImage.png";
import facebook from "../assets/socialNetwork/facebook.png";
import lIn from "../assets/socialNetwork/lIn.png";
import youtube from "../assets/socialNetwork/youtube.png";
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
  const [tarifBgSize, setTarifBgSize] = useState("120%");


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
      text: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Magna diam sed lobortis pellentesque vestibulum ultrices quam  eu. Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Magna diam sed pellentesque vestibulum ultrices quam eu.  Lorem ipsum dolor sit amet. vestibulum ultrices quam eu. Lorem ipsum dolor sit amet.",
      name: "Laurence Françoise",
      company: "HADEM Solutions",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Magna diam sed lobortis pellentesque vestibulum ultrices quam  eu. Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Magna diam sed pellentesque vestibulum ultrices quam eu.  Lorem ipsum dolor sit amet. vestibulum ultrices quam eu. Lorem ipsum dolor sit amet.",
      name: "Laurence Françoise",
      company: "HADEM Solutions",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Magna diam sed lobortis pellentesque vestibulum ultrices quam  eu. Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Magna diam sed pellentesque vestibulum ultrices quam eu.  Lorem ipsum dolor sit amet. vestibulum ultrices quam eu. Lorem ipsum dolor sit amet.",
      name: "Laurence Françoise",
      company: "HADEM Solutions",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Magna diam sed lobortis pellentesque vestibulum ultrices quam  eu. Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Magna diam sed pellentesque vestibulum ultrices quam eu.  Lorem ipsum dolor sit amet. vestibulum ultrices quam eu. Lorem ipsum dolor sit amet.",
      name: "Laurence Françoise",
      company: "HADEM Solutions",
    },

  ];


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBgSize("150%"); // Mobile
        setTarifBgSize("tarifBgSize%")
      } else if (window.innerWidth < 1024) {
        setBgSize("90%"); // Tablette
        setTarifBgSize("200%")
      } else {
        setBgSize("90%"); // PC
        setTarifBgSize("200%")
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
            <div className=" border-orange-800 mx-[20px] md:mx-[50px] mt-[50px] md:mt-[100px]  flex flex-col lg:flex-row items-center lg:justify-between ">
              {/* Image principale */}
              <div className="w-full  border-red-800 flex justify-center lg:hidden mb-6">
                <img
                  src={homeImage1}
                  alt="Illustration de la page d'accueil"
                  className=" w-full md:w-2/3 object-cover"
                />
              </div>
              <div className=' md:w-[45%]'>
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
              <div className="  w-full lg:w-[50%] hidden lg:flex justify-center  ">
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
          <div className=" hidden  md:mt-[20px] md:grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 mx-[20px] md:mx-[50px] ">
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
          <div style={{ backgroundSize: bgSize }} ref={aproposRef} className=" border-red-800  mt-[20px] px-[20px] md:px-[50px] bg-[#FAFAFA] relative h-[300px] lg:h-[400px] flex flex-col justify-center w-full  bg-[url('/bgIcon.png')] bg-full bg-center bg-no-repeat">
            {/* Texte (doit être au-dessus du cercle) */}
            <div className=" z-10 w-full  border-red-800 flex flex-col ">

              <div className='mt-[20px] z-10 md:mt-[100px]  w-full px-[20px] md:hidden  border-red-600'>
                <div className=' w-full flex flex-col text-center justify-center'>
                  <p className='text-brand_orange text-[16px] md:text-[24px] font-poppins'>Notre espace analytique dynamique</p>
                  <p className='font-bold text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] font-poppins'>Suivez la rentabilité de votre activité en temps réels</p>
                </div>
              </div>
              <div className=' border-red-600 flex flex-col md:flex-row mt-[20px] md:mt-[0px] items-center justify-center md:space-x-[30px]'>
                <div className='w-full md:w-[55%] md:h-[300px]   border-green-800'>
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
                <div className='mt-[20px] z-10  w-full px-[20px] hidden md:flex  border-red-600 md:w-[35%] '>
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
            <div className='w-full flex flex-col items-center justify-between md:w-[40%]   border-red-800'>
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
          <div style={{ backgroundSize: tarifBgSize }} ref={tarifRef} className="bg-[#FAFAFA] overflow-hidden relative  border-red-600 mt-[50px] w-full flex flex-col items-center bg-[url('/bgIcon.png')] bg-full bg-center bg-no-repeat">
            {/* button */}
            <div className='mt-[20px] z-10  w-full px-[20px]   border-red-600 flex flex-row justify-center'>
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
              <div className={`flex-shrink-0`}>
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
              <div className={`flex-shrink-0`}>
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
              <div className={`flex-shrink-0`}>
                <EnterpriseCard
                  data={[
                    "Plan Premium",
                    "Utilisateurs illimités",
                    "Nom de domaine personnalisé",
                    "Intégration custom (sur demande)",
                    "Détection fraude  acwaba Copilot",
                    "Custom Branding",
                    "Nous contacter",
                  ]}
                  title='premium'
                  description='Une offre personnalisée selon vos besoins. '
                />
              </div>

            </div>
            {/* voir avantage */}
            <div className=' hidden  w-full  border-red-600 lg:flex flex-row justify-between items-center mb-20'>
              <div className='w-[43%]  border-red-800' >
                <img src={Arrowleft} alt="" className=' object-cover w-full' />
              </div>
              <div className='w-[15%] flex justify-start ml-1 items-center  border-red-800'>
                <a href='' className='text-[12px]  md:text-[16px] font-bold text-brand_bleu_fonce_500'>Voir tous les avantages</a>
                <Icon icon="weui:arrow-filled" className="text-brand_bleu_fonce_500 w-5 h-5" />
              </div>
              <div className='w-[43%]  border-red-800'>
                <img src={Arrowright} alt="" className=' object-cover w-full' />
              </div>
            </div>
          </div>
          {/* fifth */}
          <div className="bg-white w-full ">
            <div className='mt-[20px] z-10 md:mt-[10px] w-full md:w-[800px]  px-[20px] md:ml-[60px]  border-red-600'>
              <div className=' w-full flex flex-col text-center md:text-start  justify-center'>
                <p className='text-brand_orange text-[16px] md:text-[24px] font-poppins'>Nos clients</p>
                <p className='font-bold text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] font-poppins'>Observez ce que disent <br /> ceux qui ont testé Acwaba</p>
              </div>
            </div>
            <div className=' hidden md:flex relative w-full '>
              <div className=" absolute -top-10 right-0 flex items-start justify-start px-[20px] pt-[20px] w-[800px] h-[368px] bg-surface_orange rounded-md">
                <button className="w-[60px] h-[60px] flex items-center justify-center rounded-full  border-orange-400 bg-white text-orange-500 hover:bg-brand_orange hover:text-white">
                  <Icon icon="heroicons:arrow-left-16-solid" className="w-5 h-5" />
                </button>
                <button className="w-[60px] h-[60px]  ml-[20px] flex items-center justify-center rounded-full  border-orange-400 bg-white text-orange-500 hover:bg-brand_orange hover:text-white">
                  <Icon icon="heroicons:arrow-right-16-solid" className="  w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="relative  mx-auto z-20">
              <div className=" border-red-700 pb-[20px] flex space-x-6 overflow-x-auto scrollbar-hide mt-[30px] md:mt-[50px]">
                {testimonials.map((testimonial: any, index: number, self: any[]) => (
                  <div
                    key={testimonial.id}
                    className={`bg-white rounded-[16px] ${index == 0 ? "ml-[20px] md:ml-[60px]" : ""} ${index + 1 == self.length ? "mr-[20px]" : ""} shadow-lg shadow-black/30 p-6 flex-shrink-0 w-[423px] h-[314px] flex flex-col justify-between  border-red-700 pb-[40px]`}
                  >
                    <p className=" text-neutral_gris text-[14px] mb-4">{testimonial.text}</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-[95px] h-[95px] bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="font-bold text-brand_bleu_inter text-[14px]">
                          {testimonial.name}
                        </p>
                        <p className="text-neutral_gris text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
          {/* Sixth */}
          <div className="mt-[20px] w-full z-20  border-blue-500">
            <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 bg-cover bg-center  shadow-lg"
              style={{ backgroundImage: `url(${questionbg})` }}
            >
              {/* Section FAQ */}
              <div className="flex flex-col justify-between bg-white  border-red-600 bg-opacity-90 w-[350px] h-[536px] md:w-[544px] md:h-[620] rounded-[16px] px-[20px] md:px-[24px] lg:ml-auto">
                <div className='mt-[20px] md:mt-[30px]'>
                  <p className="text-brand_orange font-semibold text-[16px] md:text-[24px] text-center md:text-start">FAQ</p>
                  <h2 className="text-brand_bleu_fonce_500 font-bold text-[20px] md:text-[32px] mb-[12px] text-center md:text-start">
                    Souhaitez-vous nous poser une question ?
                  </h2>

                  {/* FAQ Items */}
                  <div className="space-y-4">
                    {questions.map((item, index) => (
                      <div key={index} className="border-b bordet-bratext-brand_bleu_inter pb-3">
                        <button
                          className="flex justify-between items-center w-full cursor-pointer focus:outline-none"
                          onClick={() => toggleQuestion(index)}
                        >
                          <p className="text-brand_bleu_fonce_500 text-start font-semibold text-[12px] md:text-[14px]">{item.question}</p>
                          <Icon
                            icon={openIndex === index ? "bi:chevron-up" : "bi:chevron-down"}
                            className="text-brand_bleu_fonce_500 w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"
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
                </div>

                {/* Buttons */}
                <div className="flex mt-6 justify-center">
                  <button className="w-[232px] text-[12px] md:text-[14px] py-2 bg-gradient-to-b from-[#011E3E] to-[#0E5588] text-white font-medium h-[60px] rounded-t-[16px] hover:bt-bratext-brand_bleu_inter">
                    Questions Fonctionnelles
                  </button>
                  <button className="w-[232px] text-[12px] md:text-[14px] py-2 bg-transparent border-[1.4px] border-brand_bleu_inter text-brand_bleu_inter font-medium h-[60px] rounded-t-[16px] hover:bg-blue-800 hover:text-white">
                    Questions Support
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* seventh */}
          <div className='mt-[20px] w-full  border-red-800'>
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
              <div className="lg:w-1/2 text-center lg:text-left mt-[10px] lg:mt-0  border-black flex flex-col items-center md:items-start">
                <p className="text-brand_orange font-semibold text-[16px] md:text-[24px] uppercase mb-4">
                  Prêt à embarquer avec Acwaba ?
                </p>
                <h2 className="font-bold text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] ">
                  Gagnez du temps dans <br /> votre facturation et <br /> la gestion de <br />
                  votre trésorerie.
                </h2>
                <SecondButton className='mt-[10px]' onClick={() => setOpenConnexionModal(true)} shadow=' shadow-custom' text={"Ouvrir un compte"} />
              </div>

              {/* Image */}
              <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
                {/* Web: grille de fusées */}
                <div className="hidden lg:flex ">
                  <img src={FuseeOne} />
                </div>


              </div>
            </div>

          </div>
          {/* footer */}
          <div className='mt-[20px] w-full  border-red-800'>
            <footer className="w-ful">
              <div className=" flex flex-col md:flex-row ">
                {/* 1 */}
                <div className="bg-gradient-to-r  from-[#011E3E] to-[#0E5588] text-white p-8 w-full md:w-[45%]">
                  <div className="flex flex-col justify-between space-y-[10px] items-start">
                    {/* Logo */}
                    <img src={logo1} alt="Acwaba" className="h-12 " />

                    {/* Subscription Form */}
                    <div className="flex md:justify-start md:space-x-5 w-full">
                      <input
                        type="email"
                        placeholder="Email"
                        className=" w-[223px] md:w-[286px] h-[44px] rounded-[44px] text-black focus:outline-none"
                      />
                      <button className="ml-[10px] md:ml-[5px] w-[119px] md:w-[146px] h-[44px] bg-orange-500 hover:bg-orange-600  p md:px-[45px] rounded-[44px] text-[14px]">
                        Verifier
                      </button>
                    </div>
                    {/* Subscription Text */}
                    <p className="text-start text-[12px] md:text-[14px]">
                      Rejoignez notre liste d’abonnés pour recevoir instantanément les dernières nouvelles et offres spéciales.
                    </p>

                    {/* Copyright Text */}
                    <p className="text-[12px] md:text-[14px] text-brand_bleu_inter">© Copyright 2024. All Rights Reserved by Acwaba</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 ">
                      <a href="#" className="">
                        <img src={facebook} alt="Facebook" className="w-[30px] h-[30px]" />
                      </a>
                      <a href="#" className="">
                        <img src={youtube} alt="Instagram" className="w-[30px] h-[30px]" />
                      </a>
                      <a href="#" className="">
                        <img src={lIn} alt="YouTube" className="w-[30px] h-[30px]" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="bg-[#CFE8F4] overflow-hidden relative  border-red-600   flex flex-col items-cent w-full md:w-[55%] bg-[url('/bgIcon.png')] bg-full bg-right bg-no-repeat ">
                  {/* contact */}
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className=" p-8 rounded-lg flex flex-row justify-between md:space-x-[140px] space-x-[0px] md: z-10">
                      {/* Pages Section */}
                      <div>
                        <h2 className=" font-bold text-brand_bleu_inter mb-4">Pages</h2>
                        <ul className="space-y-[24px] text-brand_bleu_inter">
                          <li><a href="#" className="hover:underline text-[12px] md:text-[16px]">Accueil</a></li>
                          <li><a href="#" className="hover:underline md:text-[16px]">À propos</a></li>
                          <li><a href="#" className="hover:underline text-[12px] md:text-[16px]">Tarif</a></li>
                          <li><a href="#" className="hover:underline md:text-[16px]">Contact</a></li>
                          <li><a href="#" className="hover:underline text-[12px] md:text-[16px]">Conditions générales</a></li>
                        </ul>
                      </div>

                      {/* Contacts Section */}
                      <div>
                        <h2 className=" font-bold text-brand_bleu_inter mb-4">Contacts</h2>
                        <ul className="space-y-[24px] text-brand_bleu_inter">
                          <li className="flex items-center gap-2">
                            <div className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] flex items-center justify-center rounded-full bg-white'>
                            <FaMapMarkerAlt className="text-brand_bleu_inte" />
                            </div>
                            <span className='ext-[12px] md:text-[16px]'>25 Rue de Ponthieu<br />75008, Paris<br />France</span>
                          </li>
                          <li className="flex items-center gap-2">
                          <div className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] flex items-center justify-center rounded-full bg-white'>
                            <FaEnvelope className="text-brand_bleu_inter" />
                            </div>
                            <a href="mailto:contact@acwaba.com" className="hover:underline ext-[12px] md:text-[16px]">contact@acwaba.com</a>
                          </li>
                          <li className="flex items-center gap-2">
                          <div className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] flex items-center justify-center rounded-full bg-white'>
                            <FaPhone className="text-brand_bleu_inter ext-[12px] md:text-[16px]" />
                            </div>
                            <span>
                              +33 6 63 67 31 02<br />
                              +33 6 60 53 04 97
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
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
