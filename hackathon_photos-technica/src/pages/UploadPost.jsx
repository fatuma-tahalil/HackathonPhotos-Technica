import "../css/App.css";
// import "../css/UploadPost.css";
import MultipleSelectCheckmarks from '../components/multipleCheckbox.tsx';
const postCollection=[];
import '../css/UploadPost.css';
import {useState} from "react";
import {Timestamp} from 'firebase/firestore';



function PostCreation () {

    const [values, setValues] = useState({
            createdAt: null,
            description: " ",
            id: " ",
            imagePath: " ",
            tags: "PhotoTag[]",
            title: " ",
            userID: " ",
})
console.log("state: ", values);
const handleChanges = (e) => {
   const value = e.target.value;
   setValues(value);
    
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
}
    
    return (
        <div className='container'>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="titleInput" id="titleLabel">Enter title:</label>
            <input type="text" id="titleInput" defaultValue="Enter title here"
            onChange = {(e) => handleChanges(e)} required/>
                    <input type="file"id="drop-zone-file" name="files[]" multiple 
                    onChange = {(e) => handleChanges(e)} required/>
        
         
            <input type="text" id="descBox" defaultValue="Enter description here"
            onChange = {(e) => handleChanges(e)} required/>
            <input type="text" defaultValue="Enter tags here"
            onChange = {(e) => handleChanges(e)} required/>
            <button type="submit" id="uploadBtn">Upload</button>
            <MultipleSelectCheckmarks/>
        </form>
        </div>
    );
}
export default PostCreation
