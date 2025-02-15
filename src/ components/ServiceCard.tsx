interface ServiceCardProps {
    imageSrc: string;
    title: string;
    categories: string[];
}

import burea from '../assets/bureaucrate.jpeg';

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, categories }) => {

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
            <img src={burea} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-[16px] font-bold text-[#011E3E]">{title}</h3>
                <p className="text-[#9CA2A9] font-medium mt-2">
                    {categories.join(" • ")}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;