import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props: { handleSearch: (searchTerm: string) => void }) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		const handler = (key: any) => {
			if (key.code === 'Enter') {
				props.handleSearch(value);
			}
		};
		window.addEventListener('keydown', handler);
		return () => {
			window.removeEventListener('keydown', handler);
		};
	}, [props, value]);

	return (
		<div className='flex justify-center'>
			<div className='flex items-center border rounded-lg w-80 p-2'>
				<FaSearch />
				<input
					id='search'
					type='text'
					aria-label='search'
					placeholder='Search'
					className='ml-2 w-full focus:outline-none'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
