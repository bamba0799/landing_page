import { Icon } from '@iconify/react/dist/iconify.js';
import premiumIcon from "../assets/premiumIcon.png";
import SecondButton from './Button/SecondButton';
type PricingCardProps = {
    title?: "Start" | "Premium";
    price: number;
    description?: string;
    data: string[]
}
const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, data }) => {
    return (
        <div className="w-[438px] h-[438px]  border-red-600 shadow-sm shadow-black/30 rounded-[10px] bg-white flex flex-col justify-between items-center">
            <div className="w-full  border-b-emerald-900">
                <div className='rounded-t-[10px] bg-surface_bleu  h-[135px] flex flex-col justify-between p-[20px]'>
                    {/* Header */}
                    <div className="rounded-[10px] px-[10px] pt-[5px] flex flow-row justify-between items-center">
                        <div className='flex flex-row justify-between items-center'>
                            <h3 className="text-xl font-bold text-brand_bleu_inter text-[20px]">{title}</h3>
                            <Icon icon="jam:alert-f" className="text-brand_orange w-5 h-5 ml-2" />
                        </div>

                        {title === 'Premium' &&
                            <div className='flex flow-row justify-between items-center'>
                                <p className='text-[8px] text-brand_orange '>Choix le plus populaire</p>
                                <img src={premiumIcon} alt="premium" className="w-[20px] h-[20px]" />
                            </div>
                        }
                    </div>
                    {/* Pricing */}
                    <div className="px-[10px] py-[10px] flex items-center justify-between">
                        <div className=' w-[70%] '>
                            <p className="text-brand_bleu_inter text-[14px]">{description}</p>
                        </div>
                        <div className=' w-[30%]'>
                            <span className="text-[20px] font-bold text-brand_orange">€{price}</span>
                            <span className="text-[20px] text-brand_orange"> / mois</span>
                        </div>
                    </div>
                </div>
                {/* Features */}
                <ul className="px-[20px] py-4 space-y-3">
                    {data.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                            <Icon icon="mdi:check-circle-outline" className="text-brand_orange w-5 h-5 mr-2" />
                            <span className=' text-[14px] text-brand_bleu_inter'>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Call to Action */}
            <div className=" pb-[20px]">
                <SecondButton text={"Ouvrir un compte"} />
            </div>
        </div>
    );
};

export default PricingCard;