// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA6OqIdcytkLUSf2MXvYdA0o7N1geOqYg",
  authDomain: "hushhconnect-f3aac.firebaseapp.com",
  projectId: "hushhconnect-f3aac",
  storageBucket: "hushhconnect-f3aac.appspot.com",
  messagingSenderId: "884832724786",
  appId: "1:884832724786:web:64bfeb104322799136592b",
  measurementId: "G-TKR7M6Z689",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
