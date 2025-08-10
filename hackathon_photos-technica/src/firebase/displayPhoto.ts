import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from './config.ts';

/* Gets all photos and returns them as a list */
/* Add quereing to return the photos in order of when they were added*/
export async function getHardwarePhotos() {
    try{
        const photoCol = collection(db, 'photoHardware');
        const queryPhotoColByTime = query(photoCol, orderBy('createdAt', 'desc'));
        const photoSnapshot = await getDocs(queryPhotoColByTime);
        const photoList = photoSnapshot.docs.map(doc => doc.data());
        return photoList;
    }
    catch (error){
        console.error(error)
        return [];
    }
}

export async function getGroupPhotos() {
    try{
        const photoCol = collection(db, 'photoGroup');
        const queryPhotoColByTime = query(photoCol, orderBy('createdAt', 'desc'));
        const photoSnapshot = await getDocs(queryPhotoColByTime);
        const photoList = photoSnapshot.docs.map(doc => doc.data());
        return photoList;
    }
    catch (error){
        console.error(error)
        return [];
    }
}

export async function getWorkshopPhotos() {
    try{
        const photoCol = collection(db, 'photoWorkshop');
        const queryPhotoColByTime = query(photoCol, orderBy('createdAt', 'desc'));
        const photoSnapshot = await getDocs(queryPhotoColByTime);
        const photoList = photoSnapshot.docs.map(doc => doc.data());
        return photoList;
    }
    catch (error){
        console.error(error)
        return [];
    }
}

/* We need to create aan object with each tag
as the key and a list of the URL's as the value*/
