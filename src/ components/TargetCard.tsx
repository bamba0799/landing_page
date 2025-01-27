import React from 'react';

type TargetCardProps = {
    title?: string;
    description?: string;
    image?: string;
    color?: 'orange' | 'blue'
}

const TargetCard: React.FC<TargetCardProps> = ({ title, description, image, color }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center ${color === 'orange' ? 'bg-orange-500/20' : 'bg-blue-500/20'} rounded-[7px] p-[10px] w-[120px] h-[120px] lg:w-[150px] lg:h-[150px]`}>
            <div className="w-[70px] h-[70px]  lg:w-[100px] lg:h-[100px]  p-[2px]">
                <img src={image} alt={title} className="w-full h-full object-contain" />
            </div>
            <p className='absolute bottom-[10px] left-[60px] lg:left-[75px] -translate-x-1/2 text-blue-900'>{title}</p>
        </div>
    );
}

export default TargetCard;
