import Dashboard from '../../components/icons/Dashboard';
import ArrowRightStartOnRectangle from '../../components/icons/ArrowRightStartOnRectangle';
import Settings from '../../components/icons/Settings';
import ChatBubble from '../../components/icons/ChatBubble';
import Users from '../../components/icons/Users';
import Sidebar from '../organisms/SidebarPage/Sidebar';
import SidebarItem from '../molecules/Sidebar/SidebarItem';
import { LogOut } from '../../pages/Auth/LogOut/LogOutPageView';
import { PrivateRoutes } from '../../models';
import { useState, useEffect } from 'react';

function SiderbarPageTemplate() {
    const handleLogOut = LogOut();

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
        <>
            <div className="flex">
                <Sidebar>
                    <SidebarItem
                        icon={<Dashboard />}
                        text="Panel"
                        active
                        alert={activeItem === PrivateRoutes.DASHBOARD}
                        to={`${PrivateRoutes.DASHBOARD}`}
                        onClick={() => handleClick(PrivateRoutes.DASHBOARD)}
                    />
                    <SidebarItem
                        icon={<Users />}
                        text="Clientes"
                        active
                        alert={activeItem === PrivateRoutes.CLIENTS}
                        to={`${PrivateRoutes.CLIENTS}`}
                        onClick={() => handleClick(PrivateRoutes.CLIENTS)}
                    />
                    <hr className="my-3" />
                    <SidebarItem
                        icon={<Settings />}
                        text="Configuraciones"
                        active
                        alert={activeItem === PrivateRoutes.SETTINGS}
                        to={`${PrivateRoutes.SETTINGS}`}
                        onClick={() => handleClick(PrivateRoutes.SETTINGS)}
                    />
                    <SidebarItem
                        icon={<ChatBubble />}
                        text="Ayuda"
                        active
                        alert={activeItem === PrivateRoutes.HELP}
                        to={`${PrivateRoutes.HELP}`}
                        onClick={() => handleClick(PrivateRoutes.HELP)}
                    />
                    <SidebarItem
                        icon={<ArrowRightStartOnRectangle />}
                        text="Salir"
                        active
                        alert={activeItem === PrivateRoutes.LOGOUT}
                        to={`${PrivateRoutes.LOGOUT}`}
                        onClick={handleLogOut}
                    />
                    <hr className="my-3" />
                </Sidebar>
            </div>
        </>
    );
}

export default SiderbarPageTemplate;
