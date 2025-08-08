import { collection, getDocs, Timestamp, query, where, limit } from "firebase/firestore";
import { db, storage } from './config.ts';
import { ALLOWED_TAGS } from '../types/types.ts';

/* Gets all photos and returns them as a list */
export async function getHardwarePhotos() {
    try{
        const photoCol = collection(db, 'photoHardware');
        const photoSnapshot = await getDocs(photoCol);
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
        const photoSnapshot = await getDocs(photoCol);
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
        const photoSnapshot = await getDocs(photoCol);
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
