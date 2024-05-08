import React from 'react';

interface DesktopLinkAtomProps {
    href: string;
    children: React.ReactNode;
}

const DesktopLinkAtom: React.FC<DesktopLinkAtomProps> = ({
    href,
    children,
}) => {
    return (
        <a
            href={href}
            className="hidden md:block font-medium text-sm text-blue-500 md:mt-0 md:ml-4"
        >
            {children}
        </a>
    );
};

export default DesktopLinkAtom;
