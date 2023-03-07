import { Link } from 'react-router-dom';
import { BookAPIData } from '../utils/types';

const BookCard = (props: { bookData: BookAPIData }) => {
	return (
		<Link to={`/books/${props.bookData.id}`}>
			<div className='border border-gray-300 bg-white rounded-lg p-4 flex leading-normal shadow-sm'>
				<img
					className='h-32 flex-none bg-cover rounded-t text-center overflow-hidden mr-2'
					src={props.bookData.volumeInfo.imageLinks.thumbnail}
					alt={props.bookData.volumeInfo.title}
				/>
				<div className='mt-1'>
					<p className='text-gray-900 font-bold text-md mb-1'>
						{props.bookData.volumeInfo.title}
					</p>
					<p className='text-gray-700 text-sm mb-1'>
						by {props.bookData.volumeInfo.authors.join(', ')}
					</p>
					<p className='text-gray-700 text-sm'>
						{props.bookData.volumeInfo.publishedDate
							.split('-')
							.reverse()
							.join('-')}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default BookCard;
