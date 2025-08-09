import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ALLOWED_TAGS } from '../types/types.ts';
import { getHardwarePhotos, getGroupPhotos, getWorkshopPhotos } from '../firebase/displayPhoto.ts';

import '../css/App.css';
import '../css/Photo.css';

const PhotoAlbum = () => {
    const [photoList, setPhotoList] = useState([]);
    const { urlHashtag } = useParams();
    /* Grabs a list of the photos depending on the urlHashtag */


    useEffect(() => {
        const fetchPhoto = async() => {
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
        fetchPhoto();
    }, [urlHashtag]); 


    return (
        <div className='page'>
            {/* The title changes based off of which hastag was clicked */}
            <h1 id="album-title"> # {urlHashtag}  </h1>
            <div className="padding-medium"/>
            <div className='photo-album'>
                {Array.from({ length: photoList.length}, (_, index) => (
                    <div key={index} className="photo"> 
                        <img className='photo-image' src={photoList[index].imagePath} alt={urlHashtag + ` ` + photoList[index].title}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhotoAlbum