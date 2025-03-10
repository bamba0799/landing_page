import { Icon } from '@iconify/react/dist/iconify.js';
import premiumIcon from "../assets/premiumIcon.png";
import SecondButton from './Button/SecondButton';
type PricingCardProps = {
    title?: "Smart" | "Premium";
    price: number;
    description?: string;
    data: string[]
    seeOver?: () => void;
    step: "mois" | "année";
    onClick?: () => void;
}
const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, data, step, seeOver, onClick }) => {
    return (
        <div className=" w-full h-full  border-red-600 shadow-sm shadow-black/30 rounded-[10px] bg-white flex flex-col justify-between items-center">
            <div className="w-full  border-b-emerald-900">
                <div className='rounded-t-[10px] bg-surface_bleu  h-[135px] flex flex-col justify-between p-[20px]'>
                    {/* Header */}
                    <div className="rounded-[10px] md:px-[10px] pt-[5px] flex flow-row justify-between items-center">
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
                    <div className="  border-orange-600 md:px-[10px] py-[10px] flex items-center justify-between">
                        <div className=' w-[70%] '>
                            <p className="text-brand_bleu_inter text-[14px]">{description}</p>
                        </div>
                        <div className=' w-[30%]'>
                            <span className=" text-[14px] md:text-[16px] font-bold text-brand_orange">€{price}</span>
                            <span className=" text-[14px] md:text-[16px] text-brand_orange"> / {step}</span>
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
                    <button onClick={seeOver} className='ml-[5px] flex flex-row  items-center'>
                        <div className='   text-[15px] text-brand_bleu_inter'>Voir plus</div>
                        <Icon icon="akar-icons:arrow-right" className="text-brand_orange w-[20px] h-[20px] ml-2" />
                    </button>
                </ul>
            </div>

            {/* Call to Action */}
            <div className=" pb-[20px]">
                <SecondButton onClick={onClick} text={"Ouvrir un compte"} />
            </div>
        </div>
    );
};

export default PricingCard;