import { useNavigate } from "react-router-dom";
import Main from "../ components/Main/Main";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaHome } from "react-icons/fa";
import Logo_acwaba_blanc from "../assets/Logos/Logo_acwaba-blanc.svg";
import facebook from "../assets/socialNetwork/facebook.png";
import lIn from "../assets/socialNetwork/lIn.png";
import youtube from "../assets/socialNetwork/youtube.png";
import { motion } from "framer-motion";
import { navigateTo } from "../../services/utilis";


const About = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen">
            <Main
                getPage={(page) => {
                    if (page === "Accueil") {
                        navigate('/')
                    }
                    if (page === "A propos") {
                        // scrollToSection(aproposRef)
                    }
                    if (page === "Services") {
                        navigate('/service')
                    }
                    if (page === "Tarif") {
                        // scrollToSection(tarifRef)
                        navigate('/')
                    }
                    if (page === "Contact") {
                        navigate('/contact')
                    }
                    if (page === "Ouvrir un compte") {
                        // setOpenConnexionModal(true)
                    }
                }}
                onClickContact={() => navigateTo(navigate, "/contact")} onClickAccueil={() => navigateTo(navigate, "/")} onClickApropos={() => navigateTo(navigate, "/about")} onClickTarif={() => navigateTo(navigate, "/")}
            >
                <div className="bg-gradient-to-t from-[#011E3E] to-[#0E5588] w-full  md:h-[400px] h-[300px]">
                    <div className=" mt-[30px] flex flex-col justify-center relative  border-red-500  text-white h-full text-center   bg-[url('/bgIcon.png')] w-full bg-full bg-right bg-no-repeat">
                        {/* Titre principal */}
                        <h1 className="text-[24px] md:text-[38px] font-bold">
                            A propos
                        </h1>

                        {/* Breadcrumb */}
                        <div className="mt-4 flex justify-center items-center text-sm ">
                            <FaHome className="text-white mr-2" />
                            <a href="/" className="text-white hover:underline">Accueil</a>
                            <span className="mx-2 text-white text-[10px]">{">>"}</span>
                            <span className="text-brand_orange">À propos</span>
                        </div>

                        <div className="flex flex-col items-center mt-[30px]  z-40 ">
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
                    </div>
                </div>
                <div className=" px-[18px] flex flex-col items-center  border-red-600 text-brand_bleu_fonce_500 ">
                    <div className="mb-8 w-full md:w-[900px]">
                        <h2 className="text-[20px] md:text-[32px] text-brand_orange  font-bold mt-[40px]">Notre Entreprise</h2>
                        <p className="mb-4 mt-[20px]">
                            Z&W est une Société par Actions Simplifiée (SAS) domiciliée en France.
                            Nous avons conçu une solution de gestion de trésorerie intuitive,
                            puissante et sécurisée pour permettre aux dirigeants financiers
                            de prendre des décisions éclairées, à tout moment et en toute simplicité.
                        </p>
                        <p>
                            Notre solution offre une plateforme complète pour la gestion des flux
                            de trésorerie, l’automatisation des prévisions financières
                            et la centralisation de la caisse.
                        </p>
                    </div>

                    <div className="mb-8 w-full md:w-[900px]">
                        <h2 className="text-[20px] md:text-[32px] text-brand_orange  font-bold">Mission</h2>
                        <div className="bg-gray-50 p-4 rounded-md mb-4 w-full<">
                            <h3 className="text-brand_bleu_fonce_500 text-[15px] md:text-[20px] font-bold mb-2 surface_bleu">Sécurité et performance</h3>
                            <ul className="list-disc list-inside ml-2">
                                <li>Utiliser les meilleurs domaines sécurisés pour les données de nos clients</li>
                                <li>Améliorer la performance de nos clients par la mise à disposition de tableaux de bord clairs</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                            <h3 className="text-brand_bleu_fonce_500 text-[15px] md:text-[20px] font-bold mb-2">Ergonomie</h3>
                            <ul className="list-disc list-inside ml-2">
                                <li>Assurer une fluidité dans l’utilisation du logiciel</li>
                                <li>Réduire les bugs et garantir la bonne conservation des données</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-[900px]">
                        <h2 className="text-[20px] md:text-[32px] text-brand_orange  font-bold">Vision</h2>
                        <ul className="list-disc list-inside ml-2 bg-gray-50 p-4 rounded-md">
                            <li>Faciliter le quotidien des entreprises</li>
                            <li>
                                Faciliter le pilotage : permettre aux entreprises de suivre
                                en temps réel l’évolution de leurs activités et de leurs stocks
                            </li>
                            <li>Simplifier les tâches et le fonctionnement des différents services</li>
                            <li>Rendre intéressant l’exécution des tâches quotidiennes</li>
                        </ul>
                    </div>
                </div>
                {/* footer */}
                <div className='mt-[20px] w-full  border-red-800'>
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
                                                <li><a onClick={() => navigateTo(navigate, "/")} className="hover:underline text-[14px] md:text-[16px] cursor-pointer">Tarif</a></li>
                                                <li><a onClick={() => navigateTo(navigate, "/contact")} className="hover:underline text-[14px] md:text-[16px] cursor-pointer">Contact</a></li>
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
            </Main>
        </div>
    );
}

export default About;
