import { Icon } from '@iconify/react/dist/iconify.js';
import premiumIcon from "../assets/premiumIcon.png";
type PricingCardProps = {
    title?: "start" | "premium";
    price: number;
    description?: string;
    data: string[]
}
const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, data }) => {
    return (
        <div className="w-full h-[450px] shadow-sm shadow-black/30 rounded-[10px] bg-white flex flex-col justify-between">
            <div>
                {/* Header */}
                <div className="bg-blue-50 rounded-[10px]  px-[10px] pt-[5px] flex flow-row justify-between items-center">
                    <h3 className="text-xl font-bold text-blue-900">{title}</h3>
                    {title === 'premium' &&
                        <div className='flex flow-row justify-between items-center'>
                            <p className='text-[12px] text-orange-400'>Choix le plus populaire</p>
                            <img src={premiumIcon} alt="premium" className="w-[20px] h-[20px]" />
                        </div>
                    }
                </div>
                {/* Pricing */}
                <div className="bg-blue-50 px-[10px] py-4 flex items-center justify-between">
                    <div className=' w-[70%] '>
                        <p className="text-sm text-blue-800 text-[12px]">{description}</p>
                    </div>
                    <div className=' w-[30%]'>
                        <span className="text-2xl font-bold text-orange-400">€{price}</span>
                        <span className="text-sm text-gray-500">/mois</span>
                    </div>
                </div>
                {/* Features */}
                <ul className="px-6 py-4 space-y-3">
                    {data.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                            <Icon icon="mdi:check-circle-outline" className="text-orange-400 w-5 h-5 mr-2" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Call to Action */}
            <div className="px-6 py-4">
                <button className="w-full py-2 px-4 rounded-xl bg-blue-900 text-white font-bold hover:bg-blue-800">
                    Ouvrir un compte
                </button>
            </div>
        </div>
    );
};

export default PricingCard;