import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { LIVES } from '../config/constants';
import { appContext } from '../state/context';
import { questionSets } from '../types/type';

export default function GameOver() {
	let {
		score,
		setDispQuesIndex,
		setScore,
		setLives,
		setGameOver,
		setQuestionSets,
	} = useContext(appContext);
	const again = () => {
		setDispQuesIndex(0);
		setScore(0);
		setLives(LIVES);
		setGameOver(false);
		setQuestionSets((prevQuesSet: questionSets) =>
			prevQuesSet.sort(() => 0.5 - Math.random())
		);
	};
	return (
		<Card className='m-5'>
			<h2 className='p-5'>
				Your Final Score: <strong>{score}</strong>
			</h2>
			<Button className='m-5' variant='primary' size='lg' onClick={again}>
				Play Again?
			</Button>
		</Card>
	);
}
