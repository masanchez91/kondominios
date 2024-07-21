import { useSelector } from 'react-redux';
import profile from '../../../assets/ProfileDefault.png';
import { AppStore } from '../../../redux/store';
import ArrowsUpDown from '../../icons/ArrowsUpDown';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../models';

export default function UserProfile({ expanded }: { expanded: boolean }) {
    const navigate = useNavigate();

    // Accede al estado de Redux
    const user = useSelector((state: AppStore) => state.user);
    // Usa la data del user
    const name = user.name || 'name';
    const email = user.email || 'email';

    // Función para manejar el clic y redirigir a la vista de PROFILE
    const handleProfileClick = () => {
        const route = PrivateRoutes.PROFILE;
        localStorage.setItem('activeSidebarItem', route);
        navigate(route);
    };

    return (
        <div className="border-t flex p-3">
            <img
                src={profile}
                className="w-10 h-10 rounded-md cursor-pointer"
                onClick={handleProfileClick}
            />
            <div
                className={`flex justify-around items-center overflow-hidden ${expanded ? 'w-52 ml-3' : 'w-0'}`}
            >
                <div
                    className="leading-4 cursor-pointer"
                    onClick={handleProfileClick}
                >
                    <h4 className="text-custom-kondominios-blue-dark font-semibold">
                        {name}
                    </h4>
                    <span className="text-xs text-custom-kondominios-blue-dark">
                        {email}
                    </span>
                </div>
                <ArrowsUpDown />
            </div>
        </div>
    );
}
