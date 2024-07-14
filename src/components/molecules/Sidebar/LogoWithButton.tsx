import React from 'react';
import defaultLogo from '../../../assets/LogoKondominiosPlataforma.png';
import ExpandButton from '../../atoms/Sidebar/ExpandButton';

interface LogoWithButtonProps {
    expanded: boolean;
    toggleExpand: () => void;
}

const LogoWithButton: React.FC<LogoWithButtonProps> = ({
    expanded,
    toggleExpand,
}) => {
    // Usa el logo del merchant o un logo predeterminado
    const logoUrl = defaultLogo;

    return (
        <div className="p-4 pb-2 flex justify-end items-center">
            <img
                src={logoUrl}
                className={`overflow-hidden transition-all ${expanded ? 'w-44' : 'w-0'}`}
                alt="Merchant Logo"
            />
            <ExpandButton expanded={expanded} onClick={toggleExpand} />
        </div>
    );
};

export default LogoWithButton;
