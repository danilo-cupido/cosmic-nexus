import { useState, useEffect } from 'react';
import axios from 'axios';
import { BookAPIData } from '../utils/types';
import { BsImages } from 'react-icons/bs';

const BookDetails = () => {
	const [book, setBook] = useState<BookAPIData['volumeInfo'] | null>(null);
	useEffect(() => {
		const fetchBook = async () => {
			const id = window.location.pathname.split('/').at(-1);
			const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
			try {
				const response = await axios.get<BookAPIData>(url);
				if (response.data) {
					setBook(response.data.volumeInfo);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchBook();
	}, []);
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
								<p>
									Publish date:{' '}
									{book.publishedDate.split('-').reverse().join('-')}
								</p>
								<p>Language: {book.language}</p>
								<p>Pages: {book.pageCount}</p>
							</div>
						</div>
					</div>
					<div
						dangerouslySetInnerHTML={{ __html: book.description }}
						className='mt-6'
					></div>
				</div>
			)}
		</div>
	);
};

export default BookDetails;
