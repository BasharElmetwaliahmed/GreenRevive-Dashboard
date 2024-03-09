import { initializeApp } from "firebase/app";

import { getMessaging } from "firebase/messaging";

//Firebase Config values imported from .env file
const firebaseConfig = {
  apiKey: "AIzaSyAIv5EL9VOwDTQassOarDiLnKdDRTeYaw0",
  authDomain: "green-revive-51c50.firebaseapp.com",
  databaseURL: "https://green-revive-51c50-default-rtdb.firebaseio.com",
  projectId: "green-revive-51c50",
  storageBucket: "green-revive-51c50.appspot.com",
  messagingSenderId: "891750373102",
  appId: "1:891750373102:web:c1f2bcf36cbe237ae945ff",
  measurementId: "G-BQKYV8YXH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Messaging service
export const messaging = getMessaging(app);
