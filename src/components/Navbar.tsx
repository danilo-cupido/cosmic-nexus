import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
	const categories = [
		{ name: 'Books', url: '/books' },
		{ name: 'Movies', url: '/movies' },
		{ name: 'Comic Books', url: '/comics' },
	];
	return (
		<div className='flex bg-transparent items-center'>
			<div className='flex items-center mr-20'>
				<img src={logo} alt='Cosmic Nexus logo' className='w-20' />
				<p>COSMIC NEXUS</p>
			</div>
			<ul className='flex'>
				{categories.map((category) => {
					return (
						<li className='mr-6'>
							<Link to={category.url}>{category.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
