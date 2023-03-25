import { useState } from 'react';
import { SearchResult } from '../utils/types';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import { fetchBooks } from '../utils/fetchData';
import { Triangle } from 'react-loader-spinner';
import robot from '../assets/robot.png';

const Books = () => {
	const [booksData, setBooksData] = useState<SearchResult | null>(null);
	const [loading, setLoading] = useState(false);
	const [noResult, setNoResult] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [startIndex, setStartIndex] = useState(12);

	const handleSearch = async (searchInput: string) => {
		setNoResult(false);
		setBooksData(null);
		setLoading(true);
		setSearchTerm(searchInput);

		const response = await fetchBooks(searchInput);
		if (response) {
			if (!response.totalItems) {
				setNoResult(true);
				setBooksData(null);
			} else {
				setBooksData(response);
			}
		}
		setLoading(false);
	};

	const showMore = async () => {
		const response = await fetchBooks(searchTerm, `&startIndex=${startIndex}`);
		setStartIndex(startIndex + 12);
		const updatedBooksData = booksData!;
		if (response) {
			updatedBooksData.items = [...booksData!.items, ...response.items];
			setBooksData(updatedBooksData);
		}
	};

	return (
		<section>
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
				<>
					<div className='grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-6 mb-6'>
						{booksData.items.map((bookData, index) => {
							return <BookCard bookData={bookData} key={`book-${index}`} />;
						})}
					</div>
					<button type='button' onClick={showMore}>
						Show more
					</button>
				</>
			)}
			{noResult && (
				<div className='flex justify-center items-center mt-20'>
					<img src={robot} alt='A disappointed robot' className='w-auto h-16' />
					<p className="text-2xl font-['RobotReaversItalic'] pl-6">
						No Books found
					</p>
				</div>
			)}
		</section>
	);
};

export default Books;
