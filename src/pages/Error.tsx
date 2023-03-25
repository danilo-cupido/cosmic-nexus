import error from '../assets/error.png';

const Error = () => {
	return (
		<section className='flex justify-center items-center mt-20'>
			<img src={error} alt='404 error page not found' className='h-96 w-auto' />
		</section>
	);
};

export default Error;
