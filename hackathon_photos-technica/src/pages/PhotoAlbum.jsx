import * as React from 'react';
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getHardwarePhotos, getGroupPhotos, getWorkshopPhotos } from '../firebase/displayPhoto.ts';

import Modal from '@mui/material/Modal';
import PhotoInfo from '../components/PhotoModal.jsx';

import '../css/App.css';
import '../css/Photo.css';

const PhotoAlbum = () => {
    const [photoList, setPhotoList] = useState([]);
    const { urlHashtag } = useParams(); // Grabs a list of the photos depending on the urlHashtag 

    // Checks if the photo information should be open as a modal
    const [photoInfoOpen, setPhotoInfoOpen] = React.useState(false);
    // Saves the object of the photo that was clicked
    const [photoObjectClicked, setPhotoObjectClicked] = React.useState("");

    const handleClose = () => {
        setPhotoInfoOpen(false);
        setPhotoObjectClicked("");
    }
    const handleOpen = (photoObject) => {
        setPhotoInfoOpen(true);
        setPhotoObjectClicked(photoObject)
    }

    useEffect(() => {
        const fetchAllPhotos = async() => {
            try {
                let photos;
                switch(urlHashtag){
                    case ("hardware-hacks"):
                        photos = await getHardwarePhotos();
                        break;
                    case ("group-photos"):
                        photos = await getGroupPhotos();
                        break;
                    case ("workshops"):
                        photos = await getWorkshopPhotos();
                        break;
                    default:
                        photos = [];
                }
                setPhotoList(photos); // Sets the photo list with received photos
            } catch (error) { 
                console.error(error);
            }
        };
        fetchAllPhotos();
    }, [urlHashtag]); 


    return (
        <div className='page'>
            {/* The title changes based off of which hastag was clicked */}
            <h1 id="album-title" className="hashtag"> # {urlHashtag}  </h1>
            <div className='photo-album'>
                {Array.from({ length: photoList.length}, (_, index) => (
                    <div className="photo-container" key={index}>
                        <button className="photo photo-button" onClick={() => handleOpen(photoList[index])}> 
                            <img className='photo-image' 
                            src={photoList[index].imagePath} 
                            alt={urlHashtag + ` ` + photoList[index].title}/>
                        </button>  
                    </div>
                ))}
            </div>
            {/* The modal that displays the information*/}
            <Modal
                open={photoInfoOpen}
                onClose={handleClose}
            >
                {/* We pass in the object of the photo that was clicked to display its information */}
                <PhotoInfo photoInfo={photoObjectClicked}/>
            </Modal>
        </div>
    )
}

export default PhotoAlbum