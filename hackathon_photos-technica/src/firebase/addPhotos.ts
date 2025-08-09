/* Adds images to storage from lorem picsum*/
import { Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from './config';

export const addPhotoToFirestore = async () => {
    try {
        const user = auth.currentUser;
        
        if (!user) {
            console.error('User must be logged in to add photos');
            return;
        }

        for (let i = 0; i < 1; i++) {
            const addHardwarePhotosList = {
                createdAt: Timestamp.now(),
                description: `Innovative hardware hack showcasing cutting-edge technology and creative engineering solutions`,
                id: uuidv4(),
                imagePath: 'https://picsum.photos/seed/hardware1/220/240',
                tags: ['hardware-hacks'],
                title: `Hardware Hack ${i + 1}`,
                userID: user.uid
            };

            const docRef = doc(db, "photoHardware", addHardwarePhotosList.id);
            await setDoc(docRef, addHardwarePhotosList);
        }
        
        console.log('Photo added successfully!');
        
    } catch (error) {
        console.error('Error adding photos:', error);
    }
};