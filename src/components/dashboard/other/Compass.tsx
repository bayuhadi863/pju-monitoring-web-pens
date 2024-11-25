import { FC } from 'react';

type CompassProps = {
    direction: number;
};

const Compass: FC<CompassProps> = ({ direction }) => {
    return (
        <svg
            className='w-36 h-36'
            viewBox='0 0 100 100'
        >
            {/* Compass circle */}
            <circle
                cx='50'
                cy='50'
                r='45'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
            />

            {/* Cardinal direction markers */}
            {['N', 'E', 'S', 'W'].map((dir) => (
                <text
                    key={dir}
                    x={dir === 'N' || dir === 'S' ? 50 : dir === 'E' ? 90 : 10}
                    y={dir === 'N' ? 10 : dir === 'S' ? 90 : 50}
                    textAnchor='middle'
                    dominantBaseline='middle'
                    fontSize='8'
                    stroke='currentColor'
                    strokeWidth='1'
                >
                    {dir}
                </text>
            ))}

            {/* Wind direction arrow */}
            <g transform={`rotate(${direction} 50 50)`}>
                <path
                    d='M50 10 L55 50 L50 45 L45 50 Z'
                    fill='currentColor'
                />
            </g>
        </svg>
    );
};

export default Compass;
