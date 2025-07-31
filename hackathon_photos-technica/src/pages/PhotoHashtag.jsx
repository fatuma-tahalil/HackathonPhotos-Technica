import { Link , useParams} from "react-router-dom"
import "../App.css";

const PhotoHashtag = () => {
    const { hashtagName } = useParams();
    return (
        <>
            <h1> # {hashtagName} </h1>
            <div className='photo-album'>
                {Array.from({ length: 1}, (_, index) => (
                    <div key={index} className="photo"/> 
                ))}
            </div>
        </>
    )
}

export default PhotoHashtag;