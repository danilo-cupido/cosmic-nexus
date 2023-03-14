import { useState } from 'react';
import axios from 'axios';
import { SearchResult } from '../utils/types';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

const Books = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [booksData, setBooksData] = useState<SearchResult | null>(null);
	const handleSearch = async () => {
		const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+subject:fiction`;
		try {
			const response = await axios.get<SearchResult>(url);
			if (response.data.items) {
				setBooksData(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<SearchBar
				inputChange={setSearchTerm}
				value={searchTerm}
				handleSearch={handleSearch}
			/>
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
