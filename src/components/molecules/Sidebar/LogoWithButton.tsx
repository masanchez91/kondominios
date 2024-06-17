import ExpandButton from '../../atoms/Sidebar/ExpandButton';
import logo from '../../../assets/LogoHeaderSideBar.png';

export default function LogoWithButton({
    expanded,
    toggleExpand,
}: {
    expanded: boolean;
    toggleExpand: () => void;
}) {
    return (
        <div className="p-4 pb-2 flex justify-between items-center">
            <img
                src={logo}
                className={`overflow-hidden transition-all ${expanded ? 'w-44' : 'w-0'}`}
            />
            <ExpandButton expanded={expanded} onClick={toggleExpand} />
        </div>
    );
}
