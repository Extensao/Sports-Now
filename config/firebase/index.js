import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAeMaknbmSF9FC6jth5xJKSomkK9Q_ek_c",
  authDomain: "sports-now-359922.firebaseapp.com",
  projectId: "sports-now-359922",
  storageBucket: "sports-now-359922.appspot.com",
  messagingSenderId: "603330374454",
  appId: "1:603330374454:web:f844649e3bd14f60626197",
  measurementId: "G-MR8291K9C4"
  };
  
  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);

  const auth = getAuth(app)

  export { storage,auth }