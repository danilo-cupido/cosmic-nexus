import { ReviewData, ReviewInput } from './types';
import { db } from '../connection';
import { getDocs, collection } from 'firebase/firestore';

export const fetchReview = async (
	id: string,
	setUsersReviews: (reviews: ReviewData[]) => void
) => {
	const reviews: ReviewData[] = [];
	const docRef = db.collection('books').doc(id);
	const reviewDocs = await getDocs(collection(docRef, 'reviews'));

	reviewDocs.forEach((review) => {
		reviews.push(review.data() as ReviewData);
	});
	setUsersReviews(reviews);
};

export const postReview = async (id: string, data: ReviewInput) => {
	await db
		.collection('books')
		.doc(id)
		.collection('reviews')
		.add({ ...data, createdAt: new Date() });
};
