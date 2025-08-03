import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { doc, setDoc, Timestamp, getDoc } from "firebase/firestore";
import { db, auth, provider } from './config.ts';


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
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.error("Sign in error:", errorCode, errorMessage);
        throw error;
    }
}

export const signOutWithGoole = async () => {
    try {
        await signOut(auth);
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
            console.log(userSnapshot.data());
            return true;
        } else {
            // New user
            return false;
        }
    } catch(error) {
        console.error("Error checking if user is in database: ", error);
        return
    }
}

// Adds the user to the database
async function addUserToDatabase(user) {
    try {
        const userData = {
            id: user.uid,
            email: user.email,
            name: user.displayName,
            profileURL: user.photoURL || '',
            createdAt: Timestamp.now()
        }
        const userRef = doc(db, "users", userData.id)
        await setDoc(userRef, userData);
    } catch (error) {
        console.error("Adding user to database failed");
        console.error(error);
    }
}
