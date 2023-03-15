import { useState } from 'react';
import axios from 'axios';
import { SearchResult } from '../utils/types';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import { Triangle } from 'react-loader-spinner';

const Books = () => {
	const [booksData, setBooksData] = useState<SearchResult | null>(null);
	const [loading, setLoading] = useState(false);
	const [noResult, setNoResult] = useState(false);
	const handleSearch = async (searchTerm: string) => {
		setNoResult(false);
		setBooksData(null);
		setLoading(true);
		const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+subject:fiction&maxResults=16`;
		try {
			const response = await axios.get<SearchResult>(url);
			if (response.data) {
				if (!response.data.totalItems) {
					setNoResult(true);
					setBooksData(null);
				} else {
					setBooksData(response.data);
				}
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};
	return (
		<div>
			<SearchBar handleSearch={handleSearch} />
			{loading && (
				<div className='flex justify-center pt-40'>
					<Triangle
						height='80'
						width='80'
						color='magenta'
						ariaLabel='triangle-loading'
						wrapperStyle={{}}
						visible={true}
					/>
				</div>
			)}
			{booksData && (
				<div className='grid gap-4 grid-cols-4 mt-6'>
					{booksData.items.map((bookData, index) => {
						return <BookCard bookData={bookData} key={`book-${index}`} />;
					})}
				</div>
			)}
			{noResult && (
				<p className="flex justify-center text-9xl font-['NeonRave'] mt-64">
					No Books found
				</p>
			)}
		</div>
	);
};

export default Books;
