import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyD690IMYibWP8E2twI8Veg6FcwjZA4VMh0",
    authDomain: "zapzap-cc461.firebaseapp.com",
    projectId: "zapzap-cc461",
    storageBucket: "zapzap-cc461.appspot.com",
    messagingSenderId: "201088445929",
    appId: "1:201088445929:web:18b7cf0c723a5db0912f78"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
