import axios from 'axios';
import { BookAPIData, SearchResult } from './types';

export const fetchBook = async (
	id: string,
	setBook: (books: BookAPIData['volumeInfo']) => void
) => {
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

export const fetchBooks = async (
	searchInput: string,
	setNoResult: (value: boolean) => void,
	setBooksData: (booksData: SearchResult | null) => void
) => {
	const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}+subject:fiction&maxResults=12`;
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
};

// export 	const showMore = async (searchTerm: string, startIndex: number, setStartIndex: (index: number) => void, setBooksData: (booksData: SearchResult | null) => void) => {
//     const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+subject:fiction&startIndex=${startIndex}&maxResults=12`;
//     try {
//         const response = await axios.get<SearchResult>(url);
//         setStartIndex(startIndex + 12);
//         const updatedBooksData = booksData!;
//         updatedBooksData.items = [...booksData!.items, ...response.data.items];
//         setBooksData(updatedBooksData);
//     } catch (error) {
//         console.log(error);
//     }
// };
