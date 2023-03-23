import { formattedDate } from '../utils';
import { ReviewData } from '../utils/types';

const ReviewCard = (props: { review: ReviewData }) => {
	return (
		<div key={props.review.username} className='flex'>
			<p>{props.review.username}</p>
			<p>{props.review.title}</p>
			<p>{props.review.rate}</p>
			<p>{props.review.comment}</p>
			<p>{formattedDate(props.review.createdAt.toDate().toDateString())}</p>
		</div>
	);
};

export default ReviewCard;
