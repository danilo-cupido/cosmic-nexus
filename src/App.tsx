import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
// import './fonts/NeonRave-z82z4.ttf';
// import { db } from './connection';
// import { doc, getDoc } from 'firebase/firestore';

import Container from './components/Container';
import Home from './pages/Home';
import Books from './pages/Books';
import Movies from './pages/Movies';
import Comics from './pages/Comics';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';

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
				</Routes>
			</Container>
		</Router>
	);
}

export default App;

// * FETCH data from Firestore *

// const [book, setBook] = useState();

// const handleClick = async () => {
// 	const docRef = doc(db, 'books', 'rrSkXSiaP94CEZ3nfqvw');
// 	const docSnap = await getDoc(docRef);

// 	if (docSnap.exists()) {
// 		const book = docSnap.data() as Book;
// 		if (book) {
// 			setBookData(book);
// 		}
// 	} else {
// 		// doc.data() will be undefined in this case
// 		console.log('No such document!');
// 	}
// };
