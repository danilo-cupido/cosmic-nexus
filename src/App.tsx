import React from 'react';
import './App.css';
import { db } from './connection';
import { collection, doc, getDoc } from 'firebase/firestore';

function App() {
	const handleClick = async () => {
		const docRef = doc(db, 'cities', 'SF');
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			console.log('Document data:', docSnap.data());
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
		</div>
	);
}

export default App;
