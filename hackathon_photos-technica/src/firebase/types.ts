import { DocumentReference, Timestamp } from "firebase/firestore"

export const ALLOWED_TAGS = ['hardware-hacks', 'workshops', 'group-photos'] as const;
export type PhotoTag = typeof ALLOWED_TAGS[number];

export interface User {
    id?: string;
    email: string;
    name: string;
    photo?: DocumentReference<Photo>[];
}

export interface Photo {
    id?: string;
    title: string;
    description: string;
    tags: PhotoTag[];
    imageURL?: string;
    userID: string;
    createdAt: Timestamp;
    // Extra additions
    /* 
    likes?: number;
    */
}