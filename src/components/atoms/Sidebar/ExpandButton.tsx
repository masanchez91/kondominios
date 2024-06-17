import ChevronDoubleLeft from '../../icons/ChevronDoubleLeft';
import ChevronDoubleRight from '../../icons/ChevronDoubleRight';

export default function ExpandButton({ expanded, onClick }: { expanded: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
            {expanded ? <ChevronDoubleLeft /> : <ChevronDoubleRight />}
        </button>
    );
}
