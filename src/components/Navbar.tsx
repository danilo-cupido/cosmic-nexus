import { Link } from 'react-router-dom';

const Navbar = () => {
	const categories = [
		{ name: 'Books', url: '/books' },
		{ name: 'Movies', url: '/movies' },
		{ name: 'Comic Books', url: '/comics' },
	];
	return (
		<div>
			<ul className='flex'>
				{categories.map((category) => {
					return (
						<li>
							<Link to={category.url}>{category.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
