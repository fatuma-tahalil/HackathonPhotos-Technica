import { storage, auth, db } from './config.ts';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { doc, updateDoc } from "firebase/firestore";
import type { User } from '../types/type.ts';

export async function updateProfile (name: string, profilePicture: File) {
    const user = auth.currentUser;
    let updatedUserData: Partial<User> = {};

    if (!user) {
        console.error('User must be logged in to add photos');
        return;
    }
    
    // If the name was updated we change it
    if (name!== "" && profilePicture !== null){
        updatedUserData = {
            name: name,
            profileURL: (await uploadProfileToStorage(profilePicture))
        }
    } else if (name !== "") {
        updatedUserData.name = name;
    } else if (profilePicture !== null) { // If only the picture is updated
        updatedUserData.profileURL = await uploadProfileToStorage(profilePicture);
    }

    try {
        const profileRef = doc(db, "users", `${user.uid}`);
        await updateDoc(profileRef, updatedUserData);
    } catch (error) {
        console.error(error);
    }

}

// Uploads the profile picture to storage and returns the image URL
// TODO: Delete the former profile picture in storage to save space
async function uploadProfileToStorage(profilePicture: File){
    try{
        const imageRef = ref(storage, `photos/profile-picture/${profilePicture.name}`);
        await uploadBytes(imageRef, profilePicture);
        const imageStorageURL = await getDownloadURL(imageRef);
        return imageStorageURL;
    } catch (error) {
        console.error(error);
    }
}
// Function to delete the former profile picture
/* async function deleteFormerProfileFromStorage(){

}*/