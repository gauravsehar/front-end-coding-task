import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import Title from './components/Title';
import Playboard from './components/Playboard';
import GameOver from './components/GameOver';
import Footer from './components/Footer';
import { mockApi } from './mockData';
import ScoreBoard from './components/ScoreBoard';

export type questionSet = {
	question: string;
	answerSha1: string;
};

type questionSets = questionSet[];

export type AppContext = {
	dispQuesIndex: number;
	setDispQuesIndex: Function;
	gameOver: Boolean;
	setGameOver: Function;
	score: number;
	setScore: Function;
	lives: number;
	setLives: Function;
	isDark: Boolean;
	setIsDark: Function;
};

export const appContext = createContext<AppContext>({
	dispQuesIndex: 0,
	setDispQuesIndex: () => {},
	gameOver: false,
	setGameOver: () => {},
	score: 0,
	setScore: () => {},
	lives: 3,
	setLives: () => {},
	isDark: false,
	setIsDark: () => {},
});

async function fetchData() {
	try {
		// const resp = await fetch('https://eolnq9n0ealtrwh.m.pipedream.net/');
		// const { questions } = await resp.json();
		// return questions;

		return new Promise<questionSets>((resolve) => {
			setTimeout(() => {
				resolve(mockApi);
			}, 500);
		});
	} catch (err) {
		return ['Error', err];
	}
}

function getUnique(currQuesSet: questionSets, newQuesSet: questionSets) {
	return Array.from(
		[...currQuesSet, ...newQuesSet]
			.reduce((acc, curr) => acc.set(curr.question, curr), new Map())
			.values()
	);
}

function App() {
	const [questionSets, setQuestionSets] = useState<questionSets>([]);
	const [dispQuesIndex, setDispQuesIndex] = useState<number>(0);
	const [gameOver, setGameOver] = useState<Boolean>(false);
	const [score, setScore] = useState<number>(0);
	const [lives, setLives] = useState<number>(3);
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
				const data: any = await fetchData();
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
