import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyDSKmDnAgfYIoWW37G7b7tXVHJuRnV8A9I",
    authDomain: "crud-30b7b.firebaseapp.com",
    projectId: "crud-30b7b",
    storageBucket: "crud-30b7b.appspot.com",
    messagingSenderId: "230628736833",
    appId: "1:230628736833:web:6278fcf4f7315a2e726bc0"
  }
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const openModal =document.getElementById('openRegisterModal')
const modal=document.getElementById('modal')
const closeModal=document.getElementById('closeRegisterModal')


const showRegisterModal = () =>{
    modal.classList.toggle('is-active')
}

openModal.addEventListener('click', showRegisterModal)
closeModal.addEventListener('click', showRegisterModal)

