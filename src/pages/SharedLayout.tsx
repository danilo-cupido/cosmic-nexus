import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SharedLayout = () => {
	return (
		<div className='lg:px-40 md:px-24 px-20'>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default SharedLayout;
