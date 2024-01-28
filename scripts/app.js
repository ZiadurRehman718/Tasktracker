import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { auth } from "./config.js";

const logout = document.querySelector("#logout");


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
    } else {
        window.location = "login.html";
    }
});
logout.addEventListener("click", () => {
    signOut(auth).then(() => {
        console.log('Sign-out successful.');
        window.location = "login.html";
      }).catch((error) => {
        console.log('An error happened.');
      });
})