importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js');

const firebaseConfig = {
    apiKey: "AIzaSyA7Ffw8gxhqr1u-j5NnWT523onT9Mj37Tg",
    authDomain: "what-is-your-credibility.firebaseapp.com",
    projectId: "what-is-your-credibility",
    storageBucket: "what-is-your-credibility.appspot.com",
    messagingSenderId: "944339238764",
    appId: "1:944339238764:web:ba232de6f043ec40f47d49",
    measurementId: "G-7D6V6H184L"
  };

  const app = initializeApp(firebaseConfig); 
  const db = getFirestore(app);

  async function getSites(db) {
    const siteCol = collection(db, 'defult');
    const siteSnapshot = await getDocs(sitesCol);
    const siteList = siteSnapshot.docs.map(doc => doc.data());
    return siteList;
  }

  console.log(getSites(db)); 