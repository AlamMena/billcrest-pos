import { initializeApp, FirebaseOptions, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDwFKPD4xvIbD1huSnbQG44GTXP2h5_kYM",
  authDomain: "fast-billing-775f5.firebaseapp.com",
  projectId: "fast-billing-775f5",
  storageBucket: "fast-billing-775f5.appspot.com",
  messagingSenderId: "181974334394",
  appId: "1:181974334394:web:9c2f7ac6ecad03931d3b83",
  measurementId: "G-Y8DN64C29K",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
