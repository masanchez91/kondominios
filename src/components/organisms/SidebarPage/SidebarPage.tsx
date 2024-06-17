import ChevronDoubleLeft from '../../icons/ChevronDoubleLeft';
import ChevronDoubleRight from '../../icons/ChevronDoubleRight';
import ArrowsUpDown from '../../icons/ArrowsUpDown';
import logo from '../../../assets/LogoHeaderSideBar.png';
import profile from '../../../assets/ProfileDefault.png';
import { ReactNode, createContext, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

const SidebarContext = createContext({ expanded: true });

export default function Sidebar({ children }: { children: ReactNode }) {
    const [expanded, setExpanded] = useState(true);
    return (
        <>
            <aside
                className="h-screen"
                style={{
                    maxWidth: '100%',
                    margin: '0',
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    bottom: '0',
                }}
            >
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img
                            src={logo}
                            className={`overflow-hidden transition-all ${expanded ? 'w-44' : 'w-0'}`}
                        />
                        <button
                            onClick={() => setExpanded(curr => !curr)}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                        >
                            {expanded ? (
                                <ChevronDoubleLeft />
                            ) : (
                                <ChevronDoubleRight />
                            )}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>

                    <div className="p-4 pb-1">
                        {expanded && (
                            <span className="text-xs text-gray-500">
                                versión pre-alfa 0.0.1
                            </span>
                        )}
                    </div>

                    <div className="border-t flex p-3">
                        <img src={profile} className="w-10 h-10 rounded-md" />
                        <div
                            className={`flex justify-between items-center overflow-hidden ${expanded ? 'w-52 ml-3' : 'w-0'} `}
                        >
                            <div className="leading-4">
                                <h4 className="font-semibold">Mauro Sánchez</h4>
                                <span className="text-xs text-gray-600">
                                    mauro.sanchez.simental@gmail.com
                                </span>
                            </div>
                            <ArrowsUpDown />
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    );
}

export function SidebarItem({
    icon,
    text,
    active,
    alert,
    to,
    onClick,
}: {
    icon: React.ReactNode;
    text: string;
    active: boolean;
    alert: boolean;
    to?: string;
    onClick?: () => void;
}) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : 'hover:bg-indigo-50 text-gray-600'}`}
        >
            <NavLink
                to={to || '#'}
                onClick={onClick}
                className="flex items-center w-full"
            >
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
            </NavLink>
        </li>
    );
}
