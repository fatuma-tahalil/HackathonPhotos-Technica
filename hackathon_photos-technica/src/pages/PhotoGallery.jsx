// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import PhotoSlides from '../components/PhotoSlides';
import PhotoHashtag from './PhotoHashtag.jsx'
import '../App.css';

const PhotoGallery = () => {
    const { urlHashtag } = useParams();
    const hashtagList = ["workshops", "group-photos", "hardware-hacks"];
    
    /* Conditionally renders a different page if one of the hashtag links are clicked */
    if (hashtagList.includes(urlHashtag)) {
        return <PhotoHashtag />
    }
    return (
        <div className ="gallery page">
            <Link to="workshops"> # workshops </Link>
            <PhotoSlides />
            <Link to="group-photos"> # group-photos </Link>
            <PhotoSlides />
            <Link to="hardware-hacks"> # hardware-hacks </Link>
            <PhotoSlides />
        </div>
    )
}
export default PhotoGallery;

