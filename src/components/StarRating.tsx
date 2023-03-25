import { useState, useEffect } from 'react';
import { GiRingedPlanet } from 'react-icons/gi';

const StarRating = (props: {
	rate?: number;
	setRate?: (score: number) => void;
}) => {
	const [rating, setRating] = useState(props.rate || 0);
	const [hover, setHover] = useState(props.rate || 0);

	useEffect(() => {
		if (rating && props.setRate) {
			props.setRate(rating);
		}
	}, [props, rating]);

	return (
		<div className='star-rating'>
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						value={index}
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
						disabled={props.rate ? true : false}
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
