import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Playboard from './components/Playboard';
import { mockApi } from './mockData';
import GameOver from './components/GameOver';

test('Is question, text input, button, score and chances left are being displayed.', async () => {
	render(<App />);
	await new Promise((r) => setTimeout(r, 5000));
	const question = screen.getByText(/Question/i);
	const input = await screen.findByTestId(`answer-input`);
	const button = screen.getByText(/Submit/i);
	const score = screen.getByText(/Score:/i);
	const lives = screen.getByText(/Lives:/i);
	expect(question).toBeInTheDocument();
	expect(input).toBeInTheDocument();
	expect(button).toBeInTheDocument();
	expect(score).toBeInTheDocument();
	expect(lives).toBeInTheDocument();
});

test('Correct question text displayed.', async () => {
	render(<Playboard questionSet={mockApi[0]} />);
	const questionField = screen.getByTestId('question-text');
	expect(questionField).toBeInTheDocument();
	expect(questionField).toHaveTextContent(mockApi[0].question);
});

test('GameOver working correctly.', async () => {
	render(<GameOver />);
	const finalScore = screen.getByText(/Final Score:/i);
	const playAgainButton = screen.getByText(/Play Again/i);
	expect(finalScore).toBeInTheDocument();
	expect(playAgainButton).toBeInTheDocument(); 
});
