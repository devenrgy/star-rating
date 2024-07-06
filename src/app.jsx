import StarList from './components/star-list';

const App = () => {
	console.log('rerender');
	return (
		<main className='flex flex-col gap-8 text-center text-balance justify-between max-w-[775px] rounded-2xl p-16 bg-white'>
			<h1 className='text-2xl font-bold'>How many stars would you give to our Online Code Editor?</h1>
			<StarList count={5} />
		</main>
	);
};

export default App;
