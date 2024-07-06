import PropTypes from 'prop-types';

import Star from './star';
import { useState } from 'react';

const rateMessages = {
	0: "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
	1: 'We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.',
	2: "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
	3: "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
	4: "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform",
};

const StarList = ({ count }) => {
	const [currentRate, setCurrentRate] = useState(0);

	return (
		<div className='flex flex-col gap-8'>
			<ul className='flex gap-8 flex-grow flex-wrap items-center justify-center'>
				{new Array(count).fill(0).map((_, i) => (
					<Star currentEl={i} key={i} setCurrentRate={setCurrentRate} />
				))}
			</ul>
			<p>{rateMessages[currentRate] ?? rateMessages[4]}</p>
		</div>
	);
};

StarList.propTypes = {
	count: PropTypes.number.isRequired,
};

export default StarList;
