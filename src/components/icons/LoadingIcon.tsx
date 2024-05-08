import React from "react";

interface SvgProps {
  fill?: string;
}
const LoadingIcon: React.FC<SvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-16 w-16 text-gray-400"
    {...props}
  >
    <title>{"Loading Icon"}</title>
    <g className="layer">
      <title>{"Layer 1"}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 20H4a1 1 0 01-1-1V5a1 1 0 011-1h12a1 1 0 011 1v9l-3 2 3 2v1a1 1 0 01-1 1H9v-2zm2-16a2 2 0 100 4 2 2 0 000-4zM9 14h12m0 0l-3-3m3 3l-3 3"
      />
    </g>
  </svg>
);

export default LoadingIcon;
