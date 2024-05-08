import React from "react";
import Eye from "../../icons/EyeIcon";

interface SvgProps {
  fill?: string;
}

const EyeContainer: React.FC<SvgProps & { onClick: () => void }> = ({
  onClick,
  ...props
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
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
      <Eye {...props} />
    </div>
  );
};

export default EyeContainer;
