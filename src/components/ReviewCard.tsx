import { formattedDate } from '../utils';
import { ReviewData } from '../utils/types';
import StarRating from './StarRating';

const ReviewCard = (props: { review: ReviewData }) => {
	return (
		<div
			key={props.review.username}
			className='flex flex-col border p-6 rounded shadow-sm my-4'
		>
			<p className='text-gray-900 font-bold text-md mb-1'>
				{props.review.username}
			</p>
			<p className='text-gray-900 font-bold text-md mb-1'>
				{props.review.title}
			</p>
			<StarRating rate={props.review.rate} />
			<p>{props.review.comment}</p>
			<p className='text-gray-700 text-sm'>
				{formattedDate(props.review.createdAt.toDate().toDateString())}
			</p>
		</div>
	);
};

export default ReviewCard;
