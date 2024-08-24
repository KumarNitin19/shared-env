// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth provider
export const googleAuthProvider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
googleAuthProvider.setCustomParameters({
  prompt: "select_account ",
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;