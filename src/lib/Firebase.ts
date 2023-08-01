import { initializeApp, FirebaseOptions, getApps, getApp, } from 'firebase/app';
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDzKwHOqQacE4ZNDC7seDY5a5fM192uMGw",
    authDomain: "billcrest-9cce7.firebaseapp.com",
    projectId: "billcrest-9cce7",
    storageBucket: "billcrest-9cce7.appspot.com",
    messagingSenderId: "1003262049040",
    appId: "1:1003262049040:web:b3e9e8f5c8a2bd8f464395",
    measurementId: "G-NM4058XMKH"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth }