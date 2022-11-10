import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzxc7HBE9sxvHNUqZeD-TCQ5y_52BQxk8",
  authDomain: "jk-insta.firebaseapp.com",
  projectId: "jk-insta",
  storageBucket: "jk-insta.appspot.com",
  messagingSenderId: "1084026745861",
  appId: "1:1084026745861:web:42e80dd425faccf8e7d86c",
  measurementId: "G-V8Z2GQ5S27"
};

const app = initializeApp(firebaseConfig);

export default app;
