
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB8rKagL0cA4_qI5aco6RJE9yxs2lkIOGA",
  authDomain: "netflix-clone-92057.firebaseapp.com",
  projectId: "netflix-clone-92057",
  storageBucket: "netflix-clone-92057.firebasestorage.app",
  messagingSenderId: "627759398890",
  appId: "1:627759398890:web:6b4de31b58d0711693bc93",
  measurementId: "G-TLYDPNBTK2"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app); 

const signup = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local", 
            email,
        })
    }
    catch(err){
        console.log(err.message);
        toast.error(err.code.split('/')[1].split('-').join(" "))
    }

}   
const signin = async (email, password) => {
    try{
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;
        }
        catch(err){
            console.log(err.message);
            toast.error(err.code.split('/')[1].split('-').join(" "))
            }
            
}

const logout =  () => {
    signOut(auth);
}
export { signup, signin, logout, auth, db };