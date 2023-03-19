import { useState } from 'react';
import { GiRingedPlanet } from 'react-icons/gi';

const StarRating = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	return (
		<div className='star-rating'>
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						type='button'
						key={index}
						className={
							index <= ((rating && hover) || hover)
								? 'text-blue-600'
								: 'text-gray-200'
						}
						onClick={() => setRating(index)}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
					>
						<span className='star'>
							<GiRingedPlanet />
						</span>
					</button>
				);
			})}
		</div>
	);
};

export default StarRating;
