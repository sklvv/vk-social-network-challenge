import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../api/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const nav = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, async user => {
            if (user) {
                const uid = user.uid;
                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUserInfo(docSnap.data());
                    nav("/profile");
                } else {
                    console.log("No such document!");
                }
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);
    return userInfo;
};
