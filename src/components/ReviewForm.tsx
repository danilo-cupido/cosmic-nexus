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
	const [rate, setRate] = useState(0);
	const [errorMsg, setErrorMsg] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!rate) {
			setErrorMsg('Rate can not be zero');
		}
		console.log(rate);
		// props.handleSave(formData);
	};
	return (
		<div className='border p-6 rounded shadow-sm my-4'>
			<form onSubmit={handleSubmit} className='flex flex-col'>
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
					required
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
				<div className='flex items-start'>
					<StarRating setRate={setRate} />
					{errorMsg && !rate && (
						<p className='ml-2 text-sm text-red-400'>{errorMsg}</p>
					)}
				</div>
				<label htmlFor='review' className='mt-3'>
					Review
				</label>
				<textarea
					id='review'
					onChange={(e) =>
						setFormData({ ...formData, comment: e.target.value })
					}
					placeholder='Review'
					className='border mb-3 p-1 text-sm h-96'
				/>
				<button
					type='submit'
					className='border w-fit py-1 px-3 rounded shadow-sm bg-gray-100'
				>
					Save
				</button>
			</form>
		</div>
	);
};

export default ReviewForm;
