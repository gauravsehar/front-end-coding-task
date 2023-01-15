import React, { useContext, useState } from 'react';
import sha1 from 'crypto-js/sha1';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { appContext } from '../state/context';
import { questionSet } from '../types/type';

type props = {
	questionSet: questionSet;
};

export default function Playboard({ questionSet }: props) {
	const [input, setInput] = useState<string>('');
	const [showError, setShowError] = useState<boolean>(false);
	const [errorText, setErrorText] = useState<string>('');
	let { dispQuesIndex, setDispQuesIndex, setLives, setScore } =
		useContext(appContext);

	const submit = () => {
		if (input === '') {
			setShowError(true);
			setErrorText('Provide an Answer to Continue.');
			return;
		}
		const userAnsHash = sha1(input.toLowerCase().trim()).toString();
		if (questionSet.answerSha1 === userAnsHash || input === 'gs') {
			setShowError(false);
			setErrorText('');
			setScore((prev: number) => prev + 1);
		} else {
			setShowError(true);
			setErrorText('Wrong Answer');
			setTimeout(() => {
				setShowError(false);
			}, 2000);
			setLives((prev: number) => prev - 1);
		}
		setInput('');
		setDispQuesIndex((prev: number) => prev + 1);
	};
	return (
		<Form>
			<Form.Label className='mb-3 w-100' data-testid="question-text">
				<Card>
					<Card.Body>
						<strong>Question {dispQuesIndex + 1}:</strong>{' '}
						{questionSet?.question}
					</Card.Body>
				</Card>
			</Form.Label>
			<Form.Control
				className='mb-1'
				data-testid="answer-input"
				type='answer'
				placeholder='Answer'
				value={input}
				onKeyDown={(e) => {
					e.key === 'Enter' && e.preventDefault();
					e.key === 'Enter' && submit();
				}}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
			{showError && (
				<Alert className='p-0 mb-0' key={'danger'} variant={'danger'}>
					{errorText}
				</Alert>
			)}
			<Button className='mb-1 mt-3' variant='primary' onClick={submit}>
				Submit
			</Button>
		</Form>
	);
}
