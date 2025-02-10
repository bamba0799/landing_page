import { Icon } from '@iconify/react/dist/iconify.js';
import premiumIcon from "../assets/premiumIcon.png";
type PricingCardProps = {
    title?: "Start" | "Premium";
    price: number;
    description?: string;
    data: string[]
}
const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, data }) => {
    return (
        <div className="w-full h-[438px] shadow-sm shadow-black/30 rounded-[10px] bg-white flex flex-col justify-between">
            <div>
                <div className='border border-black bg-surface_bleu  h-[135px] flex flex-col justify-between p-[20px]'>
                    {/* Header */}
                    <div className="rounded-[10px]  px-[10px] pt-[5px] flex flow-row justify-between items-center">
                        <h3 className="text-xl font-bold text-brand_bleu_inter text-[20px]">{title}</h3>
                        {title === 'Premium' &&
                            <div className='flex flow-row justify-between items-center'>
                                <p className='text-[8px] text-brand_orange '>Choix le plus populaire</p>
                                <img src={premiumIcon} alt="premium" className="w-[20px] h-[20px]" />
                            </div>
                        }
                    </div>
                    {/* Pricing */}
                    <div className="px-[10px] py-4 flex items-center justify-between">
                        <div className=' w-[70%] '>
                            <p className="text-sm text-brand_bleu_inter text-[14px]">{description}</p>
                        </div>
                        <div className=' w-[30%]'>
                            <span className="text-2xl font-bold text-orange-400">€{price}</span>
                            <span className="text-sm text-gray-500">/mois</span>
                        </div>
                    </div>
                </div>
                {/* Features */}
                <ul className="px-[20px] py-4 space-y-3">
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