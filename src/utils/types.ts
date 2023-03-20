import { ReactNode } from 'react';

export type ContentWrapper = {
	children: ReactNode;
};

export type BookAPIData = {
	id: string;
	volumeInfo: {
		authors?: string[];
		imageLinks?: { thumbnail: string };
		publishedDate: string;
		title: string;
		description: string;
		pageCount: number;
		publisher: string;
		language: string;
	};
};

export type ReviewInput = {
	username: string;
	title: string;
	rate: number;
	comment: string;
};

export interface ReviewData extends ReviewInput {
	createdAt: Date;
}

export type SearchResult = {
	items: BookAPIData[];
	kind: string;
	totalItems: number;
};

export type BookDBData = {
	title: string;
};

export type MovieDBData = {
	title: string;
};

export type ComicDBData = {
	title: string;
};
