import { collection, DocumentReference, getDocs, setDoc, getDoc, deleteDoc, query, where, doc, updateDoc, arrayUnion, Firestore } from "firebase/firestore";

import { db } from "../firebase/config.ts";
//import { User, Photo } from "../types/types.ts"

export async function getUserData() {
    // We use the document Id to find the user reference
    const userRef = doc(db, "users", userID);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
        return userDoc.data();
    } 
    else {
        console.warn('No user found');
        return (null);
    }
}
// Function to update the profile
/*export async function editUserData(id: string, data: ) {
     // We use the document Id to find the user reference
     const userRef = doc(db, "users", id);
     const updateDoc()
} */



