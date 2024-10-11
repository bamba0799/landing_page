import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
type PrimaryLayoutProps = {
    children: React.ReactNode;
    title: string;
}
const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children, title }) => {
    return (
        <div className='mt-[60px] lg:mt-[140px]'>
            <div className='flex flex-row  items-center space-x-[5px] mb-[20px]'>
                <Icon icon="fa-solid:home" className='text-secondary_green ' />
                <div className='flex flex-row items-center space-x-[1px]'>
                    <Icon icon="tdesign:chevron-right-double" className='text-secondary_green text-[10px]' />
                    <span className='text-secondary_green text-[12px]'>{title}</span>
                    <Icon icon="tdesign:chevron-right-double" className='text-secondary_green text-[10px]' />

                </div>
            </div>
            {children}
        </div>
    );
}

export default PrimaryLayout;
