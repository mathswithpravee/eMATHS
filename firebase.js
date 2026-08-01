// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyAI-rbO_z9fzIZicTW2SlI0cj__R1Ji6GM",
  authDomain: "emaths-db8a2.firebaseapp.com",
  projectId: "emaths-db8a2",
  storageBucket: "emaths-db8a2.firebasestorage.app",
  messagingSenderId: "790474740591",
  appId: "1:790474740591:web:a54ea2419f29c0178a8e9a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
