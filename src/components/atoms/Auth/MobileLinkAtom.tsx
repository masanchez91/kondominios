import React from 'react';

interface MobileLinkAtomProps {
    href: string;
    children: React.ReactNode;
}

const MobileLinkAtom: React.FC<MobileLinkAtomProps> = ({ href, children }) => {
    return (
        <a
            href={href}
            className="block md:hidden font-medium text-sm text-blue-500 mt-2 text-left"
        >
            {children}
        </a>
    );
};

export default MobileLinkAtom;
