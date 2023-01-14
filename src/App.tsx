import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Container, Form, Stack, Card } from 'react-bootstrap';

function App() {
	return (
		<Container className='text-center' data-bs-theme='dark'>
			<div className='border mt-2 p-4 rounded shadow-sm'>
				<h1 className='mb-3'>Sauce Labs Coding Task</h1>
				<Form>
					<Stack direction='horizontal' gap={3}>
						<Alert className='w-50 p-2' key={'success'} variant={'success'}>
							<strong>Score: </strong>50
						</Alert>
						<Alert className='w-50 p-2' key={'warning'} variant={'warning'}>
							<strong>Lives: </strong>3
						</Alert>
					</Stack>
					<Form.Label className='mb-3 w-100'>
						<Card>
							<Card.Body>
								<strong>Question:</strong> Atlantic __________ are able to leap
								15 feet high. Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Dolore veritatis asperiores alias quam harum,
								sequi aspernatur voluptates iste, nesciunt error quisquam quae
								aut earum, repellendus illum quis. Esse, illum ad. Lorem ipsum
								dolor sit, amet consectetur adipisicing elit. A doloremque
								magnam accusamus maiores commodi ut quidem, possimus esse
								aspernatur, enim culpa voluptate corporis itaque! Doloribus
								commodi alias debitis quidem eum?
							</Card.Body>
						</Card>
					</Form.Label>
					<Form.Control className='mb-1' type='answer' placeholder='Answer' />
					<Alert className='p-0' key={'danger'} variant={'danger'}>
						Alert Text
					</Alert>
					<Button className='mb-1' variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
				<Card className='m-5'>
					<h2 className='p-5'>
						Your Final Score: <strong>30</strong>
					</h2>
					<Button className='m-5' variant='primary' size='lg'>
						Play Again?
					</Button>
				</Card>
				<div className='text-end'>
					<Button variant='outline-dark' size='sm'>
						Dark
					</Button>
				</div>
			</div>
		</Container>
	);
}

export default App;
