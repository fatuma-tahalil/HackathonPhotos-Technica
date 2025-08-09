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

   const [hardwareImagesLoaded, setHardwareImagesLoaded] = useState(false);
   const [groupImagesLoaded, setGroupImagesLoaded] = useState(false);
   const [workshopImagesLoaded, setWorkshopImagesLoaded] = useState(false);
   const { urlHashtag } = useParams();

    useEffect(() => {
        /* If the length is greater than 0 then the images have loaded in */
        if (hardwarePhotoList.length !== 0) {
            setHardwareImagesLoaded(true);
        }
        if (groupPhotoList.length !== 0) {
            setGroupImagesLoaded(true);
        }
        if (workshopPhotoList.length !== 0) {
            setWorkshopImagesLoaded(true);
        }

    }, [hardwarePhotoList, groupPhotoList, workshopPhotoList])
   

    useEffect(() => {
        const fetchAllPhotos = async() => {
            try{

                const [hardwarePhotos, groupPhotos, workshopPhotos] = await Promise.all([
                    getHardwarePhotos(),
                    getGroupPhotos(),
                    getWorkshopPhotos(),
                ]);

                setHardwarePhotoList(hardwarePhotos || []);
                setGroupPhotoList(groupPhotos || []);
                setWorkshopPhotoList(workshopPhotos || []);
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
            <Link to="workshops"> # workshops </Link>
            <div className="workshop-photo-slides">
                {Array.from({ length: 4}, (_, index) => (
                    // If the images are loaded and if the photo at this index exists
                    (workshopImagesLoaded && workshopPhotoList[index]?.imagePath !== undefined) ? (   
                        <div key={index} className="photo"> 
                            <img 
                                className='photo-image' 
                                src={workshopPhotoList[index].imagePath} 
                                alt={urlHashtag + ` ` + workshopPhotoList[index].title}
                            />
                        </div>  
                    ) : (
                    <div key={index} className="photo"/>
                )
            ))}
            </div>

            <Link to="group-photos"> # group-photos </Link>
            <div className="group-photo-slides">
                {Array.from({ length: 4}, (_, index) => (
                    // If the images are loaded and if the photo at this index exists
                    (groupImagesLoaded && groupPhotoList[index]?.imagePath !== undefined) ? (   
                        <div key={index} className="photo"> 
                            <img 
                                className='photo-image' 
                                src={groupPhotoList[index].imagePath} 
                                alt={urlHashtag + ` ` + groupPhotoList[index].title}
                            />
                        </div>  
                    ) : (
                    <div key={index} className="photo"/>
                )
            ))}
            </div>
            <Link to="hardware-hacks"> # hardware-hacks </Link>
            <div className="hardware-photo-slides">
                {Array.from({ length: 4}, (_, index) => (
                    // If the images are loaded and if the photo at this index exists*
                    (hardwareImagesLoaded && hardwarePhotoList[index]?.imagePath !== undefined) ? (   
                        <div key={index} className="photo"> 
                            <img 
                                className='photo-image' 
                                src={hardwarePhotoList[index].imagePath} 
                                alt={urlHashtag + ` ` + hardwarePhotoList[index].title}
                            />
                        </div>  
                    ) : (
                    <div key={index} className="photo"/>
                )
            ))}
            </div>
        </div>
    )
}
export default PhotoGallery;

