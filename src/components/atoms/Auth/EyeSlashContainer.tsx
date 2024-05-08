import React from 'react';
import EyeSlash from '../../icons/EyeSlashIcon';

interface SvgProps {
    fill?: string;
}

const EyeSlashContainer: React.FC<SvgProps & { onClick: () => void }> = ({
    onClick,
    ...props
}) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            onClick();
        }
    };

    return (
        <div
            onClick={onClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Toggle password visibility"
        >
            <EyeSlash {...props} />
        </div>
    );
};

export default EyeSlashContainer;
