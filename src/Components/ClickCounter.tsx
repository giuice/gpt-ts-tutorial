import React from 'react';

interface ClickCounterProps {
	count: number;
	incrementCount: () => void;
}

const ClickCounter: React.FC<ClickCounterProps> = ({ count, incrementCount }) => {
	return (
		<div>
			<button onClick={incrementCount}>Clicked {count} times</button>
		</div>
	);
};

export default ClickCounter;
