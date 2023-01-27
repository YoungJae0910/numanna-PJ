import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAioEYGuhjTExrUovMIy2DYb4IZKpGHIGk",
    authDomain: "numanna-4bc9a.firebaseapp.com",
    projectId: "numanna-4bc9a",
    storageBucket: "numanna-4bc9a.appspot.com",
    messagingSenderId: "588272405068",
    appId: "1:588272405068:web:5fd18b060694441a6582e9",
    measurementId: "G-3MQN7KE9R0"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const storage = getStorage(app)
