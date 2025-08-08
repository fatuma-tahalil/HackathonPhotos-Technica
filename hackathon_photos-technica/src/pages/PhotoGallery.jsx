// import { BrowserRouter, Routes, Route } from 'react-router-dom;
import { Link, useParams } from 'react-router-dom';
import { getHardwarePhotos, getGroupPhotos, getWorkshopPhotos } from '../firebase/displayPhoto.ts';
import { ALLOWED_TAGS } from '../types/types.ts';
import PhotoSlides from '../components/PhotoSlides';
import PhotoAlbum from './PhotoAlbum.jsx';

import '../css/App.css';
import '../css/Photo.css';

const PhotoGallery = () => {
    const { urlHashtag } = useParams();
    
    /* Conditionally renders the album page if one of the hashtag links are clicked */
    if (ALLOWED_TAGS.includes(urlHashtag)) {
        return <PhotoAlbum />
    }
    return (
        <div className ="gallery page">
            <Link to="workshops"> # workshops </Link>
            <PhotoSlides className="workshops"/>
            <Link to="group-photos"> # group-photos </Link>
            <PhotoSlides className="group-photos"/>
            <Link to="hardware-hacks"> # hardware-hacks </Link>
            <PhotoSlides className="hardware-hacks"/>
        </div>
    )
}
export default PhotoGallery;

