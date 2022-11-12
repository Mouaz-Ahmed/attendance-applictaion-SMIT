// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { getFirestore, addDoc, collection, getDocs ,doc ,setDoc ,deleteDoc} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
import { getStorage,uploadBytes,getDownloadURL,ref } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyC9vqR0c6B0JmA3hcGbswg18XgbAEbHMcM",
    authDomain: "hackathon-sylani.firebaseapp.com",
    projectId: "hackathon-sylani",
    storageBucket: "hackathon-sylani.appspot.com",
    messagingSenderId: "886447926670",
    appId: "1:886447926670:web:5b7f63a9ab222bfccf08df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

function firebaseLogIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}
function adClassToDb(classInfo) {
    return addDoc(collection(db, 'classes'), classInfo)
}
async function getClassFromFirebase() {
    const querySnapshot = await getDocs(collection(db, 'classes'));
    const totalClasses = []

    querySnapshot.forEach((doc) => {
        totalClasses.push({ id: doc.id, ...doc.data() })
    })
    return totalClasses;
}
// update
async function updateClassFromFirebase(classId, updateValueObj){
    await setDoc(doc(db,"classes", classId),updateValueObj);
}
async function deleteClassFromFirebase(classId){
    await deleteDoc(doc(db , "classes" , classId))
}
// student Enroll work
async function uploadImage(stdImg){
    const storageRef = ref(storage, `images/${stdImg.name}`);
    const snapshot = await uploadBytes(storageRef, stdImg);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  }
  function enrollingStudentFirebase(studentInfo){
    return addDoc(collection(db,'students'),studentInfo)    
}
export {
    firebaseLogIn, adClassToDb, getClassFromFirebase,updateClassFromFirebase , deleteClassFromFirebase,uploadImage, enrollingStudentFirebase
}