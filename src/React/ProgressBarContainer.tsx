import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";

export const ProgressBarContainer: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const ref = useRef<number | null>(null);

  useEffect(() => {
    ref.current = window.setInterval(() => {
      if (progress >= 100) {
        ref.current !== null && clearInterval(ref.current);
      } else {
        setProgress((prev) => prev + 1);
      }
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Progress bar</h1>
      <ProgressBar
        progress={progress}
        height={30}
        backgroundColor="#f0f0f0"
        color="#4caf50"
        borderRadius={15}
        showLabel={true}
      />
    </div>
  );
};
