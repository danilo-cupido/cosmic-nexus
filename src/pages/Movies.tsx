// import SearchBar from '../components/SearchBar';

// const Movies = () => {
// 	const handleSearch = () => {};
// 	return (
// 		<section>
// 			<SearchBar handleSearch={handleSearch} />
// 		</section>
// 	);
// };

// export default Movies;

import { useState } from 'react';
import { SearchResult } from '../utils/types';
// import MovieCard from '../components/MovieCard'; // to build
import SearchBar from '../components/SearchBar';
// import { fetchMovies } from '../utils/fetchData'; // to build
import { Triangle } from 'react-loader-spinner';
import robot from '../assets/robot.png';

const Movies = () => {
	const [moviesData, setMoviesData] = useState<SearchResult | null>(null);
	const [loading, setLoading] = useState(false);
	const [noResult, setNoResult] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const handleSearch = () => {};
	return (
		<section>
			<SearchBar handleSearch={handleSearch} />
			{loading && (
				<div className='flex justify-center pt-40'>
					<Triangle
						height='80'
						width='80'
						color='magenta'
						ariaLabel='triangle-loading'
						wrapperStyle={{}}
						visible={true}
					/>
				</div>
			)}
		</section>
	);
};

export default Movies;
