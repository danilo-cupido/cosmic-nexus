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

export const fetchBooks = async (searchInput: string, query?: string) => {
	const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}+subject:fiction&maxResults=12${
		query ?? ''
	}`;
	try {
		const response = await axios.get<SearchResult>(url);
		if (response.data) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
	}
};
