export default function VersionKondominios({
    expanded,
}: {
    expanded: boolean;
}) {
    return (
        <div className="p-4 pb-1">
            {expanded ? (
                <span className="text-xs text-gray-500">
                    versión pre-alfa 0.0.1
                </span>
            ) : (
                <span className="text-xs text-gray-500">v0.0.1</span>
            )}
        </div>
    );
}
