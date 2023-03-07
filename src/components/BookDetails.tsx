import { useState, useEffect } from 'react';
import axios from 'axios';
import { BookAPIData } from '../utils/types';

const BookDetails = () => {
	const [book, setBook] = useState<BookAPIData | null>(null);
	useEffect(() => {
		const fetchBook = async () => {
			const url = `https://www.googleapis.com/books/v1/volumes/saONEAAAQBAJ`;
			try {
				const response = await axios.get<BookAPIData>(url);
				console.log(response.data);
				if (response.data) {
					setBook(response.data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchBook();
	}, []);
	return <div>{book && <p>{book.volumeInfo.title}</p>}</div>;
};

export default BookDetails;
