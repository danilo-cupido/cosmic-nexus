import { ReactNode } from 'react';

export type ContentWrapper = {
	children: ReactNode;
};

export interface Book {
	title: string;
}

export interface Movie {
	title: string;
}

export interface Comic {
	title: string;
}
