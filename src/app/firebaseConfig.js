import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCxei-iiNxjzLk1y_yPP5x6dh8zvJV9CIc',
  authDomain: 'hatto-sit.firebaseapp.com',
  databaseURL: 'https://hatto-sit.firebaseio.com',
  projectId: 'hatto-sit',
  storageBucket: 'hatto-sit.appspot.com',
  messagingSenderId: '371683992214',
  appId: '1:371683992214:web:f576cdd21f751ed51958b7',
  measurementId: 'G-19G62598EC',
};
firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
