import { useState, useEffect, FormEvent } from 'react';
import { db } from '../connection';
import { BookAPIData, ReviewData } from '../utils/types';
import { BsImages } from 'react-icons/bs';
import { formattedDate } from '../utils';
import { fetchReview } from '../utils/db';
import { fetchBook } from '../utils/fetchData';
import StarRating from './StarRating';

const BookDetails = () => {
	const [book, setBook] = useState<BookAPIData['volumeInfo'] | null>(null);
	const [formData, setFormData] = useState({
		comment: '',
		rate: 0,
		username: '',
	});
	const [bookId, setBookId] = useState('');
	const [usersReviews, setUsersReviews] = useState<ReviewData[] | null>(null);

	useEffect(() => {
		const id = window.location.pathname.split('/').at(-1);
		setBookId(id!);
		// const fetchBook = async () => {
		// 	const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
		// 	try {
		// 		const response = await axios.get<BookAPIData>(url);
		// 		if (response.data) {
		// 			setBook(response.data.volumeInfo);
		// 		}
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// };
		if (id) {
			fetchBook(id, setBook);
			fetchReview(id, setUsersReviews);
		}
	}, []);

	const handleSave = async (e: FormEvent) => {
		e.preventDefault();
		await db
			.collection('books')
			.doc(bookId)
			.collection('reviews')
			.add({ ...formData, createdAt: new Date() });

		fetchReview(bookId, setUsersReviews);
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
							<p className='text-xl font-bold pb-4'>{book.title}</p>
							{book.authors ? (
								<p>
									{book.authors.length > 1 ? 'Authors: ' : 'Author: '}{' '}
									{book.authors.join(', ')}
								</p>
							) : (
								<p>Author: N/A</p>
							)}
							<div>
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
					<div className='border'>
						<form>
							<input
								type='text'
								onChange={(e) =>
									setFormData({ ...formData, username: e.target.value })
								}
								placeholder='Username'
								className='border'
							/>
							<input
								type='number'
								onChange={(e) =>
									setFormData({ ...formData, rate: Number(e.target.value) })
								}
								min='1'
								max='5'
								placeholder='Score'
								className='border'
							/>
							<input
								type='text'
								onChange={(e) =>
									setFormData({ ...formData, comment: e.target.value })
								}
								placeholder='Review'
								className='border'
							/>
							<button onClick={handleSave}>Save</button>
						</form>
					</div>
					{usersReviews && (
						<div>
							{usersReviews.map((review, index) => (
								<div key={index} className='flex'>
									<p>{review.username}</p>
									<p>{review.rate}</p>
									<p>{review.comment}</p>
									<p>{review.createdAt.toString()}</p>
								</div>
							))}
						</div>
					)}
				</div>
			)}
			<StarRating />
		</div>
	);
};

export default BookDetails;
