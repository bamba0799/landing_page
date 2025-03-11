import React from 'react';

type GeneralModalProps = {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const GeneralModal:React.FC<GeneralModalProps> = ({open, onClose, children}) => {
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center z-40 transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
        <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-lg shadow p-[20px] w-[90%] md:w-[500px] transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"> 
             {children}
            </div>
        </div>
    </div>
    );
}

export default GeneralModal;
