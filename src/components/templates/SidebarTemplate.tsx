import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../models';
import { LogOut } from '../../pages/Auth/LogOut/LogOutPageView';
import ArrowRightStartOnRectangle from '../icons/ArrowRightStartOnRectangle';
import BankNotes from '../icons/BankNotes';
import Bars3 from '../icons/Bars3';
import CurrencyDollar from '../icons/CurrencyDollar';
import DocumentText from '../icons/DocumentText';
import Megaphone from '../icons/Megaphone';
import PresentationChart from '../icons/PresentationChart';
import Settings from '../icons/Settings';
import ShoppingCart from '../icons/ShoppingCart';
import Users from '../icons/Users';
import SidebarItem from '../molecules/Sidebar/SidebarItem';
import SidebarItemPlus from '../molecules/Sidebar/SidebarItemPlus';
import Sidebar from '../organisms/SidebarPage/Sidebar';

function SiderbarPageTemplate() {
    const navigate = useNavigate(); // Inicializa useNavigate
    const handleLogOut = LogOut();

    const getInitialActiveItem = () => {
        const savedItem = localStorage.getItem('activeSidebarItem');
        return savedItem || PrivateRoutes.DASHBOARD;
    };

    const [activeItem, setActiveItem] = useState(getInitialActiveItem);

    const handleClick = (route: string) => {
        setActiveItem(route);
        localStorage.setItem('activeSidebarItem', route);
        navigate(route); // Navega a la ruta seleccionada
    };

    useEffect(() => {
        localStorage.setItem('activeSidebarItem', activeItem);
    }, [activeItem]);

    // Redirige a la ruta guardada en localStorage al cargar el componente
    useEffect(() => {
        const savedItem = localStorage.getItem('activeSidebarItem');
        if (savedItem) {
            navigate(savedItem);
        }
    }, [navigate]);

    return (
        <>
            <div className="flex">
                <Sidebar>
                    <SidebarItem
                        icon={<PresentationChart />}
                        text="Panel"
                        active
                        alert={activeItem === PrivateRoutes.DASHBOARD}
                        to={`${PrivateRoutes.DASHBOARD}`}
                        onClick={() => handleClick(PrivateRoutes.DASHBOARD)}
                    />
                    <SidebarItem
                        icon={<BankNotes />}
                        text="Cobranza"
                        active
                        alert={activeItem === PrivateRoutes.INVOICES}
                        to={`${PrivateRoutes.INVOICES}`}
                        onClick={() => handleClick(PrivateRoutes.INVOICES)}
                    />
                    <SidebarItem
                        icon={<Users />}
                        text="Clientes"
                        active
                        alert={activeItem === PrivateRoutes.CLIENTS}
                        to={`${PrivateRoutes.CLIENTS}`}
                        onClick={() => handleClick(PrivateRoutes.CLIENTS)}
                    />
                    <SidebarItem
                        icon={<ShoppingCart />}
                        text="Productos"
                        active
                        alert={activeItem === PrivateRoutes.ARTICLES}
                        to={`${PrivateRoutes.ARTICLES}`}
                        onClick={() => handleClick(PrivateRoutes.ARTICLES)}
                    />
                    <SidebarItem
                        icon={<CurrencyDollar />}
                        text="Notas"
                        active
                        alert={activeItem === PrivateRoutes.CREDIT_BALANCE}
                        to={`${PrivateRoutes.CREDIT_BALANCE}`}
                        onClick={() =>
                            handleClick(PrivateRoutes.CREDIT_BALANCE)
                        }
                    />
                    <SidebarItem
                        icon={<DocumentText />}
                        text="Reportes"
                        active
                        alert={activeItem === PrivateRoutes.REPORTS}
                        to={`${PrivateRoutes.REPORTS}`}
                        onClick={() => handleClick(PrivateRoutes.REPORTS)}
                    />
                    <SidebarItem
                        icon={<Megaphone />}
                        text="Notificaciones"
                        active
                        alert={activeItem === PrivateRoutes.NOTIFICATIONS}
                        to={`${PrivateRoutes.NOTIFICATIONS}`}
                        onClick={() => handleClick(PrivateRoutes.NOTIFICATIONS)}
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
                    <SidebarItemPlus
                        icon={<Bars3 />}
                        text="Más"
                        active
                        alert={
                            activeItem === PrivateRoutes.HELP ||
                            activeItem === PrivateRoutes.SUPPORT ||
                            activeItem === PrivateRoutes.TUTORIAL ||
                            activeItem === PrivateRoutes.ACCOUNT ||
                            activeItem === PrivateRoutes.BILLING
                        }
                    />
                    <hr className="my-3" />
                    <SidebarItem
                        icon={<ArrowRightStartOnRectangle />}
                        text="Salir"
                        active
                        alert={activeItem === PrivateRoutes.LOGOUT}
                        to={`${PrivateRoutes.LOGOUT}`}
                        onClick={handleLogOut}
                    />
                </Sidebar>
            </div>
        </>
    );
}

export default SiderbarPageTemplate;
