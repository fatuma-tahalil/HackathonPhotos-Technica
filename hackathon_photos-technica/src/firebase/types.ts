import { DocumentReference, Timestamp } from "firebase/firestore"

export const ALLOWED_TAGS = ['hardware-hacks', 'workshops', 'group-photos'] as const;
export type PhotoTag = typeof ALLOWED_TAGS[number];

export interface User {
    createdAt: Timestamp;
    email: string;
    id?: string;
    name: string;
    photo?: string;
}

export interface Photo {
    createdAt: Timestamp;
    description: string;
    id?: string;
    imageURL?: string;
    title: string;
    tags: PhotoTag[];
    userID: string;
    // Extra additions
    /* 
    likes?: number;
    */
}