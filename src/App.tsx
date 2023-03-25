import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Container from './components/Container';
import Home from './pages/Home';
import Books from './pages/Books';
import Movies from './pages/Movies';
import Comics from './pages/Comics';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';
import Error from './pages/Error';

function App() {
	return (
		<Router>
			<Container>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/books' element={<Books />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/comics' element={<Comics />} />
					<Route path='/books/:id' element={<BookDetails />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Container>
		</Router>
	);
}

export default App;
