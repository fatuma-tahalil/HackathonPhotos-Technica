// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PhotoSlides from '../components/PhotoSlides';
import PhotoHashtag from './PhotoHashtag.jsx'
import '../App.css';

const PhotoGallery = () => {

    return (
        <div className ="gallery page">
            <Link to="workshops"> # Workshops </Link>
                <PhotoSlides />
            <Link to="group-photos"> # Group Photos </Link>
                <PhotoSlides />
            <Link to="hardware-hacks"> # Hardware Hacks </Link>
                <PhotoSlides />
        </div>
    )
}
export default PhotoGallery;