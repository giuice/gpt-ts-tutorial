import React, { useState } from 'react';

interface WithClickCounterProps {
	count: number;
	incrementCount: () => void;
}

const withClickCounter = (
	WrappedComponent: React.ComponentType<WithClickCounterProps>
) => {
	const ClickCounter: React.FC = () => {
		const [count, setCount] = useState(0);

		const incrementCount = () => {
			setCount(count + 1);
		};

		return (
			<WrappedComponent count={count} incrementCount={incrementCount} />
		);
	};

	return ClickCounter;
};

export default withClickCounter;
