import { useState } from 'react';
import './App.css';
import { db } from './connection';
import { doc, getDoc } from 'firebase/firestore';

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
		<div className='App'>
			<h1 className='text-3xl font-bold underline text-gray-400'>
				Hello world!
			</h1>
			<button onClick={handleClick}>Click Me</button>
			<div className='bg-amber-300'>{data?.title}</div>
		</div>
	);
}

export default App;
