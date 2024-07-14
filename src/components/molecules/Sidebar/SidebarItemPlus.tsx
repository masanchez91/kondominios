// Refactorizar este archivo en diseño atómico
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PrivateRoutes } from '../../../models';
import BuildingOffice from '../../icons/BuildingOffice';
import BuildingOfficeSolid from '../../icons/BuildingOfficeSolid';
import ChatBubble from '../../icons/ChatBubble';
import ChatBubbleLeft from '../../icons/ChatBubbleLeft';
import ChatBubbleSolid from '../../icons/ChatBubbleSolid';
import CreditCard from '../../icons/CreditCard';
import CreditCardSolid from '../../icons/CreditCardSolid';
import PlayCircle from '../../icons/PlayCircle';
import PlayCircleSolid from '../../icons/PlayCircleSolid';
import { SidebarContext } from '../../organisms/SidebarPage/Sidebar';

export default function SidebarItemPlus({
    icon,
    text,
    active,
    alert,
}: {
    icon: React.ReactNode;
    text: string;
    active: boolean;
    alert: boolean;
}) {
    const { expanded } = useContext(SidebarContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const getInitialActiveItem = () => {
        const savedItem = localStorage.getItem('activeSidebarItem');
        return savedItem || PrivateRoutes.DASHBOARD;
    };

    const [activeItem, setActiveItem] = useState(getInitialActiveItem);

    const handleClick = (route: string) => {
        setActiveItem(route);
        localStorage.setItem('activeSidebarItem', route);
    };

    useEffect(() => {
        localStorage.setItem('activeSidebarItem', activeItem);
    }, [activeItem]);

    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : 'hover:bg-indigo-50 text-gray-600'}`}
        >
            <div className="flex items-center w-full" onClick={handleToggle}>
                {icon}
                <span
                    className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}
                >
                    {text}
                </span>
                {alert && (
                    <div
                        className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}
                    ></div>
                )}
                {!expanded && (
                    <div
                        className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                    >
                        {text}
                    </div>
                )}
            </div>
            {isOpen && (
                <div className="absolute left-full top-0 w-48 mt-2 ml-4 py-2 bg-white shadow-lg rounded-md z-50">
                    <ul className="flex-1 px-6">
                        <li className="py-2 hover:bg-gray-200">
                            <NavLink
                                to={`${PrivateRoutes.HELP}`}
                                onClick={() => {
                                    setIsOpen(false);
                                    handleClick(PrivateRoutes.HELP);
                                }}
                                className="flex justify-start w-full"
                            >
                                {activeItem === PrivateRoutes.HELP ? (
                                    <ChatBubbleSolid />
                                ) : (
                                    <ChatBubble />
                                )}
                                <span className="overflow-hidden transition-all 'w-52 ml-3">
                                    Ayuda
                                </span>
                            </NavLink>
                        </li>
                        <li className="py-2 hover:bg-gray-200">
                            <NavLink
                                to={`${PrivateRoutes.SUPPORT}`}
                                onClick={() => {
                                    setIsOpen(false);
                                    handleClick(PrivateRoutes.SUPPORT);
                                }}
                                className="flex justify-start w-full"
                            >
                                {activeItem === PrivateRoutes.SUPPORT ? (
                                    <ChatBubbleSolid />
                                ) : (
                                    <ChatBubbleLeft />
                                )}
                                <span className="overflow-hidden transition-all 'w-52 ml-3">
                                    Soporte
                                </span>
                            </NavLink>
                        </li>
                        <li className="py-2 hover:bg-gray-200">
                            <NavLink
                                to={`${PrivateRoutes.TUTORIAL}`}
                                onClick={() => {
                                    setIsOpen(false);
                                    handleClick(PrivateRoutes.TUTORIAL);
                                }}
                                className="flex justify-start w-full"
                            >
                                {activeItem === PrivateRoutes.TUTORIAL ? (
                                    <PlayCircleSolid />
                                ) : (
                                    <PlayCircle />
                                )}
                                <span className="overflow-hidden transition-all 'w-52 ml-3">
                                    Tutorial
                                </span>
                            </NavLink>
                        </li>
                        <li className="py-2 hover:bg-gray-200">
                            <NavLink
                                to={`${PrivateRoutes.ACCOUNT}`}
                                onClick={() => {
                                    setIsOpen(false);
                                    handleClick(PrivateRoutes.ACCOUNT);
                                }}
                                className="flex justify-start w-full"
                            >
                                {activeItem === PrivateRoutes.ACCOUNT ? (
                                    <BuildingOfficeSolid />
                                ) : (
                                    <BuildingOffice />
                                )}
                                <span className="overflow-hidden transition-all 'w-52 ml-3">
                                    Cuenta
                                </span>
                            </NavLink>
                        </li>
                        <li className="py-2 hover:bg-gray-200">
                            <NavLink
                                to={`${PrivateRoutes.BILLING}`}
                                onClick={() => {
                                    setIsOpen(false);
                                    handleClick(PrivateRoutes.BILLING);
                                }}
                                className="flex justify-start w-full"
                            >
                                {activeItem === PrivateRoutes.BILLING ? (
                                    <CreditCardSolid />
                                ) : (
                                    <CreditCard />
                                )}
                                <span className="overflow-hidden transition-all 'w-52 ml-3">
                                    Facturación
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </li>
    );
}
