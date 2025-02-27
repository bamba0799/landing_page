import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import logo1 from "../../assets/logo1.png";
import ConnexionInput from '../Input/ConnexionInput';

type DeleteModalProps = {
    open: boolean;
    onClose: () => void;
    deleteAction: () => any;
    cancelAction: () => any;
    text: string;
    isSuivant?: (value: boolean) => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ open, isSuivant, onClose, deleteAction, cancelAction, text }) => {
    const [isFirstStep, setIsFirstStep] = React.useState(true);

    const handleContinue = () => {
        setIsFirstStep(false);
    };



    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center z-40 items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            {isFirstStep ?
                <div onClick={(e) => e.stopPropagation()} className="flex flex-col  rounded-[16px] bg-white  border-red-800  w-[90%] md:w-[520px] h-[630px] md:h-[600px] rounded-t-[20px] items-center">
                    {/* Header avec le logo et l'indicateur de page */}
                    <div className="relative  flex h-[90px] md:h-[100px] items-center w-full  rounded-t-[16px] justify-center bg-gradient-to-b from-[#011E3E] to-[#0E5588]">
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
                    <div className=" flex flex-col items-center mx-[20px]  mt-[20px]">
                        <p className="text-center text-[20px] font-semibold text-brand_bleu_inter">
                            Commencez dès maintenant
                        </p>
                        <p className="mt-1 text-center text-sm text-gray-500">
                            Sans aucune carte de crédit - Sans conditions
                        </p>

                        {/* Formulaire */}
                        <form onSubmit={(e) => e.preventDefault()} className="mt-[20px] border-red-800 space-y-4">
                            {/* Email */}
                            <ConnexionInput isPassword={false} icon={'mingcute:mail-fill'} placeholder='Email' />

                            {/* Mot de passe */}
                            <ConnexionInput isPassword={true} icon={'si:lock-alt-line'} placeholder='Mot de passe' />
                            <ConnexionInput isPassword={true} icon={'si:lock-alt-line'} placeholder='Confirmez mot de passe' />

                            {/* Bouton Continuer */}

                        </form>
                        <button onClick={handleContinue} className="mt-[24px] w-[250px] md:w-[340px] rounded-full bg-gradient-to-r h-[44px] from-[#011E3E] to-[#0E5588] text-white font-semibold transition hover:opacity-90">
                            Continuer
                        </button>

                        {/* Ligne "Ou" */}
                        <div className="mt-6 flex items-center justify-center">
                            <div className="h-[1px] w-[100px] md:w-[145px] bg-gray-300"></div>
                            <p className="px-3 text-sm text-gray-500">Ou</p>
                            <div className="h-[1px] w-[100px] md:w-[145px] bg-gray-300"></div>
                        </div>

                        {/* Connexion Google et Apple */}
                        <div className="mt-4 space-y-3">
                            <button className="relative flex w-[250px] md:w-[340px] items-center justify-center space-x-2 rounded-full border-[0.5px] border-brand_bleu_inter py-2 text-gray-700 ">
                                <div className='absolute left-[10px]'>
                                    <FcGoogle size={20} />
                                </div>
                                <span className='text-[16px] text-brand_bleu_inter'>Continuer avec Google</span>
                            </button>

                        </div>

                        {/* Lien Connexion */}
                        <p className="mt-6 text-center text-sm text-brand_bleu_fonce_500 text-[16px]">
                            Déjà un compte ?{" "}
                            <a href="#" className="text-[#269AD2] hover:underline">
                                Connectez-vous
                            </a>
                        </p>

                        {/* Conditions */}
                        <p className="mt-2 text-center text-xs text-[#0F5689]">
                            En vous inscrivant, vous acceptez les{" "}
                            <a href="#" className="text-[#269AD2] hover:underline">
                                Conditions générales d'utilisation
                            </a>
                        </p>
                    </div>
                </div>
                :
                <div onClick={onClose} className={`fixed inset-0 flex justify-center z-40 items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
                    <div onClick={(e) => e.stopPropagation()} className="flex flex-col rounded-[16px] bg-white  border-red-800  w-[90%] md:w-[520px] h-[570px] md:h-[600px] rounded-t-[20px] items-center">
                        {/* Header avec le logo et l'indicateur de page */}
                        <div className="relative  flex h-[90px] md:h-[100px] items-center w-full  rounded-t-[16px] justify-center bg-gradient-to-b from-[#011E3E] to-[#0E5588]">
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
                        <div className=" flex flex-col items-center mx-[20px] border-black mt-[20px]">
                            <p className="text-center text-[20px] font-semibold text-brand_bleu_inter">
                                Dites-nous en plus
                            </p>
                            <p className="mt-1 text-center text-sm text-gray-500">
                                Vous êtes à un pas de commencer votre expérience exceptionnelle
                            </p>

                            {/* Formulaire */}
                            <form onSubmit={(e) => e.preventDefault()} className="mt-[20px] border-red-800 space-y-4">
                                {/* Email */}
                                <ConnexionInput isPassword={false} icon={'mingcute:user-3-fill'} placeholder='Nom' />
                                {/* Mot de passe */}
                                <ConnexionInput isPassword={false} icon={'mingcute:user-3-fill'} placeholder='Prénom' />
                                <ConnexionInput isPassword={false} icon={'tabler:building'} placeholder="Nom de l'entreprise" />

                                {/* Bouton Continuer */}

                            </form>
                            <button onClick={handleContinue} className="mt-[24px] w-[250px] md:w-[340px] rounded-full bg-gradient-to-r h-[44px] from-[#011E3E] to-[#0E5588] text-white font-semibold transition hover:opacity-90">
                                Commencer maintenant
                            </button>

                            {/* Lien Connexion */}
                            <p className="mt-6 text-center text-sm text-brand_bleu_fonce_500 text-[16px]">
                                Sans aucune carte de crédit - Sans conditions
                            </p>
                            {/* Conditions */}
                            <p className="mt-2 text-center text-xs text-[#0F5689]">
                                En vous inscrivant, vous acceptez les{" "}
                                <a href="#" className="text-[#269AD2] hover:underline">
                                    Conditions générales d'utilisation
                                </a>
                            </p>
                        </div>
                    </div>


                </div>
            }


        </div>
    );
}

export default DeleteModal;
