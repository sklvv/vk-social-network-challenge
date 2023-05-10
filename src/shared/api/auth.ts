import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import {
    createUserWithEmailAndPassword,
    setPersistence,
    signInWithEmailAndPassword,
    browserLocalPersistence,
    signOut,
} from "firebase/auth";

export const createUser = async (email: string, password: string) => {
    try {
        await setPersistence(auth, browserLocalPersistence);
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        console.log(user);
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            uid: user.uid,
            username: "ivan777",
            photoUrl: "",
            city: "",
            university: "",
            posts: [],
            friends: [],
        });

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
        }
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
        // ..
    }
};

export const signinUser = async (email: string, password: string) => {
    try {
        await setPersistence(auth, browserLocalPersistence);

        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
        }
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
        // ..
    }
};

export const userSignOut = async () => {
    await signOut(auth);
};
