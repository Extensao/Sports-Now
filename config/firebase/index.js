import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCItR_GLwY6Zi0ZjNK3-FICnj-QIrfdpjc",
    authDomain: "extensao-projeto.firebaseapp.com",
    projectId: "extensao-projeto",
    storageBucket: "extensao-projeto.appspot.com",
    messagingSenderId: "252155497568",
    appId: "1:252155497568:web:31e6d5d662a6f5b975c705",
    measurementId: "G-Z2VS6DL9XE"
  };
  
  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);

  const auth = getAuth(app)

  export { storage, auth }