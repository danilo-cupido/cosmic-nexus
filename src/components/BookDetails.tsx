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
		<div>
			{book && (
				<div>
					{book.imageLinks ? (
						<img
							src={book.imageLinks.thumbnail}
							className='h-32 flex-none bg-cover rounded-t text-center overflow-hidden mr-2 shadow-sm'
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
					<p>{book.title}</p>
					{book.authors ? (
						<p>
							{book.authors.length > 1 ? 'Authors: ' : 'Author: '}{' '}
							{book.authors.join(', ')}
						</p>
					) : (
						<p>Author: N/A</p>
					)}
					<p>
						Publish date: {book.publishedDate.split('-').reverse().join('-')}
					</p>
					<p>Description: </p>{' '}
					<div dangerouslySetInnerHTML={{ __html: book.description }}></div>
					<p>Pages: {book.pageCount}</p>
					<p>Language: {book.language}</p>
					<p>Publisher: {book.publisher}</p>
				</div>
			)}
		</div>
	);
};

export default BookDetails;
