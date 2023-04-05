import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { bookSuggestions } from '../utils/suggestions';
import { BookAPIData } from '../utils/types';

const Suggestions = () => {
	const [suggestedBooks, setSuggestedBooks] = useState<BookAPIData[]>();
	useEffect(() => {
		const books = bookSuggestions();
		setSuggestedBooks(books);
	}, []);

	return (
		<>
			{' '}
			{suggestedBooks && (
				<div className='grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-6 mb-6'>
					{suggestedBooks.map((book, index) => {
						return <BookCard bookData={book} key={`book-${index}`} />;
					})}
				</div>
			)}
		</>
	);
};

export default Suggestions;
