import PropTypes from 'prop-types';
import StarIcon from '../assets/star.svg';

function throttle(callee, timeout) {
	let timer = null;

	return function perform(...args) {
		if (timer) return;

		timer = setTimeout(() => {
			callee(...args);

			clearTimeout(timer);
			timer = null;
		}, timeout);
	};
}

const Star = ({ currentEl, setCurrentRate }) => {
	const onMouseMove = (currentTarget, clientX, i) => {
		const rect = currentTarget.getBoundingClientRect();
		const width = rect.width;
		const mouseX = clientX - rect.left;
		const percentage = Math.ceil((mouseX / width) * 100);

		const li = document.querySelectorAll('li');
		li.forEach((item, index) => {
			item.style.setProperty('--width', '0%');
			if (index < i) item.style.setProperty('--width', '100%');
		});

		currentTarget.style.setProperty('--width', `${percentage}%`);
		setCurrentRate(Math.floor(i + percentage / 100));
	};

	const throttleMouseMove = throttle(onMouseMove, 50);

	return (
		<li
			className='relative mask hover:scale-125 before:bg-[#FACC15] before:absolute before:h-full before:left-0 before:w-[--width] before:overflow-hidden duration-300'
			onMouseMove={(e) => throttleMouseMove(e.currentTarget, e.clientX, currentEl)}
		>
			<StarIcon className='fill-[#E2E8F0]' />
		</li>
	);
};

Star.propTypes = {
	currentEl: PropTypes.number.isRequired,
	setCurrentRate: PropTypes.func.isRequired,
};

export default Star;
