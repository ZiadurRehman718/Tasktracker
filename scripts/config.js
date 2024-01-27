import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBjAvz8FsT2crm-a25zjpxe541x_GbImJM",
    authDomain: "task-tracker-59f1b.firebaseapp.com",
    projectId: "task-tracker-59f1b",
    storageBucket: "task-tracker-59f1b.appspot.com",
    messagingSenderId: "777293186483",
    appId: "1:777293186483:web:a7ad9ac370ec94129bf7c6",
    measurementId: "G-9QFGPQV9HV"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);