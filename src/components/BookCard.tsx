import { BookAPIData } from '../utils/types';

const BookCard = (props: { bookData: BookAPIData }) => {
	return (
		<div className='flex'>
			<div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal'>
				<img
					className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
					src={props.bookData.volumeInfo.imageLinks.thumbnail}
					alt={props.bookData.volumeInfo.title}
				/>
				<div className='flex-col'>
					<div className='text-gray-900 font-bold text-xl mb-2'>
						Title: {props.bookData.volumeInfo.title}
					</div>
					<div className='text-gray-900 text-xl mb-2'>
						Author(s): {props.bookData.volumeInfo.authors}
					</div>
					<div className='text-gray-900 text-xl mb-2'>
						Publish date: {props.bookData.volumeInfo.publishedDate}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
