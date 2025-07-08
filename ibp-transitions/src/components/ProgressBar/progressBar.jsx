import { useEffect, useState } from 'react';

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress < 100) {
            setTimeout(() => {
                setProgress(progress + 5);
            }, 100);
        }
    }, [progress]);

    const size = 120;
    const strokeWidth = 10;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <p>Progress Value is {progress}</p> */}
            <svg width={size} height={size}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#eee"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="red"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="1.5em"
                    fill="black"
                >
                    {progress}%
                </text>
            </svg>
        </div>
    );
}

export default ProgressBar;