import React from "react";

interface IProps {
  progress?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
  showLabel?: boolean;
}

const ProgressBar: React.FC<IProps> = ({
  progress = 0,
  height = 20,
  backgroundColor = "#e0e0e0",
  color = "#76c7c0",
  borderRadius = 8,
  showLabel = false,
}) => {
  // Ограничиваем прогресс в диапазоне 0-100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      style={{
        backgroundColor,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
        overflow: "hidden",
        // У нас нет absolute/
        // position: "relative",
      }}
      role="progressbar"
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        style={{
          width: `${clampedProgress}%`,
          backgroundColor: color,
          height: "100%",
          transition: "width 0.3s ease-in-out",
          borderRadius: `${clampedProgress === 100 ? borderRadius : 0}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {showLabel && (
          <span
            style={{
              color: "#fff",
              fontSize: `${height * 0.6}px`,
              marginRight: "8px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            {`${clampedProgress}%`}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
