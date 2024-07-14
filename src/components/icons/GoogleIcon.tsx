import React from 'react';

interface SvgProps {
    fill?: string;
}
const Google: React.FC<SvgProps> = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        className="w-6 h-6"
    >
        <title>Google Icon</title>
        <g className="layer">
            <title>Layer 1</title>
            <path
                fill="#EA4335"
                d="M5.27 9.76A7.068 7.068 0 0 1 12 4.91c1.69 0 3.22.6 4.42 1.58L19.91 3C17.78 1.15 15.05 0 12 0 7.27 0 3.2 2.7 1.24 6.65l4.03 3.11z"
            />
            <path
                fill="#34A853"
                d="M16.04 18.01c-1.09.71-2.47 1.08-4.04 1.08a7.07 7.07 0 0 1-6.72-4.82l-4.04 3.07C3.19 21.3 7.26 24 12 24c2.93 0 5.74-1.04 7.83-3l-3.79-2.99z"
            />
            <path
                fill="#4A90E2"
                d="M19.83 21c2.2-2.05 3.62-5.1 3.62-9 0-.71-.1-1.47-.27-2.18H12v4.63h6.44c-.32 1.56-1.17 2.77-2.4 3.56L19.83 21z"
            />
            <path
                fill="#FBBC05"
                d="M5.28 14.27a7.152 7.152 0 0 1-.01-4.51L1.24 6.65C.44 8.26 0 10.07 0 12c0 1.92.44 3.73 1.24 5.33l4.04-3.06z"
            />
        </g>
    </svg>
);

export default Google;
