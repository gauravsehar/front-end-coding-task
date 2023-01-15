import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import Title from './components/Title';
import Playboard from './components/Playboard';
import GameOver from './components/GameOver';
import Footer from './components/Footer';
import ScoreBoard from './components/ScoreBoard';
import { appContext } from './state/context';
import { questionSets } from './types/type';
import { LIVES, USE_MOCK_DATA } from './config/constants';
import fetchData from './utils/fetch';
import getUnique from './utils/functions';

function App() {
	const [questionSets, setQuestionSets] = useState<questionSets>([]);
	const [dispQuesIndex, setDispQuesIndex] = useState<number>(0);
	const [gameOver, setGameOver] = useState<Boolean>(false);
	const [score, setScore] = useState<number>(0);
	const [lives, setLives] = useState<number>(LIVES);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		if (isDark) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDark]);

	useEffect(() => {
		if (
			questionSets.length === 0 ||
			dispQuesIndex + 1 === questionSets.length
		) {
			(async () => {
				const data: any = await fetchData(USE_MOCK_DATA);
				if (data.includes('Error')) {
					console.log(data[1]);
					alert(`Server Error 500: ${data[1]}`);
				} else {
					const q = getUnique(questionSets, data);
					setQuestionSets(q);
				}
			})();
		}
	}, [dispQuesIndex]);

	useEffect(() => {
		if (lives === 0) setGameOver(true);
		else if (dispQuesIndex === questionSets.length) setGameOver(true);
		else setGameOver(false);
	});

	return (
		<appContext.Provider
			value={{
				dispQuesIndex,
				setDispQuesIndex,
				gameOver,
				setGameOver,
				score,
				setScore,
				lives,
				setLives,
				isDark,
				setIsDark,
				setQuestionSets,
			}}
		>
			<Container className='text-center'>
				{questionSets.length > 0 ? (
					<div className='border mt-2 p-4 rounded shadow-sm'>
						<Title />
						{!gameOver && (
							<>
								<ScoreBoard />
								<Playboard questionSet={questionSets[dispQuesIndex]} />
							</>
						)}
						{gameOver && <GameOver />}
						<Footer />
					</div>
				) : (
					<Card>
						<Card.Body>Waiting for API Response.</Card.Body>
					</Card>
				)}
			</Container>
		</appContext.Provider>
	);
}

export default App;
