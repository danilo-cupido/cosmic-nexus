import error from '../assets/error.png';

const Error = () => {
	return (
		<div className='flex justify-center items-center mt-20'>
			<img src={error} alt='404 error page not found' className='h-96 w-auto' />
		</div>
	);
};

export default Error;
