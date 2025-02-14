import { Icon } from '@iconify/react';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';

type ConnexionInputProps = {
    icon: string;
    isPassword?: boolean;
    placeholder?: string;
    value?: string;
    required?: boolean;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ConnexionInput = React.forwardRef<HTMLInputElement, ConnexionInputProps>(
    ({ icon, placeholder, onChange, value, required, className, isPassword, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <div className="relative border-b-2 border-gray-400 w-[250px] md:w-[340px]">
                {/* Icône à gauche */}
                <Icon icon={icon} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

                {/* Input Field */}
                <input
                    value={value}
                    onChange={onChange}
                    ref={ref as React.Ref<HTMLInputElement>}
                    {...props}
                    type={isPassword && !showPassword ? "password" : "text"}
                    placeholder={placeholder}
                    className={`w-full border-none bg-transparent pl-10 pr-10 py-2 focus:outline-none focus:ring-0 ${className}`}
                />

                {/* Bouton pour afficher/masquer le mot de passe */}
                {isPassword && (
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <Icon icon={"heroicons-solid:eye"} className='w-5 h-5 text-brand_bleu_inter' /> : <Icon icon={"heroicons-solid:eye-off"} className='w-5 h-5 text-brand_bleu_inter' />}
                    </button>
                )}

                {/* Étoile rouge pour champ requis */}
                {required && (
                    <span className="absolute top-0 right-2 text-red-500">*</span>
                )}
            </div>
        );
    }
);

export default ConnexionInput;
