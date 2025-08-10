import { getDoc,  doc } from "firebase/firestore";
import { db } from './config.ts';


export async function fetchUserWhoPosted(userID: string) {
    try {
        const userDocRef = doc(db, "users", userID);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
            return userDoc.data();

        } else {
            return null; 
        }
    } catch (error) {
        console.error(error);
    }
}
