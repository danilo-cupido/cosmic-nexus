import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Books from './pages/Books';
import Movies from './pages/Movies';
import Comics from './pages/Comics';
import BookDetails from './components/BookDetails';
import Error from './pages/Error';

function App() {
	return (
		<div className='bg-space-background bg-cover h-screen'>
			<Router>
				<Routes>
					<Route path='/' element={<SharedLayout />}>
						<Route index element={<Home />} />
						<Route path='/books' element={<Books />} />
						<Route path='/movies' element={<Movies />} />
						<Route path='/comics' element={<Comics />} />
						<Route path='/books/:id' element={<BookDetails />} />
						<Route path='*' element={<Error />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
