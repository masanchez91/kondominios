import React from "react";
import LoadingIcon from "../../icons/LoadingIcon";

interface RandomImageGeneratorSkeletonProps {
	loading: boolean;
}

const RandomImageGeneratorSkeleton: React.FC<
	RandomImageGeneratorSkeletonProps
> = ({ loading }) => {
	return loading ? (
		<div className="rounded-2xl bg-gray-300 animate-pulse">
			<div className="h-64 w-full flex items-center justify-center">
				<LoadingIcon />
			</div>
		</div>
	) : null;
};

export default RandomImageGeneratorSkeleton;
