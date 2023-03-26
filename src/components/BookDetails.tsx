import { useState, useEffect } from 'react';
import { BookAPIData, ReviewData, ReviewInput } from '../utils/types';
import { BsImages } from 'react-icons/bs';
import { formattedDate } from '../utils';
import { fetchReview, postReview } from '../utils/db';
import { fetchBook } from '../utils/fetchData';
import ReviewForm from './ReviewForm';
import StarRating from './StarRating';
import ReviewCard from './ReviewCard';

const BookDetails = () => {
	const [book, setBook] = useState<BookAPIData['volumeInfo'] | null>(null);
	const [bookId, setBookId] = useState('');
	const [usersReviews, setUsersReviews] = useState<ReviewData[] | null>(null);
	const [formOpened, setFormOpened] = useState(false);
	const [averageRating, setAverageRating] = useState(0);

	useEffect(() => {
		const id = window.location.pathname.split('/').at(-1);
		if (id) {
			setBookId(id);
			fetchBook(id, setBook);
			fetchReview(id, setUsersReviews, setAverageRating);
		}
	}, []);

	const handleSave = (data: ReviewInput) => {
		postReview(bookId, data);
		setFormOpened(false);
		fetchReview(bookId, setUsersReviews, setAverageRating);
	};

	const handleClick = () => {
		setFormOpened(true);
	};

	return (
		<div className='flex justify-center'>
			{book && (
				<div className='border rounded-md p-10 max-w-screen-lg bg-white'>
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
							{usersReviews && usersReviews.length > 0 ? (
								<div>
									<StarRating rate={averageRating} />
									<p>{usersReviews.length} reviews</p>
									{!formOpened && (
										<button
											type='button'
											onClick={handleClick}
											className='border w-fit py-1 px-3 rounded shadow-sm bg-gray-100'
										>
											Write a review
										</button>
									)}
								</div>
							) : (
								<a
									href='#reviewForm'
									type='button'
									onClick={handleClick}
									className='underline underline-offset-2'
								>
									Be the first to write a review
								</a>
							)}
							<div className='pt-4'>
								{book.authors ? (
									<p>
										<b className='text-gray-700'>
											{book.authors.length > 1 ? 'Authors: ' : 'Author: '}
										</b>{' '}
										{book.authors.join(', ')}
									</p>
								) : (
									<p>
										<b className='text-gray-700'>Author:</b> N/A
									</p>
								)}
								<p>
									<b className='text-gray-700'>Publisher:</b> {book.publisher}
								</p>
								<p>
									<b className='text-gray-700'>Publish date:</b>{' '}
									{formattedDate(book.publishedDate)}
								</p>
								<p>
									<b className='text-gray-700'>Language:</b> {book.language}
								</p>
								<p>
									<b className='text-gray-700'>Pages:</b> {book.pageCount}
								</p>
							</div>
						</div>
					</div>
					<div
						dangerouslySetInnerHTML={{ __html: book.description }}
						className='mt-6'
					></div>
					{formOpened && (
						<ReviewForm handleSave={handleSave} setFormOpened={setFormOpened} />
					)}
					{usersReviews && (
						<div>
							{usersReviews.map((review) => (
								<ReviewCard review={review} key={review.username} />
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default BookDetails;
