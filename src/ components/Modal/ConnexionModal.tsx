import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import logo1 from "../../assets/logo1.png";



type DeleteModalProps = {
    open: boolean;
    onClose: () => void;
    deleteAction: () => any;
    cancelAction: () => any;
    text: string;
    isSuivant?: (value: boolean) => void; 
    
}

const DeleteModal: React.FC<DeleteModalProps> = ({ open, isSuivant, onClose, deleteAction, cancelAction, text }) => {

        const handleContinue = () => {
            if (isSuivant) {
                isSuivant(true); 
            }
            onClose(); 
        };

    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center z-40 items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div  onClick={(e) => e.stopPropagation()} className="flex flex-col rounded-lg bg-white border border-red-800  w-[90%] md:w-[620px] rounded-t-[20px] items-center justify-center">
                    {/* Header avec le logo et l'indicateur de page */}
                    <div className="relative  flex h-24 items-center w-full rounded-t-lg justify-center bg-gradient-to-b from-[#011E3E] to-[#0E5588]">
                    <img className="object-fill  w-[180px] h-[55px]" src={logo1} alt="" />
                        <div className="absolute right-4 bottom-2 flex flex-col  items-center text-white">
                            <span className="text-[10px]">1 / 2</span>
                            <div className="flex space-x-1">
                                <span className="h-[10px] w-[10px] rounded-full bg-blue-400"></span>
                                <span className="h-[10px] w-[10px] rounded-full  bg-white"></span>
                            </div>
                        </div>
                    </div>

                    {/* Texte d'accueil */}
                    <div className="p-6">
                        <p className="text-center text-[20px] font-semibold text-brand_bleu_inter">
                            Commencez dès maintenant
                        </p>
                        <p className="mt-1 text-center text-sm text-gray-500">
                            Sans aucune carte de crédit - Sans conditions
                        </p>

                        {/* Formulaire */}
                        <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                            {/* Email */}
                            <div className="relative border-b-[2px] border-[#9CA2A9]">
                              <Icon icon="mingcute:mail-fill" className="absolute left-3 top-3 text-[#9CA2A9]" />
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full border-none  bg-transparent pl-10 pr-3 py-2 focus:border-blue-500 focus:outline-none"

                                />
                            </div>

                            {/* Mot de passe */}
                            <div className="relative border-b-[2px] border-[#9CA2A9]">
                                <Lock className="absolute left-3 top-3 text-[#9CA2A9]" size={18} />
                                <input
                                    type={"password"}
                                    placeholder="Mot de passe*"
                                    className="w-full rounded-md border-none pl-10 pr-10 py-2 focus:border-blue-500 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3 text-gray-500"
                                    onClick={() => console.log("showPassword")}
                                >
                                    {<EyeOff size={18} />}
                                </button>
                            </div>

                            {/* Bouton Continuer */}
                            <button onClick={handleContinue} className="w-full rounded-full bg-gradient-to-r from-blue-900 to-blue-700 py-2 text-white font-semibold transition hover:opacity-90">
                                Continuer
                            </button>
                        </form>

                        {/* Ligne "Ou" */}
                        <div className="mt-6 flex items-center justify-center">
                            <div className="h-[1px] w-20 bg-gray-300"></div>
                            <p className="px-3 text-sm text-gray-500">Ou</p>
                            <div className="h-[1px] w-20 bg-gray-300"></div>
                        </div>

                        {/* Connexion Google et Apple */}
                        <div className="mt-4 space-y-3">
                            <button className="flex w-full items-center justify-center space-x-2 rounded-full border border-gray-300 py-2 text-gray-700 transition hover:bg-gray-100">
                                <FcGoogle size={20} />
                                <span>Continuer avec Google</span>
                            </button>

                            <button className="flex w-full items-center justify-center space-x-2 rounded-full border border-gray-300 py-2 text-gray-700 transition hover:bg-gray-100">
                                <FaApple size={20} />
                                <span>Continuer avec Apple</span>
                            </button>
                        </div>

                        {/* Lien Connexion */}
                        <p className="mt-6 text-center text-sm text-gray-500">
                            Déjà un compte ?{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                                Connectez-vous
                            </a>
                        </p>

                        {/* Conditions */}
                        <p className="mt-2 text-center text-xs text-gray-400">
                            En vous inscrivant, vous acceptez les{" "}
                            <a href="#" className="text-blue-500 hover:underline">
                                Conditions générales d'utilisation
                            </a>
                        </p>
                    </div>
                </div>


        </div>
    );
}

export default DeleteModal;
