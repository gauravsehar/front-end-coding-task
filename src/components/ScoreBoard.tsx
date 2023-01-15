import React, { useContext } from 'react';
import { Alert, Stack } from 'react-bootstrap';
import { appContext } from '../App';

export default function ScoreBoard() {
	let { score, lives } = useContext(appContext);
	return (
		<Stack direction='horizontal' gap={3}>
			<Alert className='w-50 p-2' key={'success'} variant={'success'}>
				<strong>Score: </strong>
				{score}
			</Alert>
			<Alert className='w-50 p-2' key={'warning'} variant={'warning'}>
				<strong>Lives: </strong>
				{lives}
			</Alert>
		</Stack>
	);
}
