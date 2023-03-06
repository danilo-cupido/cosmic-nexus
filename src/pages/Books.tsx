import { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { AxiosData } from '../utils/types';
import BookCard from '../components/BookCard';

const Books = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [booksData, setBooksData] = useState<AxiosData | null>(null);
	const handleSearch = async () => {
		const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+subject:fiction`;
		try {
			const response = await axios.get<AxiosData>(url);
			console.log(response.data);
			if (response.data.items) {
				setBooksData(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div className='flex justify-center'>
				<input
					id='search'
					type='text'
					aria-label='search'
					placeholder='Search'
					className='border'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button onClick={handleSearch}>
					<FaSearch />
				</button>
			</div>
			{booksData && (
				<div className='grid gap-4 grid-cols-4 mt-6'>
					{booksData.items.map((bookData, index) => {
						return <BookCard bookData={bookData} key={`book-${index}`} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Books;
