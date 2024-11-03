import { useEffect, useState } from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ isAnimating }: { isAnimating: boolean }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isAnimating) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return oldProgress + 10;
        });
      }, 100);
    } else {
      setProgress(100);
    }
  }, [isAnimating]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
