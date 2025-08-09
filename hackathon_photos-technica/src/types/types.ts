import {Timestamp } from "firebase/firestore"

export const ALLOWED_TAGS = ['hardware-hacks', 'workshops', 'group-photos'] as const;
export type PhotoTag = typeof ALLOWED_TAGS[number];

export interface User {
    createdAt: Timestamp;
    email: string;
    id: string; // Google authentication id
    name: string;
    profileURL?: string;
};

export interface Photo {
    createdAt?: Timestamp;
    description?: string;
    id?: string;
    imagePath: string;
    tags: PhotoTag[];
    title: string;
    userID?: string;
    // Extra additions
    /* 
    likes?: number;
    */
};