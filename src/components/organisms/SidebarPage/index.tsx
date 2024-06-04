import Dashboard from '../../../components/icons/Dashboard';
import ArrowRightStartOnRectangle from '../../../components/icons/ArrowRightStartOnRectangle';
import Settings from '../../../components/icons/Settings';
import ChatBubble from '../../../components/icons/ChatBubble';
import Users from '../../../components/icons/Users';
import Sidebar, { SidebarItem } from '../../../components/organisms/Sidebar';
import { LogOut } from '../../../pages/Auth/LogOut/LogOutPageView';
import { PrivateRoutes } from '../../../models';

function SiderbarPage() {
    const handleLogOut = LogOut();

    return (
        <>
            <div className="flex">
                <Sidebar>
                    <SidebarItem
                        icon={<Dashboard />}
                        text="Panel"
                        active
                        alert={false}
                        to={`${PrivateRoutes.DASHBOARD}`}
                    />
                    <SidebarItem
                        icon={<Users />}
                        text="Clientes"
                        active
                        alert={false}
                        to={`${PrivateRoutes.CLIENTS}`}
                    />
                    <hr className="my-3" />
                    <SidebarItem
                        icon={<Settings />}
                        text="Configuraciones"
                        active
                        alert={false}
                        to={`${PrivateRoutes.SETTINGS}`}
                    />
                    <SidebarItem
                        icon={<ChatBubble />}
                        text="Ayuda"
                        active
                        alert={false}
                        to={`${PrivateRoutes.HELP}`}
                    />
                    <SidebarItem
                        icon={<ArrowRightStartOnRectangle />}
                        text="Salir"
                        active
                        alert={false}
                        to={`${PrivateRoutes.LOGOUT}`}
                        onClick={handleLogOut}
                    />
                </Sidebar>
            </div>
        </>
    );
}

export default SiderbarPage;
