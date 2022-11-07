// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBH39pS8c4OuIVMIKgADu1XN8qM8pJjP5s',
  authDomain: 'cobbler-service.firebaseapp.com',
  projectId: 'cobbler-service',
  storageBucket: 'cobbler-service.appspot.com',
  messagingSenderId: '161043575671',
  appId: '1:161043575671:web:56d5978c7895fdd13ea772',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
