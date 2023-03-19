import React from 'react'

interface ChildComponentProps {
	onClick: () => void;
}

const ChildComponent: React.FC<ChildComponentProps> = ({onClick}) => {
	console.log('ChildComponent Rendered');
	return <button onClick={onClick}>Click Me</button>
}

export default React.memo(ChildComponent);

