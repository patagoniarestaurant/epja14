<!-- firebase-config.js -->
<script type="module">
// ============================================================
// 🔥 CONFIGURACIÓN DE FIREBASE — PEGÁ AQUÍ TUS CREDENCIALES 🔧
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// 🔧 Reemplazá por tu configuración real:
const firebaseConfig = {
  apiKey: "AIzaSyBSTjM-uPnnqIvcDBkpf71yxF6ajga1db0",
  authDomain: "patagoniarestaurant-783c3.firebaseapp.com",
  databaseURL: "https://patagoniarestaurant-783c3-default-rtdb.firebaseio.com",
  projectId: "patagoniarestaurant-783c3",
  storageBucket: "patagoniarestaurant-783c3.firebasestorage.app",
  messagingSenderId: "303237107477",
  appId: "1:303237107477:web:67591dad3e4244d434a31c"
};

const app = initializeApp(firebaseConfig);
window.auth = getAuth(app);
window.db = getDatabase(app);
</script>
