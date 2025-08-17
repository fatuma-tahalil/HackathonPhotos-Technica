import { signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc, Timestamp, getDoc } from "firebase/firestore";
import { db, auth, provider } from './config.ts';
import type { User }  from '../types/types.ts';

/* Signs user in*/
export const signInWithGoogle = async () => { 
    try {
        const result = await signInWithPopup(auth, provider);

        // Signed-in user info
        // Firebase automatically adds users to user authentication but not the database
        const user = result.user; 
        
        const userExist = await userInDatabase(user); // Checks if user is in our database
        if (!userExist){
            await addUserToDatabase(user);
        }
        console.log("User already in database");
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.error("Sign in error:", errorCode, errorMessage);
        throw error;
    }
}

export const signOutWithGoogle = async () => {
    try {
        await signOut(auth);
        console.log("Signed out");
    } catch (error) {
        console.error("Sign out failed:", error);
        throw error;
    }
}

// Checks if the user is in the database
async function userInDatabase(user) {
    try {
        const userRef = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userRef); // Check is user exists in database

        if (userSnapshot.exists()) {
            return true;
        } else {
            return false; // New user
        }
    } catch(error) {
        console.error("Error checking if user is in database: ", error);
        return
    }
}

// Adds the user to the database
async function addUserToDatabase(user) {
    try {
        const userData: User = {
            id: user.uid,
            email: user.email,
            name: user.displayName,
            profileURL: user.photoURL,
            createdAt: Timestamp.now()
        }

        const userRef = doc(db, "users", userData.id)
        await setDoc(userRef, userData);
    } catch (error) {
        console.error("Adding user to database failed");
        console.error(error);
    }
}
