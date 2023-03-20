import { useState, useEffect } from 'react';
import { db } from '../connection';
import { BookAPIData, ReviewData, ReviewInput } from '../utils/types';
import { BsImages } from 'react-icons/bs';
import { formattedDate } from '../utils';
import { fetchReview } from '../utils/db';
import { fetchBook } from '../utils/fetchData';
import ReviewForm from './ReviewForm';
import StarRating from './StarRating';

const BookDetails = () => {
	const [book, setBook] = useState<BookAPIData['volumeInfo'] | null>(null);
	// const [userInput, setUserInput] = useState<ReviewInput>();
	const [bookId, setBookId] = useState('');
	const [usersReviews, setUsersReviews] = useState<ReviewData[] | null>(null);
	const [formOpened, setFormOpened] = useState(false);

	useEffect(() => {
		const id = window.location.pathname.split('/').at(-1);
		if (id) {
			setBookId(id);
			fetchBook(id, setBook);
			fetchReview(id, setUsersReviews);
		}
	}, []);

	const handleSave = async (data: ReviewInput) => {
		await db
			.collection('books')
			.doc(bookId)
			.collection('reviews')
			.add({ ...data, createdAt: new Date() });
		setFormOpened(false);

		fetchReview(bookId, setUsersReviews);
	};

	const handleClick = () => {
		setFormOpened(true);
	};

	return (
		<div className='flex justify-center'>
			{book && (
				<div className='border rounded-md p-10 max-w-screen-lg'>
					<div className='flex'>
						{book.imageLinks ? (
							<img
								src={book.imageLinks.thumbnail}
								className='h-46 pr-4 flex-none bg-cover rounded-t text-center overflow-hidden mr-2 shadow-sm'
								alt={book.title}
							/>
						) : (
							<div className='flex flex-col h-32 w-24 bg-gray-100 mr-2 justify-center items-center rounded shadow-sm'>
								<BsImages className='h-12 w-6 text-gray-400 ' />
								<p className='text-xs text-gray-400 text-center'>
									No image available
								</p>
							</div>
						)}
						<div className='gap-4'>
							<p className='text-xl font-bold'>{book.title}</p>
							<StarRating />
							<div className='pt-4'>
								{book.authors ? (
									<p>
										{book.authors.length > 1 ? 'Authors: ' : 'Author: '}{' '}
										{book.authors.join(', ')}
									</p>
								) : (
									<p>Author: N/A</p>
								)}
								<p>Publisher: {book.publisher}</p>
								<p>Publish date: {formattedDate(book.publishedDate)}</p>
								<p>Language: {book.language}</p>
								<p>Pages: {book.pageCount}</p>
							</div>
						</div>
					</div>
					<div
						dangerouslySetInnerHTML={{ __html: book.description }}
						className='mt-6'
					></div>
					{!formOpened && (
						<button onClick={handleClick} className='border'>
							Write a review
						</button>
					)}
					{formOpened && <ReviewForm handleSave={handleSave} />}
					{usersReviews && (
						<div>
							{usersReviews.map((review, index) => (
								<div key={review.username} className='flex'>
									<p>{review.username}</p>
									<p>{review.title}</p>
									<p>{review.rate}</p>
									<p>{review.comment}</p>
									<p>{review.createdAt.toString()}</p>
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default BookDetails;
