import { useState, useEffect } from 'react';
import './Loading.scss';

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 10;
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-container">
            <div 
                className="progress-circle" 
                style={{ '--progress': progress } as React.CSSProperties}>
                <div className="progress-label">{progress}%</div>
            </div>
            <div className="skeleton-title"></div>
            <div className="skeleton-description"></div>
        </div>
    );
};

export default Loading;
