import { useSelector } from 'react-redux';
import profile from '../../../assets/ProfileDefault.png';
import { AppStore } from '../../../redux/store';
import ArrowsUpDown from '../../icons/ArrowsUpDown';

export default function UserProfile({ expanded }: { expanded: boolean }) {
    // Accede al estado de Redux
    const user = useSelector((state: AppStore) => state.user);
    // Usa la data del user
    const name = user.name || 'name';
    const email = user.email || 'email';

    return (
        <div className="border-t flex p-3">
            <img src={profile} className="w-10 h-10 rounded-md" />
            <div
                className={`flex justify-around items-center overflow-hidden ${expanded ? 'w-52 ml-3' : 'w-0'}`}
            >
                <div className="leading-4">
                    <h4 className="text-custom-kondominios-blue-dark font-semibold">{name}</h4>
                    <span className="text-xs text-custom-kondominios-blue-dark">{email}</span>
                </div>
                <ArrowsUpDown />
            </div>
        </div>
    );
}
