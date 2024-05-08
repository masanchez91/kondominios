import React from 'react';

interface TextParagraphProps {
    children: React.ReactNode;
}

const TextParagraph: React.FC<TextParagraphProps> = ({ children }) => {
    return <p className="text-lg">{children}</p>;
};

export default TextParagraph;
