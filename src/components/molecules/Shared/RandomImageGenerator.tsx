import React, { useEffect, useState } from 'react';
import RandomImageGeneratorSkeleton from '../../atoms/Shared/RandomImageGeneratorSkeleton';

interface RandomImageGeneratorProps {
    imagePaths: string[];
}

const RandomImageGenerator: React.FC<RandomImageGeneratorProps> = ({
    imagePaths,
}) => {
    const [randomImage, setRandomImage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        setRandomImage(imagePaths[randomIndex]);
        setLoading(false);
    }, [imagePaths]);

    return (
        <div>
            <RandomImageGeneratorSkeleton loading={loading} />
            {!loading && (
                <img
                    className="rounded-2xl"
                    src={randomImage}
                    alt="Vista panorámica de la gestión de condominios"
                />
            )}
        </div>
    );
};

export default RandomImageGenerator;
