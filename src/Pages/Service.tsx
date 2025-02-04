import Main from '../ components/Main/Main';
import { motion } from 'framer-motion';
import { FaEnvelope, FaHome, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import ServiceCard from '../ components/ServiceCard';
const Service = () => {
    return (
        <div className="bg-white min-h-screen">
            <Main>
                <div className='mt-[30px] flex flex-col justify-between items-center'>

                    <div className="relative bg-gradient-to-b from-blue-700 to-blue-900 text-white py-28 text-center w-full">
                        {/* Titre principal */}
                        <h1 className="text-3xl font-bold">
                            Nos Services et <span className="text-blue-400">Projets</span>
                        </h1>

                        {/* Breadcrumb */}
                        <div className="mt-4 flex justify-center items-center text-sm">
                            <FaHome className="text-white mr-2" />
                            <a href="/" className="text-white hover:underline">Accueil</a>
                            <span className="mx-2 text-orange-400">›</span>
                            <span className="text-orange-400">Services</span>
                        </div>

                        {/* Flèche animée */}
                        <motion.div
                            className="absolute left-1/2 transform -translate-x-1/2 mt-10"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75L12 19.5l-7.5-6.75" />
                            </svg>
                        </motion.div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                        <ServiceCard
                            imageSrc={'../assets/bureaucrate.jpg'}
                            title="Presentation Services 1"
                            categories={["Digital", "Business"]}
                        />
                              <ServiceCard
                            imageSrc={'../assets/bureaucrate.jpg'}
                            title="Presentation Services 1"
                            categories={["Digital", "Business"]}
                        />
                              <ServiceCard
                            imageSrc={'../assets/bureaucrate.jpg'}
                            title="Presentation Services 1"
                            categories={["Digital", "Business"]}
                        />
                              <ServiceCard
                            imageSrc={'../assets/bureaucrate.jpg'}
                            title="Presentation Services 1"
                            categories={["Digital", "Business"]}
                        />
                              <ServiceCard
                            imageSrc={'../assets/bureaucrate.jpg'}
                            title="Presentation Services 1"
                            categories={["Digital", "Business"]}
                        />
                              <ServiceCard
                            imageSrc={'../assets/bureaucrate.jpg'}
                            title="Presentation Services 1"
                            categories={["Digital", "Business"]}
                        />


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
                                    <div className="bg-[#BFDBFE] overflow-hidden relative border border-red-600   flex flex-col items-cent w-full md:w-[50%]">
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
            </Main>
        </div>
    );
}

export default Service;
