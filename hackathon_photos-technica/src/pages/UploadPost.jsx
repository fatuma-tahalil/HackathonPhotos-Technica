import "../css/App.css";
import '../css/UploadPost.css';
import { uploadImage } from '../firebase/uploadImage.ts';
import MultipleSelectCheckmarks from '../components/multipleCheckbox.tsx';
import {useState} from "react";
import {Timestamp} from 'firebase/firestore';

function PostCreation () {
    const [file, setFile] = useState(null);
    const [personName, setPersonName] = useState([]);


    const [values, setValues] = useState({
        createdAt: "",
        description: "",
        id: "",
        tags: [],
        title: "",
        userID: ""
    });

    const handleChanges = (e) => {
        const { name, value } = e.target;    
        setValues((prev) => ({ ...prev, [name]: value }));
    };
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const dataToSubmit = {
            ...values, 
            createdAt : Timestamp.now(), 
            tags: personName, 
            id: "",
            userID: ""
        };
        await uploadImage(dataToSubmit, file); // Sends the image to be sorted and uploaded to storage and the database
        setValues({
            createdAt: " ",
            description: " ",
            id: "",
            tags: ' ',
            title: " ",
            userID: " "
        });
        setFile(null);
    }
    
    return (
        <div className='upload-container'>
            <form onSubmit = {handleSubmit} autoComplete="off">
                <input type="text" className="title-input" id="titleInput" placeholder="Enter title here" value={values.title}name="title"
                onChange = {(e) => handleChanges(e)} required/>
                <div className="padding-medium"></div>
                <textarea type="text" id="descBox" placeholder="Enter description here" name="description" value={values.description} onChange = {(e) => handleChanges(e)}/>
                <MultipleSelectCheckmarks className="tag-box" personName = {personName} setPersonName = {setPersonName} />
                <label htmlFor="drop-zone-file" className="add-photo" title="Add photo" alt="upload file box" >
                    <div className="upload-file-box"> Upload Image </div>
                </label> 
                <input type="file" className="drop-zone-file" id="drop-zone-file" name="imagePath" onChange={handleFileChange}  accept="image/*" />
                <button type="submit" id="uploadBtn" className="button"> Post </button>
            </form>
        </div>
    );
}
export default PostCreation
