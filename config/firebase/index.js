import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDF3BpHwsHTbmROh8mQDjSXuZuL1A28dsk",
  authDomain: "vem-pra-quadra.firebaseapp.com",
  projectId: "vem-pra-quadra",
  storageBucket: "vem-pra-quadra.appspot.com",
  messagingSenderId: "28409526567",
  appId: "1:28409526567:web:82adaf2f9454b4b45c1102",
  measurementId: "G-DQC9YS5JS9"
  };
  
  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);

  const auth = getAuth(app)

  export { storage,auth }
