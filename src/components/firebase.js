import { initializeApp } from "firebase/app";
import { getFirestore, collection,getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHYApClxkLz1d8mlYVkurSNifupHkfFzI",
  authDomain: "ieee-registration-137f5.firebaseapp.com",
  projectId: "ieee-registration-137f5",
  storageBucket: "ieee-registration-137f5.firebasestorage.app",
  messagingSenderId: "718614087883",
  appId: "1:718614087883:web:d60649b24a5a51a2fcf34e",
  measurementId: "G-FBKGJLKQB2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export const firebaseData = async () => {
  try {
    const snapshot = await getDocs(collection(db, "participants"));
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching participants from Firebase:", error);
    return [];
  }
};