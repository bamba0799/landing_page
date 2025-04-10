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

import FuseeAnimation from "../assets/Fusee3d.json";
import Lottie from "lottie-react"

import partner1 from "../assets/Logos/logos-partner-01.png";
import partner2 from "../assets/Logos/logos-partner-02.png";
import partner3 from "../assets/Logos/logos-partner-03.png";
import partner4 from "../assets/Logos/logos-partner-04.png";

import Logo_acwaba_blanc from "../assets/Logos/Logo_acwaba-blanc.svg";
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
import { Icon } from '@iconify/react/dist/iconify.js';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import ConnexionModal from '../ components/Modal/ConnexionModal';
import ConnexionModal2 from '../ components/Modal/ConnexionModal2';
import FeatureCardMobile from '../ components/FeatureCardMobile';
import GeneralModal from '../ components/Modal/GeneralModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigateTo } from '../../services/utilis';
import AnimatedSection from '../ components/AnimatedSection';


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
};

function Home() {

  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [tarifButtonId, setTarifButtonId] = useState(0);
  const [openConnexionModal, setOpenConnexionModal] = useState<boolean>(false);
  const [openInscriptionModal2, setOpenInscriptionModal2] = useState<boolean>(false);
  const [openDescriptionModal, setOpenDescriptionModal] = useState<boolean>(false);
  const [openFonctionalityModal, setOpenFonctionalityModal] = useState<boolean>(false);
  const [data, setData] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [titleFonctionality, setTitleFonctionality] = useState<string>("");
  const [bgSize, setBgSize] = useState("120%");
  const [tarifBgSize, setTarifBgSize] = useState("120%");

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [question, setQuestion] = useState(
    [
      { question: "Comment puis-je renouveler mon abonnement ?", answer: "Vous pouvez renouveler votre abonnement via la section Mon Compte." },
      { question: "Ma connexion et mes données sont-elles sécurisées ?", answer: "Oui, nous utilisons des protocoles de sécurité avancés pour protéger vos données." },
      { question: "Puis-je me désabonner à tout moment ?", answer: "Oui, vous pouvez résilier votre abonnement à tout moment dans les paramètres." },
      { question: "Puis-je récupérer les informations saisies ?", answer: "Oui, vous pouvez télécharger vos données depuis votre espace utilisateur." },
    ]
  );

  const handleQuestion = (index: number) => {
    setSelectedIndex(index);
    if (index == 0) {

      setQuestion([
        { question: "Comment puis-je renouveler mon abonnement ?", answer: "Vous pouvez renouveler votre abonnement via la section Mon Compte." },
        { question: "Ma connexion et mes données sont-elles sécurisées ?", answer: "Oui, nous utilisons des protocoles de sécurité avancés pour protéger vos données." },
        { question: "Puis-je me désabonner à tout moment ?", answer: "Oui, vous pouvez résilier votre abonnement à tout moment dans les paramètres." },
        { question: "Puis-je récupérer les informations saisies ?", answer: "Oui, vous pouvez télécharger vos données depuis votre espace utilisateur." },
      ])
    }
    else {
      setQuestion([
        {
          question: "Quelles sont les étapes pour renouveler mon abonnement ?",
          answer: "Vous pouvez renouveler votre abonnement via la section Mon Compte."
        },
        {
          question: "Où puis-je procéder au renouvellement de mon abonnement ?",
          answer: "Le renouvellement est accessible dans la section Mon Compte de votre espace utilisateur."
        },
        {
          question: "Comment effectuer le renouvellement de mon abonnement ?",
          answer: "Rendez-vous dans la section Mon Compte pour renouveler votre abonnement."
        },
        {
          question: "Mes informations et ma connexion sont-elles protégées ?",
          answer: "Oui, nous utilisons des protocoles de sécurité avancés pour protéger vos données."
        },
      ])
    }
  }



  const location = useLocation();
  const currentPage = location.pathname;
  console.log("currentPage", currentPage);



  const accueilRef = useRef<HTMLDivElement>(null);
  const tarifRef = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);
  const partnerScrollRef = useRef<HTMLDivElement>(null);

  const premiumCardRef = useRef<HTMLDivElement>(null);



  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const smartData1 = [
    "1 utilisateurs inclus",
    "2 Utilisateurs max par formule",
    "Utilisateurs suppl - (+5€/mois HT)",
    "Droits et permissions",
    "Rapprochement bancaire",
    "Synchronisation bancaire",
  ]

  const smartData2 = [
    "1 Banques incluses",
    "1 Banques supplémentaires (+7€/mois)",
    "Catégorisation automatisée des transactions",
    "Nombre de sous-catégories",
    "Planification budgétaire",
    "Estimation automatisée de la TVA",
    "Vue tabulaire et graphique du tableau de bord des transactions",
    "Graphiques par catégories",
    "Bases de données fournisseurs & clients (intégration INSEE)",
    "Gestion des dépenses et des recettes",
    "Journal des transactions",
    "Gestion des produits /articles",
    "Bases de données articles et produits",
    "Interface de suivi des factures",
    "Devis et factures",
    "Import/Export de justificatifs comptables",
    "Import/Export Excel des transactions",
    "Centre d’aide et tutoriels vidéos",
    "Support par mail et tchat",


  ]

  const premiumData1 = [
    "Tous les avantages de  Smart",
    "2 utilisateurs inclus",
    "5 Utilisateurs max par formule",
    "2 Banques incluses",
    " Formule de scénario avancées",
    "3 sous-catégories",

    // "2 utilisateurs inclus",
    // "5 Utilisateurs max par formule",
    // "Utilisateurs suppl - (+5€/mois HT)",
    // "Droits et permissions",
    // "Rapprochement bancaire",
    // "Synchronisation bancaire",
  ]

  const premiumData2 = [
    "Option Multi-filiale + Consolidation",
    "Analyse réel vs prévisionnelle",
    "2 Banques supplémentaires (+7€/mois)",
    "4 Scénario inclus par année fiscale",
    "Validations des opérations (double sécurité) en option",
    "Paiement de factures fournisseur",
    "Intégration de fonctionnalités personnalisées - (sur devis)",
    "Support prioritaire"

    // "2 Banques incluses",
    // "2 Banques supplémentaires (+7€/mois)",
    // "Catégorisation automatisée des transactions",
    // "3 sous-catégories",
    // "Option Multi-filiale + Consolidation",
    // "Planification budgétaire",
    // "Analyse réel vs prévisionnelle",
    // "Estimation automatisée de la TVA",
    // "Formule de scénario avancées",
    // "4 Scénario inclus par année fiscale",
    // "Vue tabulaire et graphique du tableau de bord des transactions",
    // "Graphiques par catégories",
    // "Bases de données fournisseurs & clients (intégration INSEE)",
    // "Gestion des dépenses et des recettes",
    // "Validations des opérations (double sécurité) en option",
    // "Journal des transactions",
    // "Gestion des produits /articles",
    // "Bases de données articles et produits",
    // "Interface de suivi des factures",
    // "Devis et factures",
    // "Paiement de factures fournisseur",
    // "Import/Export de justificatifs comptables",
    // "Import/Export Excel des transactions",
    // "Intégration de fonctionnalités personnalisées - (sur devis)",
    // "Centre d’aide et tutoriels vidéos",
    // "Support par mail et tchat",
    // "Support prioritaire",
  ]

  const entrepriseData1 = [
    // "Tous les avantages de Smart et Premium",
    "Mutli-entités",
    "Autorisations - Rôles",
    "Développement spécifique à votre activité",
    "Support prioritaire",


    // "2 utilisateurs inclus",
    // "Utilisateurs max par formule - (illimité)",
    // "Utilisateurs suppl - (+5€/mois HT)",
    // "Droits et permissions",
    // "Rapprochement bancaire",
    // "Synchronisation bancaire",
  ]
  const entrepriseData2 = [
    "sous-catégories - (illimité)",
    // "2 Banques incluses",
    // "2 Banques supplémentaires (+7€/mois) - (inclus)",
    // "Catégorisation automatisée des transactions",
    // "sous-catégories - (illimité)",
    // "Option Multi-filiale + Consolidation",
    // "Planification budgétaire",
    // "Analyse réel vs prévisionnelle",
    // "Estimation automatisée de la TVA",
    // "Formule de scénario avancées",
    // "Scénario inclus par année fiscale - (illimité)",
    // "Vue tabulaire et graphique du tableau de bord des transactions",
    // "Graphiques par catégories",
    // "Bases de données fournisseurs & clients (intégration INSEE)",
    // "Gestion des dépenses et des recettes",
    // "Validations des opérations (double sécurité) en option",
    // "Journal des transactions",
    // "Gestion des produits /articles",
    // "Bases de données articles et produits",
    // "Interface de suivi des factures",
    // "Devis et factures",
    // "Paiement de factures fournisseur",
    // "Import/Export de justificatifs comptables",
    // "Import/Export Excel des transactions",
    // "Intégration de fonctionnalités personnalisées - (sur devis)",
    // "Centre d’aide et tutoriels vidéos",
    // "Support par mail et tchat",
    // "Support prioritaire",
  ]


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
        "Renforcez la sécurité de vos transactions avec des mécanismes de validation avancés et des mesures anti-fraude. Les données Acwaba sont stockées sur un serveur dédié et sécurisé selon les normes standards, hébergé sur le cloud Microsoft Azure.",
    },
    {
      image: feature6,
      title: "Multi-entités",
      description: "Structurez vos entités et suivez l'évolution de votre trésorerie grâce à une vue consolidée et une approche en comptabilité analytique. Avec les statistiques avancées d’Acwaba, identifiez facilement les entités les plus rentables ou celles générant les dépenses les plus importantes."
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

  const handleTarifButton = (id: number) => {
    setTarifButtonId(id);
  }

  useEffect(() => {
    localStorage.setItem('currentRoute', "/");
  }, []);

  // useEffect(() => {
  //   scrollToSection(tarifRef)
  // },[])


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBgSize("150%"); // Mobile
        setTarifBgSize("tarifBgSize%")
      } else if (window.innerWidth < 1024) {
        setBgSize("90%"); // Tablette
        setTarifBgSize("200%")
      } else {
        setBgSize("90%");
        setTarifBgSize("200%")
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Appliquer immédiatement la bonne taille

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (partnerScrollRef.current) {
        const scrollContainer = partnerScrollRef.current;

        // Vérifie si on est à la fin du scroll
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' }); // Revient au début
        } else {
          scrollContainer.scrollBy({ left: 20, behavior: 'smooth' }); // Scroll vers la droite
        }
      }
    }, 1000); // Défilement toutes les 3 secondes

    return () => clearInterval(scrollInterval); // Nettoyage du setInterval au démontage du composant
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) { // Seulement pour les mobiles
      const container = premiumCardRef.current?.parentElement; // Récupère le parent (scroll container)

      if (container) {
        const premiumCard = premiumCardRef.current;
        const containerWidth = container.clientWidth;
        const premiumCardPosition = premiumCard.offsetLeft; // Position de la carte Premium

        container.scrollTo({
          left: premiumCardPosition - containerWidth / 2 + premiumCard.clientWidth / 2, // Centre la carte
          behavior: "smooth"
        });
      }
    }
  }, []);




  return (
    <div className="bg-white min-h-screen z-[100px]">
      <Main
        getPage={(page) => {
          if (page === "Accueil") {
            if (currentPage === "/") {
              scrollToSection(accueilRef)
            } else {
              navigate('/')
            }
          }
          if (page === "A propos") {
            navigate('/about')
          }
          if (page === "Services") {
            navigate('/service')
          }
          if (page === "Tarif") {
            scrollToSection(tarifRef)
          }
          if (page === "Contact") {
            navigate('/contact')
          }
          if (page === "Ouvrir un compte") {
            setOpenConnexionModal(true)
          }

        }}
        onClickContact={() => navigateTo(navigate, "/contact")} onClickAccueil={() => scrollToSection(accueilRef)} onClickApropos={() => navigateTo(navigate, "/about")} onClickTarif={() => scrollToSection(tarifRef)}>
        <div className="mt-[30px]  flex flex-col justify-between items-center">
          {/* Section principale */}
          <section ref={accueilRef} className=" w-full relative bg-gradient-to-b from-[#011E3E] to-[#0E5588] text-white ">
            <div className=" border-orange-800 mx-[20px] md:mx-[50px] mt-[50px] md:mt-[100px]  flex flex-col md:flex-row items-center md:justify-between ">
              {/* Image principale */}
              <div className="w-full  border-red-800 flex justify-center md:hidden mb-6">
                <img
                  src={homeImage1}
                  alt="Illustration de la page d'accueil"
                  className=" w-full md:w-2/3 object-cover"
                />
              </div>
              <div className=' md:w-[45%]'>
                {/* Texte principal */}
                <h1 className=" font-extrabold text-[24px] md:text-[38px]  leading-tight mb-4">
                  Le pilotage de votre activité n'a jamais été aussi simple
                </h1>
                <p className=" font-[500px] normal   text-[12px] md:text-[20px] mb-6">
                  Facturez vos clients, et suivez votre trésorerie aisément,
                  tout en restant focus sur votre activité
                </p>
                {/* Boutons */}
                <div className="w-full flex flex-col  md:flex-row  items-center space-y-4 md:space-y-0 md:space-x-3">
                  <div className={`  ${isMobile ? "w-[80%]" : ""}  flex flex-col items-center`}>
                    <SecondButton isWithFull={isMobile} onClick={() => setOpenConnexionModal(true)} shadow=' shadow-custom' text={"Ouvrir un compte"} />
                  </div>
                  <div className={` ${isMobile ? "w-[80%]" : ""}   flex flex-col items-center`}>
                    <SecondButton isWithFull={isMobile} bgColor='bg-neutral_blanc' textColor='text-brand_bleu_inter' text={"Tester gratuitement"} />
                  </div>
                </div>
                {/* Flèche vers le bas */}

              </div>
              <div className="  w-full md:w-[50%] hidden md:flex justify-center  ">
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

            <div className="absolute z-[999px] -bottom-[50px] left-0 w-full h-[100px] bg-white border-t-[12px] border-t-[#F76E25]  transform -skew-y-[6deg] lg:-skew-y-[2deg] origin-bottom"></div>
          </section>
          {/* first */}
          <div className=' z-10 md:mt-[30px] w-full px-[20px] md:px-[50px]  border-red-600'>
            <div className=' w-full flex flex-col text-center justify-center'>
              <p className='text-brand_orange text-[16px] md:text-[32px] font-bold'>Nos Fonctionnalités exceptionnelles</p>
              <p className='font-extrabold text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] '>Suivez la rentabilité de votre activité en temps réels</p>
            </div>
          </div>
          {/* feature md */}
          <div className=" hidden  md:mt-[20px] md:grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 mx-[20px] md:mx-[50px] ">
            <FeatureCard
              image={feature1}
              title="Analyse de données avec IA"
              description="Notre module “IA analytics” vous offre en utilisant
l’intelligence artificiel des graphes et un tableau de
bord dynamique et intuitifs pour vous permettre de
comprendre et suivre vos statistiques en temps réel"
            />
            <FeatureCard
              image={feature2}
              title="Devis & Facturation"
              description="Editer des devis et des factures, suivez le recouvrement de vos factures, relancer automatiquement vos clients."
            />
            <FeatureCard
              image={feature3}
              title="Trésorerie"
              description="Suivez votre tresorerie à la transaction près. Analyser
                vos postes de dépenses et vos recettes en un seul clic.
  Simplifiez également vos opérations grâce à la
gestion intuitive des avances de caisse et des stocks
de marchandises."
            />
            <FeatureCard
              image={feature4}
              title="Intégration Bancaire"
              description="Définissez vos entités et suivez la facturation et la trésorerie de vos différentes entités. Vous pouvez, grâce aux statistiques d’acwaba, visualiser les entités les plus rentables ou les plus chères."
            />
            <FeatureCard
              image={feature5}
              title="Sécurité"
              description={"Renforcez la sécurité de vos transactions avec des mécanismes de validation avancés et des mesures anti-fraude. Les données Acwaba sont stockées sur un serveur dédié et sécurisé selon les normes standards."}

            />
            <FeatureCard
              image={feature6}
              title="Multi-entités"
              description="Structurez vos entités et suivez l'évolution de votre
trésorerie grâce à une vue consolidée et une approche
en comptabilité analytique."
            />
          </div>
          {/* feature mobile */}
          <div className="mt-[10px] md:mt-[20px] grid grid-cols-2 gap-4 mx-[20px]  md:hidden">
            {features.map((_item) => (
               <AnimatedSection delay={0.2}>
              <FeatureCardMobile
                onClick={() => { setDescription(_item.description); setTitle(_item.title); setOpenDescriptionModal(true) }}
                image={_item.image}
                title={_item.title}
                description={_item.description}
              />
              </AnimatedSection>
            ))}


          </div>
          {/* second */}
          <AnimatedSection delay={0.2}>
            <div style={{ backgroundSize: bgSize }} className=" border-red-800  mt-[20px] px-[20px] md:px-[50px] bg-[#FAFAFA] relative h-[300px] lg:h-[400px] flex flex-col justify-center w-full  bg-[url('/bgIcon.png')] bg-full bg-center bg-no-repeat">
              {/* Texte (doit être au-dessus du cercle) */}
              <div className=" z-10 w-full  border-red-800 flex flex-col ">

                <div className='mt-[20px] z-10 md:mt-[100px]  w-full px-[20px] md:hidden  border-red-600'>
                  <div className=' w-full flex flex-col text-center justify-center'>
                    <p className='  text-brand_orange text-[16px] md:text-[24px] font-bold'>Notre espace analytique dynamique</p>
                    <p className=' text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] font-extrabold'>Suivez la rentabilité de votre activité en temps réels</p>
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
                  <div className='mt-[20px] z-10  w-full px-[20px] hidden md:flex  border-red-600 md:w-[38%] lg:w-[35%]'>
                    <div className=' w-full flex flex-col text-starts justify-center'>
                      <p className='text-brand_orange text-[16px] md:text-[24px] font-bold'>Notre espace analytique dynamique</p>
                      <p className=' text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] font-extrabold'>Suivez la rentabilité de votre activité en temps réels</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* third */}
          <AnimatedSection delay={0.2}>
            <div className='px-[30px] mt-[30px] md:mt-[20px]  border-blue-600 w-full flex flex-col md:flex-row justify-between md:px-[20px] lg:px-[130px]'>
              <div className='w-full flex flex-col items-center justify-between md:w-[40%]   border-red-800'>
                <div className='mt-[20px] z-10 md:mt-[60px] lg:mt-[10px] w-full px-[20px] md:px-[50px]  border-red-600'>
                  <div className=' w-full flex flex-col text-center md:text-start md:w-[290px] lg:w-[350px] justify-center'>
                    <p className='text-brand_orange text-[16px] md:text-[24px] font-bold'>Nos cibles</p>
                    <p className=' text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] font-extrabold'>Découvrez nos cibles pour qui Acwaba est adapté</p>
                  </div>
                </div>
                <div>
                  <img src={targetBgImage} alt="" className='opacity-5 hidden md:flex' />
                </div>
              </div>
              <div className='mt-[10px] md:mt-[50px] lg:mt-[0px] border-red-400 flex flex-col items-center '>
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
          </AnimatedSection>
          {/* fourth les tarifs */}

          <div style={{ backgroundSize: tarifBgSize }} ref={tarifRef} className="bg-[#FAFAFA] overflow-hidden relative  border-red-600 mt-[50px] w-full flex flex-col items-center bg-[url('/bgIcon.png')] bg-full bg-center bg-no-repeat">
            {/* button */}
            <AnimatedSection delay={0.2}>
              <div className='mt-[20px] z-10  w-full px-[20px]   border-red-600 flex flex-row justify-center'>
                <div className=' w-full md:w-[800px] flex flex-col text-center justify-center'>
                  <p className='text-brand_orange text-[16px] md:text-[32px] font-bold'>Nos tarifs</p>
                  <p className='font-bold text-brand_bleu_fonce_500 mt-[7px] text-[20px] md:text-[32px] font-poppins'>Choisissez l’offre qui vous correspond</p>
                  <p className='font-extrabold text-[12px] md:text-[14px] text-neutral_gris'>Comparer les fonctionnalités et sélectionner la meilleure offre pour votre business.
                    Acwaba propose plusieurs offres qui s’adaptent à tout type de d’entreprise.</p>
                </div>
              </div>
            </AnimatedSection>
            <div className="h-[40px] w-[80%] z-10 md:w-[400px] rounded-full bg-surface_bleu mt-[20px] flex justify-around">
              {tarifButtonData.map((_item, index) => (
                <button
                  key={index}
                  onClick={() => handleTarifButton(_item.id)}
                  className={`w-[50%] text-[14px] md:text-[16px] text-brand_bleu_inter h-full rounded-full ${index === tarifButtonId ? "bg-brand_orange text-white" : "bg-transparent"
                    }`}
                >
                  {_item.title}
                </button>
              ))}
            </div>
            {/* Conteneur scrollable */}

            <div className="mt-[20px] pb-[10px]  border-blue-700 w-full  px-[20px] pt-10  z-10 overflow-x-scroll lg:overflow-hidden flex space-x-5 lg:justify-center scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
              <div className={`flex-shrink-0 w-[90%]  md:w-[438px] h-[450px]`}>
                <AnimatedSection delay={0.2}>
                  <PricingCard
                    onClick={() => setOpenConnexionModal(true)}
                    seeOver={() => { setOpenFonctionalityModal(true); setTitleFonctionality("Smart"); setData(smartData2) }}
                    title='Smart'
                    price={tarifButtonId == 0 ? 16 : 176}
                    step={tarifButtonId == 0 ? "mois" : "année"}
                    description='Adapté aux auto-entrepreneurs & TPE'
                    data={smartData1}
                  />
                </AnimatedSection>
              </div>
              <div ref={premiumCardRef} className={`flex-shrink-0 w-[90%]  md:w-[438px] h-[450px]`}>
                <AnimatedSection delay={0.2}>
                  <PricingCard
                    onClick={() => setOpenConnexionModal(true)}
                    seeOver={() => { setOpenFonctionalityModal(true); setTitleFonctionality("Premium"); setData(premiumData2) }}
                    title='Premium'
                    price={tarifButtonId == 0 ? 25 : 275}
                    step={tarifButtonId == 0 ? "mois" : "année"}
                    description='Adapté aux auto-entrepreneurs & TPE'
                    data={premiumData1}
                  />
                </AnimatedSection>
              </div>
              <div className={`flex-shrink-0 w-[90%]  md:w-[438px] h-[450px]`}>

                <EnterpriseCard
                  onClick={() => navigate("/contact")}
                  seeOver={() => { setOpenFonctionalityModal(true); setTitleFonctionality("Entreprise"); setData(entrepriseData2) }}
                  data={entrepriseData1}
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
                <a className='text-[12px]  md:text-[16px] font-bold text-brand_bleu_fonce_500'>Voir tous les avantages</a>
                <Icon icon="weui:arrow-filled" className="text-brand_bleu_fonce_500 w-5 h-5" />
              </div>
              <div className='w-[43%]  border-red-800'>
                <img src={Arrowright} alt="" className=' object-cover w-full' />
              </div>
            </div>
          </div>
          {/* fifth */}

          <div className="bg-white w-full  border-blue-600 overflow-hidden">
            <div className='  flex flex-col md:flex-row mt-[20px] z-10 md:mt-[10px] w-full   px-[20px] md:ml-[30px] lg:ml-[60px]  border-red-600'>
              <div className=' w-full md:w-[50%]  flex flex-col text-center md:text-start  justify-center'>
                <p className='text-brand_orange text-[16px] md:text-[32px] font-bold'>Nos clients</p>
                <p className='font-extrabold text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[32px] font-poppins'>Observez ce que disent <br /> ceux qui ont testé Acwaba</p>
              </div>
              <div className='w-full md:w-[50%]   border-black  md:flex  overflow-hidden md:mb-[30px]'>
                <div ref={partnerScrollRef} className='  border-gray-900 md:mx-[130px] scroll-smooth my-[20px] flex flex-row md:justify-center space-x-[20px] md:space-x-[40px] overflow-x-scroll md:overflow-hidden'>
                  {/* <div className='w-[100px]'></div> */}
                  <img src={partner1} alt="partner1" className="border-[1.5px]  md:ml-[0px] border-gray-300 rounded-[10px] w-[100px] h-[100px] " />
                  <img src={partner2} alt="partner1" className="border-[1.5px]  border-gray-300 rounded-[10px] w-[100px] h-[100px]" />
                  <img src={partner3} alt="partner1" className="border-[1.5px]  border-gray-300 rounded-[10px] w-[100px] h-[100px]" />
                  <img src={partner4} alt="partner1" className="border-[1.5px]  border-gray-300 rounded-[10px] w-[100px] h-[100px]" />


                  <img src={partner1} alt="partner1" className="border-[1.5px]  md:ml-[0px] border-gray-300 rounded-[10px] w-[100px] h-[100px] " />
                  <img src={partner2} alt="partner1" className="border-[1.5px]  border-gray-300 rounded-[10px] w-[100px] h-[100px]" />
                  <img src={partner3} alt="partner1" className="border-[1.5px]  border-gray-300 rounded-[10px] w-[100px] h-[100px]" />
                  <img src={partner4} alt="partner1" className="border-[1.5px]  border-gray-300 rounded-[10px] w-[100px] h-[100px]" />
                  <div className='w-[30px]'></div>


                </div>
              </div>
            </div>
            <div className=' hidden md:flex relative w-full '>
              <div className=" absolute -top-10 right-0 flex items-start justify-start px-[20px] pt-[20px]  w-[400px] lg:w-[800px] h-[368px] bg-surface_orange rounded-md">
                <button onClick={scrollLeft} className="w-[60px] h-[60px] flex items-center justify-center rounded-full  border-orange-400 bg-white text-orange-500 hover:bg-brand_orange hover:text-white">
                  <Icon icon="heroicons:arrow-left-16-solid" className="w-5 h-5" />
                </button>
                <button onClick={scrollRight} className="w-[60px] h-[60px]  ml-[20px] flex items-center justify-center rounded-full  border-orange-400 bg-white text-orange-500 hover:bg-brand_orange hover:text-white">
                  <Icon icon="heroicons:arrow-right-16-solid" className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="relative  mx-auto z-20">
              <div ref={scrollRef} className=" border-red-700 pb-[20px] flex space-x-6 overflow-x-auto scrollbar-hide mt-[30px] md:mt-[50px]">
                {testimonials.map((testimonial: any, index: number, self: any[]) => (

                  <div
                    key={testimonial.id}
                    className={`bg-white rounded-[16px] ${index == 0 ? "ml-[20px] md:ml-[20px] lg:ml-[60px]" : ""}  ${(index + 1) == self.length ? "mr-[20px] md:mr-[60px]" : ""} shadow-md shadow-black/30 p-6 flex-shrink-0 w-[85%] md:w-[423px] h-[314px] flex flex-col justify-between  border-red-700 pb-[40px]`}
                  >
                    <AnimatedSection delay={0.2}>
                      <p className=" text-neutral_gris text-[14px] mb-4">{testimonial.text}</p>
                      <div className="flex items-center space-x-3">
                        <div className=" w-[60px] md:w-[95px]  h-[60px] md:h-[95px] bg-gray-200 rounded-full"></div>
                        <div>
                          <p className="font-bold text-brand_bleu_inter text-[14px]">
                            {testimonial.name}
                          </p>
                          <p className="text-neutral_gris text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>

                ))}
                <div className='w-[20px] md:w-[60px]'></div>
              </div>
            </div>
          </div>

          {/* Sixth */}
          <div className="mt-[20px] w-full z-20  border-blue-500">
            <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 bg-cover bg-center  shadow-lg"
              style={{ backgroundImage: `url(${questionbg})` }}
            >
              {/* Section FAQ */}

              <div className="flex flex-col justify-between bg-white  border-red-600 bg-opacity-90 w-[350px] pt-[20px] md:w-[544px]  rounded-[16px] px-[20px] md:px-[24px] md:ml-auto">
                <AnimatedSection delay={0.2}>
                  <div className='mt-[20px] md:mt-[30px]'>
                    <p className="text-brand_orange font-bold text-[16px] md:text-[24px] text-center md:text-start">FAQ</p>
                    <h2 className="text-brand_bleu_fonce_500 font-extrabold text-[20px] md:text-[32px] mb-[12px] text-center md:text-start">
                      Souhaitez-vous nous poser une question ?
                    </h2>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                      {question.map((item, index) => (
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
                  <div className="flex pt-[50px] md:pt-[80px] justify-center">
                    {["Questions Fonctionnelles", "Questions Support"].map((item, index) => (
                      <button onClick={() => handleQuestion(index)} className={`w-[232px] text-[12px] md:text-[14px] py-2 ${selectedIndex == index ? " bg-gradient-to-b from-[#011E3E] to-[#0E5588] text-white" : "bg-transparent border-[1.4px] border-brand_bleu_inter text-brand_bleu_inter"}  font-medium h-[60px] rounded-t-[16px] hover:bt-bratext-brand_bleu_inter`}>
                        {item}
                      </button>
                    ))
                    }
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
          {/* seventh */}
          <div className='mt-[20px] w-full  md:h-[500px]  border-red-800'>
            <div className="bg-white w-full pt-[10px] px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
              {/* Mobile: une seule fusée */}
              <AnimatedSection delay={0.2}>
                <div className="md:hidden">
                  <Lottie animationData={FuseeAnimation} className="w-32 h-32 transform rotate-[25deg]" />
                </div>
              </AnimatedSection>
              {/* Texte */}

              <div className="md:w-1/2 text-center md:text-left mt-[10px] md:mt-0  border-black flex flex-col items-center md:items-start">
                <AnimatedSection delay={0.2}>
                  <p className="text-brand_orange text-[16px] md:text-[32px] font-bold">
                    Prêt à embarquer avec Acwaba ?
                  </p>
                  <h2 className="font-bold text-brand_bleu_fonce_500 mt-[7px] md:mt-[20px] text-[16px] md:text-[30px] leading-[16px] md:leading-[40px] ">
                    Gagnez du temps dans <br /> votre facturation et <br /> la gestion de <br />
                    votre trésorerie.
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <SecondButton className='mt-[10px]' onClick={() => setOpenConnexionModal(true)} shadow=' shadow-custom' text={"Ouvrir un compte"} />
                </AnimatedSection>
              </div>

              {/* Image */}
              <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                {/* Web: grille de fusées */}
                <div className="hidden md:flex ">
                  {/* <img src={Fusee3d} className='transform rotate-[25deg] md:w-[400px] md:h-[400px]' /> */}
                  <Lottie animationData={FuseeAnimation} className="transform rotate-[25deg] md:w-[400px] md:h-[400px]" />
                </div>
              </div>
            </div>

          </div>

          {/* footer */}
          <div ref={contact} className='mt-[20px] w-full  border-red-800'>
            <footer className="w-ful">
              <div className="relative flex flex-col md:flex-row ">
                {/* 1 */}
                <div className="bg-gradient-to-r  from-[#011E3E] to-[#0E5588] text-white p-8 w-full md:w-[45%]">
                  <div className="  border-red-700  flex flex-col justify-between space-y-[10px] items-start">
                    {/* Logo */}
                    <img src={Logo_acwaba_blanc} alt="Acwaba" className=" absolute left-6  top-0 w-[120px] h-[120px]  " />

                    {/* Subscription Form */}
                    <div className="flex md:justify-start md:space-x-5 w-full pt-[50px]">
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
                          <li><a onClick={() => navigateTo(navigate, "/")} className="hover:underline text-[14px] md:text-[16px] cursor-pointer">Accueil</a></li>
                          <li><a onClick={() => navigateTo(navigate, "/about")} className="hover:underline text-[14px] md:text-[16px] cursor-pointer">À propos</a></li>
                          <li><a onClick={() => scrollToSection(tarifRef)} className="hover:underline text-[14px] md:text-[16px] cursor-pointer">Tarif</a></li>
                          <li><a onClick={() => navigateTo(navigate, "/contact")} className="hover:underline text-[14px] md:text-[16px] cursor-pointer">Contact</a></li>
                          <li><a onClick={() => navigateTo(navigate, "/service")} className="hover:underline text-[14px] md:text-[16px] cursor-pointer">Services</a></li>
                          <li><a onClick={() => navigate("/condition-generale")} className="hover:underline text-[14px] md:text-[16px] cursor-pointer">Conditions générales</a></li>
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
                            <span className='ext-[12px] md:text-[16px] text-[14px]'>25 Rue de Ponthieu<br />75008, Paris<br />France</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] flex items-center justify-center rounded-full bg-white'>
                              <FaEnvelope className="text-brand_bleu_inter" />
                            </div>
                            <a href="mailto:contact@acwaba.com" className="hover:underline ext-[12px] md:text-[16px] text-[14px]">contact@acwaba.com</a>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] flex items-center justify-center rounded-full bg-white'>
                              <FaPhone className="text-brand_bleu_inter ext-[12px] md:text-[16px]" />
                            </div>
                            <span className='text-[14px] md:text-[16px]'>
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
          <div className=' border-red-700  bg-white rounded-[10px]'>
            <div className='h-[42px] bg-gradient-to-b from-[#011E3E] to-[#0E5588] rounded-t-[10px] flex items-center justify-center text-white'>
              {title}
            </div>
            <div className=' text-center px-4 py-2 text-brand_bleu_inter text-[14px]'>
              {description}
            </div>
          </div>
        </GeneralModal>
        <GeneralModal open={openFonctionalityModal} onClose={() => setOpenFonctionalityModal(false)}>
          <div className="bg-white border-red-600 overflow-hidden  w-[600px] max-h-[80vh] rounded-[10px]">
            <div className='h-[42px] md:h-[50px] bg-gradient-to-b from-[#011E3E] to-[#0E5588] rounded-t-[10px] flex items-center justify-center text-white'>
              {titleFonctionality}
            </div>
            <div className='p-4 overflow-y-scroll max-h-[80vh]'>
              <ul className="px-[20px] py-4 space-y-3">
                {data.map((feature, index, self: any) => (
                  <li key={index} className={`flex items-center text-gray-700 ${self.length == (index + 1) ? "pb-20" : "pb-0"}`}>
                    <Icon
                      icon="mdi:check-circle-outline"
                      className="w-5 h-5 text-brand_orange flex-shrink-0"
                    />
                    <span className="text-[14px] text-brand_bleu_inter ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </GeneralModal>
        <ConnexionModal isSuivant={((val) => setOpenInscriptionModal2(val))} deleteAction={() => console.log("sss")} cancelAction={() => { setOpenConnexionModal(false) }} text='Etes vous sur de bien effacer?' open={openConnexionModal} onClose={() => setOpenConnexionModal(false)} />
        <ConnexionModal2 isSuivant={((val) => setOpenInscriptionModal2(val))} deleteAction={() => console.log("sss")} cancelAction={() => { setOpenConnexionModal(false) }} text='Etes vous sur de bien effacer?' open={openInscriptionModal2} onClose={() => setOpenConnexionModal(false)} />
      </Main>
    </div>
  );
}

export default Home;
