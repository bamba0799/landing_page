import React from 'react';

type TargetCardProps = {
    title?: string;
    image?: string;
    color?: 'orange' | 'blue'
    isAssociation?: boolean;
}

const TargetCard: React.FC<TargetCardProps> = ({ title, image, color }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center ${color === 'orange' ? 'bg-orange-500/20' : 'bg-blue-500/20'} rounded-[8px]  w-[166px] h-[149px] md:w-[240px] md:h-[206px] lg:w-[320px] lg:h-[286px]`}>
            <div className={`${title=="Association"?"w-[58px] h-[67px] md:w-[111px] md:h-[130px]":"w-[103px] h-[103px] md:w-[199px] md:h-[199px]"}`}>
                <img src={image} alt={title} className="w-full h-full object-contain" />
            </div>
            <p className={`absolute bottom-[10px] left-[83px]  md:left-[120px] lg:left-[160px] -translate-x-1/2 text-brand_bleu_inter font-semibold text-[10px] md:text-[20px]`}>{title}</p>
        </div>
    );
}

export default TargetCard;
