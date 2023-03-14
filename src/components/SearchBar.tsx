import { MouseEventHandler } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props: {
	inputChange: (searchTerm: string) => void;
	value: string;
	handleSearch: MouseEventHandler;
}) => {
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
					value={props.value}
					onChange={(e) => props.inputChange(e.target.value)}
				/>
			</div>
			<button onClick={props.handleSearch}>Search</button>
		</div>
	);
};

export default SearchBar;
