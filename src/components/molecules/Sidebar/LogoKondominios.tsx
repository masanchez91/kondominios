export default function LogoKondominios({ expanded }: { expanded: boolean }) {
    return (
        <div className="p-4 pb-1">
            {expanded ? (
                <>
                    <span className="text-indigo-800 text-2xl font-bold opacity-90">k</span>
                    <span className="text-orange-500 text-2xl font-bold opacity-85">
                        ondominios
                    </span>
                </>
            ) : (
                <span className="text-indigo-800 text-2xl font-bold opacity-90">k</span>
            )}
        </div>
    );
}
