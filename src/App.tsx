import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { db } from './connection';
import { doc, getDoc } from 'firebase/firestore';

import Home from './pages/Home';

function App() {
	interface Book {
		title: string;
	}

	const [data, setData] = useState<Book>();
	const handleClick = async () => {
		const docRef = doc(db, 'books', 'rrSkXSiaP94CEZ3nfqvw');
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			const book = docSnap.data() as Book;
			if (book) {
				setData(book);
			}
		} else {
			// doc.data() will be undefined in this case
			console.log('No such document!');
		}
	};

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
