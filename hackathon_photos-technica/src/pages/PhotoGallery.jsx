import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getHardwarePhotos, getGroupPhotos, getWorkshopPhotos } from '../firebase/displayPhoto.ts';
import { ALLOWED_TAGS } from '../types/types.ts';
import PhotoAlbum from './PhotoAlbum.jsx';

import '../css/App.css';
import '../css/Photo.css';

const PhotoGallery = () => {
   const [hardwarePhotoList, setHardwarePhotoList] = useState([]);
   const [groupPhotoList, setGroupPhotoList] = useState([]);
   const [workshopPhotoList, setWorkshopPhotoList] = useState([]);
   const { urlHashtag } = useParams();

    useEffect(() => {
        const fetchAllPhotos = async() => {
            try{

                const [hardwarePhotos, groupPhotos, workshopPhotos] = await Promise.all([
                    getHardwarePhotos().
                    getGroupPhotos(),
                    getWorkshopPhotos(),
                ]);

                setHardwarePhotoList(hardwarePhotos);
                setGroupPhotoList(groupPhotos);
                setWorkshopPhotoList(workshopPhotos);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllPhotos();
    }, []);
    
    /* Conditionally renders the album page if one of the hashtag links are clicked */
    if (ALLOWED_TAGS.includes(urlHashtag)) {
        return <PhotoAlbum />
    }
    return (
        <div className ="gallery page">
            {/*Print our the list in console*/}
            {console.log('list ', workshopPhotoList)}

            <Link to="workshops"> # workshops </Link>
            <div className="workshop-photo-slides">
                <div className="photo"/>
                <div className="photo"/>
                <div className="photo"/>
                <div className="photo"/>
            </div>
            <Link to="group-photos"> # group-photos </Link>
            <div className="group-photo-slides">
                <div className="photo"/>
                <div className="photo"/>
                <div className="photo"/>
                <div className="photo"/>
            </div>
            <Link to="hardware-hacks"> # hardware-hacks </Link>
            <div className="hardware-photo-slides">
                <div className="photo"/>
                <div className="photo"/>
                <div className="photo"/>
                <div className="photo"/>
            </div>
        </div>
    )
}
export default PhotoGallery;

