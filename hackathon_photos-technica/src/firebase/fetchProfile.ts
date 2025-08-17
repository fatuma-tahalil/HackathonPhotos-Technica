import { auth, db } from './config.ts';
import { getDoc,  doc } from "firebase/firestore";

export async function fetchProfileName (){
    const user = auth.currentUser;
    try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.data()
        // Returns the users name and profile picture
        return (userData.name);
    } catch (error) {
        console.error(error);
    }
}

export async function fetchProfilePhoto (){
    const user = auth.currentUser;
    try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.data()
        // Returns the users name and profile picture
        return (userData.profileURL);
    } catch (error) {
        console.error(error);
    }
}

