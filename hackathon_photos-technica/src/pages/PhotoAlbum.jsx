import { useParams} from "react-router-dom";

import "../css/App.css";
import "../css/Photo.css";

const PhotoAlbum = () => {
    const { urlHashtag } = useParams();
    return (
        <>
            {/* The title changes based off of which hastag was clicked */}
            <h1> # {urlHashtag}  </h1>
            <div className='photo-album'>
                {/*TODO: Change 40 placeholder to actual number of photos*/}
                {Array.from({ length: 40}, (_, index) => (
                    <div key={index} className="photo"/> 
                ))}
            </div>
        </>
    )
}

export default PhotoAlbum