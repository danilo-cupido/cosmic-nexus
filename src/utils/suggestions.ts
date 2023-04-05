import { BookAPIData } from './types';

export const bookSuggestions = () => {
	const suggestedBooks: BookAPIData[] = [
		{
			id: 'saONEAAAQBAJ',
			volumeInfo: {
				authors: ['Frank Herbert'],
				imageLinks: {
					thumbnail:
						'http://books.google.com/books/content?id=saONEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
				},
				publishedDate: '2005-08-02',
				title: 'Dune',
				description: '',
				pageCount: 0,
				publisher: '',
				language: '',
			},
		},
		{
			id: 'GDwFzwEACAAJ',
			volumeInfo: {
				authors: ['Joe Haldeman'],
				imageLinks: {
					thumbnail:
						'http://books.google.com/books/content?id=GDwFzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
				},
				publishedDate: '2022-11-24',
				title: 'The Forever War',
				description: '',
				pageCount: 0,
				publisher: '',
				language: '',
			},
		},
		{
			id: 'Z7GfEAAAQBAJ',
			volumeInfo: {
				authors: ['Cixin Liu'],
				imageLinks: {
					thumbnail:
						'http://books.google.com/books/content?id=Z7GfEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
				},
				publishedDate: '2015-03-12',
				title: 'The Three-Body Problem',
				description: '',
				pageCount: 0,
				publisher: '',
				language: '',
			},
		},
		{
			id: 'Z7GfEAAAQBAJ',
			volumeInfo: {
				authors: ['Walter M. Miller Jr'],
				imageLinks: {
					thumbnail:
						'http://books.google.com/books/content?id=4RCkBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
				},
				publishedDate: '2014-12-22',
				title: 'A Canticle For Leibowitz',
				description: '',
				pageCount: 0,
				publisher: '',
				language: '',
			},
		},
		{
			id: 'SlNIxp0uSR0C',
			volumeInfo: {
				authors: ['Philip K. Dick'],
				imageLinks: {
					thumbnail:
						'http://books.google.com/books/content?id=SlNIxp0uSR0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
				},
				publishedDate: '2012',
				title: 'Ubik',
				description: '',
				pageCount: 0,
				publisher: '',
				language: '',
			},
		},
		{
			id: 'Rc6OG65y-yAC',
			volumeInfo: {
				authors: ['Mary Wollstonecraft Shelley'],
				imageLinks: {
					thumbnail:
						'http://books.google.com/books/content?id=Rc6OG65y-yAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
				},
				publishedDate: '1993',
				title: 'Frankenstein, Or, The Modern Prometheus',
				description: '',
				pageCount: 0,
				publisher: '',
				language: '',
			},
		},
		{
			id: '0C9ZAAAAYAAJ',
			volumeInfo: {
				authors: ['Isaac Asimov'],
				imageLinks: {
					thumbnail:
						'http://books.google.com/books/content?id=0C9ZAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
				},
				publishedDate: '2008-04-29',
				title: 'Foundation',
				description: '',
				pageCount: 0,
				publisher: '',
				language: '',
			},
		},
		{
			id: 'BjSbO-pY5t8C',
			volumeInfo: {
				authors: ['George Orwell'],
				imageLinks: {
					thumbnail:
						'http://books.google.com/books/content?id=BjSbO-pY5t8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
				},
				publishedDate: '2004-01-29',
				title: 'Nineteen Eighty-Four',
				description: '',
				pageCount: 0,
				publisher: '',
				language: '',
			},
		},
		{
			id: 'Zb2NEAAAQBAJ',
			volumeInfo: {
				authors: ['Arthur C. Clarke'],
				imageLinks: {
					thumbnail:
						'http://books.google.com/books/content?id=Zb2NEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
				},
				publishedDate: '2000-09-01',
				title: '2001: a Space Odyssey',
				description: '',
				pageCount: 0,
				publisher: '',
				language: '',
			},
		},
		{
			id: 'QfuNEAAAQBAJ',
			volumeInfo: {
				authors: ['H. G. Wells'],
				imageLinks: {
					thumbnail:
						'http://books.google.com/books/content?id=QfuNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
				},
				publishedDate: '1984-01-01',
				title: 'The Time Machine',
				description: '',
				pageCount: 0,
				publisher: '',
				language: '',
			},
		},
	];
	return suggestedBooks
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)
		.slice(0, 3);
};
