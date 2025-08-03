import { collection, DocumentReference, getDocs, setDoc, getDoc, deleteDoc, query, where, doc, updateDoc, arrayUnion, Firestore } from "firebase/firestore";

import { db } from "../firebase/config.ts";
import { Photo, User } from "../types/types";

export async function getUserData(db: Firestore, id: string) {
    // We use the document Id to find the user reference
    const userRef = doc(db, "users", id);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
        return userDoc.data();
    } 
    else {
        console.warn('No user found');
        return (null);
    }
}

/* Enters a user to print data by using a users document ID */
async function testUser() {
    try {
        console.log("Testing getUserData...");
        const userData = await getUserData(db, "SefENTUqPIbjca69EpGY");
        if (userData !== null) {
            console.log("User data");
            console.log(userData);
        }
    } 
    catch (error) {
        console.log("ERROR");
        console.error("Firebase error: ", error);
    }
}

testUser();