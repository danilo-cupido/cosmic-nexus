import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props: { handleSearch: (searchTerm: string) => void }) => {
	const [value, setValue] = useState('');
	const handleClick = () => {
		props.handleSearch(value);
	};
	return (
		<div className='flex justify-center'>
			<div className='flex items-center border rounded-lg w-64 p-2'>
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
			<button onClick={handleClick}>Search</button>
		</div>
	);
};

export default SearchBar;
