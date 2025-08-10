import { storage, auth, db } from './config.ts';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { doc, setDoc, Timestamp } from "firebase/firestore";
import type { Photo } from '../types/types.ts';
import { v4 as uuidv4 } from 'uuid';


const storageToDatabaseFolder = {
    "group-photos": "photoGroup",
    "hardware-hacks": "photoHardware",
    "workshops": "photoWorkshop"
}

export async function uploadImage(imageObject: object, file: File){
    const tagsInPost = imageObject.tags
    console.log("TAGS: ", tagsInPost);
    if (tagsInPost.includes("# hardware-hacks")) {
        await uploadImageToCloudStorage(imageObject, "hardware-hacks", file);
    } 
    if (tagsInPost.includes("# group-photos")) {
        await uploadImageToCloudStorage(imageObject, "group-photos", file);
    } 
    if (tagsInPost.includes("# workshops")) {
        await uploadImageToCloudStorage(imageObject, "workshops", file);
    } 
    else if (tagsInPost.length == 0) {
        console.error("No tag was selected");
    }
}

async function uploadImageToCloudStorage(imageObject: object, folder: string, file: File) {
    try{
        const imageRef = ref(storage, `photos/${folder}/${file.name}`);
        await uploadBytes(imageRef, file);
        const imageStorageURL = await getDownloadURL(imageRef); 
        const databaseFolder = storageToDatabaseFolder[folder];
        await uploadImageToDatabase(imageObject, databaseFolder, imageStorageURL);
    } catch (error){
        console.error(error);
    }

}

async function uploadImageToDatabase(imageObject: object, folder: string, storageURL: string){
    
    const user = auth.currentUser;
    
    if (!user) {
        console.error('User must be logged in to add photos');
        return;
    }

    try {
        const photoData: Photo = {
            createdAt: Timestamp.now(),
            description: imageObject.description || null,
            id: uuidv4(),
            imagePath: storageURL,
            title: imageObject.title,
            userID: user.uid
        };
        console.log("photo data:", photoData);
        // The document id will be the photo id
        const photoRef = doc(db, folder, photoData.id);
        await setDoc(photoRef, photoData);
    } catch (error) {
        console.error(error);
    }
}
