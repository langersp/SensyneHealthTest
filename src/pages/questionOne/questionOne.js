import React from 'react';
import Button from '@material-ui/core/Button';

const QuestionOne = () => {
	const [label] = React.useState("I've been clicked: ");
	const [counter, setCounter] = React.useState(0);
	
	const handleOnClick = () => setCounter(counter + 1);

	return (
		<div style={{marginTop: 48}}>
			<Button variant="contained" onClick={handleOnClick}>
			{label} {counter} times
			</Button>
		</div>
	);
}

export default QuestionOne