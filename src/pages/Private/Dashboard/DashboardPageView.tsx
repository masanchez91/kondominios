import Dashboard from '../../../components/icons/Dashboard';
import ArrowRightStartOnRectangle from '../../../components/icons/ArrowRightStartOnRectangle';
import Settings from '../../../components/icons/Settings';
import ChatBubble from '../../../components/icons/ChatBubble';
import Sidebar, { SidebarItem } from '../../../components/organisms/Sidebar';
import LogOut from '../../Auth/LogOut/LogOutPageView';

function DashboardPageView() {
    return (
        <>
            <div className="flex">
                <Sidebar>
                    <SidebarItem
                        icon={<Dashboard />}
                        text="Dashboard"
                        active
                        alert={false}
                    />
                    <hr className="my-3" />
                    <SidebarItem
                        icon={<Settings />}
                        text="Configuraciones"
                        active
                        alert={false}
                    />
                    <SidebarItem
                        icon={<ChatBubble />}
                        text="Ayuda"
                        active
                        alert={false}
                    />
                    <SidebarItem
                        icon={<ArrowRightStartOnRectangle />}
                        text="Salir"
                        active
                        alert={false}
                        onClick={LogOut}
                    />
                </Sidebar>
            </div>
        </>
    );
}

export default DashboardPageView;
