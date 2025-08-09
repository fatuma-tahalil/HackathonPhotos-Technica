import "../css/App.css";
// import "../css/UploadPost.css";
import MultipleSelectCheckmarks from '../components/multipleCheckbox.tsx';
import '../css/UploadPost.css';
import {useState} from "react";
import {Timestamp} from 'firebase/firestore';



function PostCreation ([user]) {

    const [values, setValues] = useState({
            createdAt: " ",
            description: " ",
            id: " ",
            imagePath: " ",
            tags: " ",
            title: " ",
            userID: " "
});

const handleChanges  = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
}


const handleSubmit = (e) => {

    e.preventDefault()
    console.log(values)
}
    
    return (
        <div className='container'>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="titleInput" id="titleLabel">Enter title:</label>
            <input type="text" id="titleInput" placeholder="Enter title here" name="title"
            onChange = {(e) => handleChanges(e)} required/>
                    <input type="file" id="drop-zone-file" name="imagePath" multiple 
                    onChange = {(e) => handleChanges(e)} required/>
        
            <label htmlFor="descBox">description</label>
            <input type="text" id="descBox" placeholder="Enter description here" name="description" 
            onChange = {(e) => handleChanges(e)} required/>
            <button type="submit" id="uploadBtn">Upload</button>
            <MultipleSelectCheckmarks name='tags'
            onChange = {(e) => handleChanges(e)} required/>
        </form>
        </div>
    );
}
export default PostCreation
