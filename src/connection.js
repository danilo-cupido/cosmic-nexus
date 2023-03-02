import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyDj-ohPvcK-8B6RpjIN7nu1yO6Zjgrk5Mg',
	authDomain: 'cosmic-nexus.firebaseapp.com',
	projectId: 'cosmic-nexus',
	storageBucket: 'cosmic-nexus.appspot.com',
	messagingSenderId: '107311640049',
	appId: '1:107311640049:web:c5013b8850e57fbd10e850',
	measurementId: 'G-22F6CTS0SB',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
