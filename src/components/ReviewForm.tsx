import { FormEvent, useState } from 'react';
import { ReviewInput } from '../utils/types';
import StarRating from './StarRating';

const ReviewForm = (props: { handleSave: (data: ReviewInput) => void }) => {
	const [formData, setFormData] = useState({
		comment: '',
		rate: 0,
		title: '',
		username: '',
	});

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		props.handleSave(formData);
	};
	return (
		<div className='border p-6 rounded shadow-sm my-4'>
			<form className='flex flex-col'>
				<h1 className='text-lg font-bold mb-4'>Create Review</h1>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					type='text'
					onChange={(e) =>
						setFormData({ ...formData, username: e.target.value })
					}
					placeholder='Username'
					className='border mb-3 p-1 text-sm'
				/>
				<label htmlFor='title'>Title</label>
				<input
					id='title'
					type='text'
					onChange={(e) => setFormData({ ...formData, title: e.target.value })}
					placeholder='Title'
					className='border mb-3 p-1 text-sm'
				/>
				<label htmlFor='rating'>Rating</label>
				<StarRating />
				{/* <input
					id='rating'
					type='number'
					onChange={(e) =>
						setFormData({ ...formData, rate: Number(e.target.value) })
					}
					min='1'
					max='5'
					placeholder='Score'
					className='border'
				/> */}
				<label htmlFor='review' className='mt-3'>
					Review
				</label>
				<textarea
					id='review'
					onChange={(e) =>
						setFormData({ ...formData, comment: e.target.value })
					}
					placeholder='Review'
					className='border mb-3 p-1 text-sm'
				/>
				<button
					onClick={handleSubmit}
					className='border w-fit py-1 px-3 rounded shadow-sm bg-gray-100'
				>
					Save
				</button>
			</form>
		</div>
	);
};

export default ReviewForm;
