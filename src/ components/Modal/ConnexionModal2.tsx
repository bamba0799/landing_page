import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaBuilding, FaUser } from "react-icons/fa";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";


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
        <div onClick={onClose} className={`fixed inset-0 flex justify-center z-[9999999999px] items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            {/* <div  onClick={(e) => e.stopPropagation()} className="flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
                    <div className="relative flex h-24 items-center justify-center bg-gradient-to-b from-blue-900 to-blue-700 rounded-t-lg">
                        <h1 className="text-3xl font-bold text-white">acwaba</h1>
                        <div className="absolute right-4 top-4 flex items-center space-x-2 text-white">
                            <span className="text-sm">1 / 2</span>
                            <div className="flex space-x-1">
                                <span className="h-2 w-2 rounded-full bg-white"></span>
                                <span className="h-2 w-2 rounded-full border border-white"></span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <h2 className="text-center text-lg font-semibold text-gray-800">
                            Commencez dès maintenant
                        </h2>
                        <p className="mt-1 text-center text-sm text-gray-500">
                            Sans aucune carte de crédit - Sans conditions
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full rounded-md border border-gray-300 bg-gray-50 pl-10 pr-3 py-2 focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                                <input
                                    type={"password"}
                                    placeholder="Mot de passe*"
                                    className="w-full rounded-md border border-gray-300 bg-gray-50 pl-10 pr-10 py-2 focus:border-blue-500 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3 text-gray-500"
                                    onClick={() => console.log("showPassword")}
                                >
                                    { <EyeOff size={18} />}
                                </button>
                            </div>

                            <button onClick={handleContinue} className="w-full rounded-full bg-gradient-to-r from-blue-900 to-blue-700 py-2 text-white font-semibold transition hover:opacity-90">
                                Continuer
                            </button>
                        </form>

                        <div className="mt-6 flex items-center justify-center">
                            <div className="h-[1px] w-20 bg-gray-300"></div>
                            <p className="px-3 text-sm text-gray-500">Ou</p>
                            <div className="h-[1px] w-20 bg-gray-300"></div>
                        </div>

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

                        <p className="mt-6 text-center text-sm text-gray-500">
                            Déjà un compte ?{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                                Connectez-vous
                            </a>
                        </p>

                        <p className="mt-2 text-center text-xs text-gray-400">
                            En vous inscrivant, vous acceptez les{" "}
                            <a href="#" className="text-blue-500 hover:underline">
                                Conditions générales d'utilisation
                            </a>
                        </p>
                    </div>
                </div>
            </div> */}
            <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-center bg-gray-100 ">
                <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
                    {/* Header avec le logo et l'indicateur de page */}
                    <div className="relative flex h-24 items-center justify-center bg-gradient-to-b from-blue-900 to-blue-700 rounded-t-lg">
                        <a href="#" className="absolute left-4 top-4 text-white text-sm hover:underline">
                            Retour
                        </a>
                        <h1 className="text-3xl font-bold text-white">acwaba</h1>
                        <div className="absolute right-4 top-4 flex items-center space-x-2 text-white">
                            <span className="text-sm">2 / 2</span>
                            <div className="flex space-x-1">
                                <span className="h-2 w-2 rounded-full border border-white"></span>
                                <span className="h-2 w-2 rounded-full bg-white"></span>
                            </div>
                        </div>
                    </div>

                    {/* Texte d'accueil */}
                    <div className="p-6">
                        <h2 className="text-center text-lg font-semibold text-blue-900">
                            Dites-nous en plus
                        </h2>
                        <p className="mt-1 text-center text-sm text-gray-500">
                            Vous êtes à un pas de commencer votre expérience exceptionnelle
                        </p>

                        {/* Formulaire */}
                        <form  className="mt-6 space-y-4">
                            {/* Nom */}
                            <div className="relative border-b-[1.5px] border-gray-300">
                                <FaUser className="absolute left-3 top-3 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    className="w-full rounded-md border-none border-gray-300 bg-gray-50 pl-10 pr-3 py-2 focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Prénoms */}
                            <div className="relative border-b-[1.5px] border-gray-300">
                                <FaUser className="absolute left-3 top-3 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Prénoms"
                                    className="w-full rounded-md border-none border-gray-300 bg-gray-50 pl-10 pr-3 py-2 focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Nom de l'entreprise */}
                            <div className="relative border-b-[1.5px] border-gray-300">
                                <FaBuilding className="absolute left-3 top-3 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Nom de l’entreprise*"
                                    className="w-full rounded-md border-none border-gray-300 bg-gray-50 pl-10 pr-3 py-2 focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Bouton Commencer */}
                            <button className="w-full rounded-full bg-gradient-to-r from-blue-900 to-blue-700 py-2 text-white font-semibold transition hover:opacity-90">
                                Commencer maintenant
                            </button>
                        </form>

                        {/* Texte en bas */}
                        <p className="mt-4 text-center text-sm text-gray-500">
                            Sans aucune carte de crédit - Sans conditions
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

        </div>
    );
}

export default DeleteModal;
