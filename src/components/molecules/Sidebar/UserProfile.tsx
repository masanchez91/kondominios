import profile from '../../../assets/ProfileDefault.png';
import ArrowsUpDown from '../../icons/ArrowsUpDown';

export default function UserProfile({ expanded }: { expanded: boolean }) {
    return (
        <div className="border-t flex p-3">
            <img src={profile} className="w-10 h-10 rounded-md" />
            <div
                className={`flex justify-between items-center overflow-hidden ${expanded ? 'w-52 ml-3' : 'w-0'}`}
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
    );
}
