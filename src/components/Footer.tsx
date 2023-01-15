import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { appContext } from '../state/context';

export default function Footer() {
	let { isDark, setIsDark } = useContext(appContext);
	const toggle = () => {
		setIsDark((prev: boolean) => !prev);
	};
	return (
		<div className='text-end'>
			<Button
				onClick={toggle}
				variant={isDark ? 'outline-light' : 'outline-dark'}
				size='sm'
			>
				{isDark ? 'Light' : 'Dark'}
			</Button>
		</div>
	);
}
