import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    window.location = "index.html";
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
})