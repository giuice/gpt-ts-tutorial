// MyComponent.tsx
import React, { memo } from 'react';

interface MyComponentProps {
	text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
	console.log('MyComponent rendered');
	return <div>{text}</div>;
};

export default memo(MyComponent);
