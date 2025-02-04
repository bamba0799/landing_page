interface ServiceCardProps {
    imageSrc: string;
    title: string;
    categories: string[];
}

import burea from '../assets/bureaucrate.jpeg';

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, categories }) => {

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80">
            <img src={burea} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <p className="text-gray-500 font-medium mt-2">
                    {categories.join(" • ")}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;