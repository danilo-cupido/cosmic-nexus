import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
// import { db } from './connection';
// import { doc, getDoc } from 'firebase/firestore';

import Home from './pages/Home';
import Books from './pages/Books';
import Movies from './pages/Movies';
import Comics from './pages/Comics';
import Navbar from './components/Navbar';

function App() {
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

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Routes>
				<Route path='/books' element={<Books />} />
			</Routes>
			<Routes>
				<Route path='/movies' element={<Movies />} />
			</Routes>
			<Routes>
				<Route path='/comics' element={<Comics />} />
			</Routes>
		</Router>
	);
}

export default App;
