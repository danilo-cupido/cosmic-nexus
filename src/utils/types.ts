import { ReactNode } from 'react';

export type ContentWrapper = {
	children: ReactNode;
};

export interface BookAPIData {
	id: string;
	volumeInfo: {
		authors: string[];
		imageLinks: { thumbnail: string };
		publishedDate: string;
		title: string;
	};
}
export interface AxiosData {
	items: BookAPIData[];
	kind: string;
	totalItems: number;
}

export interface BookDBData {
	title: string;
}

export interface MovieDBData {
	title: string;
}

export interface ComicDBData {
	title: string;
}
