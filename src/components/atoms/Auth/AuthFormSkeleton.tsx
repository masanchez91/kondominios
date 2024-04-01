import React from "react";

type AuthFormSkeletonProps = {};

const AuthFormSkeleton: React.FC<AuthFormSkeletonProps> = () => {
	return (
		<div className="space-y-6 w-full rounded mt-4">
			{/* Placeholder for header skeleton */}
			<div className="h-8 md:h-10 lg:h-12 w-full bg-gray-200 rounded animate-pulse" />

			{/* Placeholder for input fields */}
			<div>
				<div className="h-10 md:h-12 lg:h-14 w-full bg-gray-200 rounded animate-pulse" />
				<div className="h-10 md:h-12 lg:h-14 w-full bg-gray-200 rounded animate-pulse" />
			</div>

			{/* Placeholder for checkbox and links */}
			<div className="flex flex-col md:flex-row md:items-center md:justify-between">
				<div className="h-5 md:h-6 lg:h-7 w-full md:w-1/3 lg:w-1/4 bg-gray-200 rounded animate-pulse" />
				<div className="h-5 md:h-6 lg:h-7 w-full md:w-1/3 lg:w-1/4 bg-gray-200 rounded animate-pulse" />
				<div className="h-5 md:h-6 lg:h-7 w-full md:w-1/3 lg:w-1/4 bg-gray-200 rounded animate-pulse" />
			</div>

			{/* Placeholder for buttons */}
			<div className="mt-8 flex flex-col gap-y-4">
				<div className="h-10 md:h-12 lg:h-14 w-full bg-gray-200 rounded animate-pulse" />
				<div className="h-10 md:h-12 lg:h-14 w-full bg-gray-200 rounded animate-pulse" />
			</div>

			{/* Placeholder for signup link */}
			<div className="mt-8 flex justify-center items-center">
				<div className="h-5 md:h-6 lg:h-7 w-full md:w-1/2 lg:w-1/3 bg-gray-200 rounded animate-pulse" />
			</div>
		</div>
	);
};

export default AuthFormSkeleton;
