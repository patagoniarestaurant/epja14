// firebase-config.js
// ⚠️ REEMPLAZA ESTOS DATOS CON LOS TUYOS de Firebase

const firebaseConfig = {
    apiKey: "AIzaSyBSTjM-uPnnqIvcDBkpf71yxF6ajga1db0",
    authDomain: "patagoniarestaurant-783c3.firebaseapp.com",
    databaseURL: "https://patagoniarestaurant-783c3-default-rtdb.firebaseio.com",
    projectId: "patagoniarestaurant-783c3",
    storageBucket: "patagoniarestaurant-783c3.firebasestorage.app",
    messagingSenderId: "303237107477",
    appId: "1:303237107477:web:67591dad3e4244d434a31c"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Conexión a la base de datos
const db = firebase.firestore();