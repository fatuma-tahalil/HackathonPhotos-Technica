import "../css/App.css";
// import "../css/UploadPost.css";
import MultipleSelectCheckmarks from '../components/multipleCheckbox.tsx';
import '../css/UploadPost.css';
import {useState} from "react";
import {Timestamp} from 'firebase/firestore';
import { UUID } from "https://unpkg.com/uuidjs@^5";
import {auth} from '../firebase/config.ts';
import React, { useRef } from "react";


function PostCreation () {


    const [values, setValues] = useState({
            createdAt: "",
            description: "",
            id: "",
            imagePath: "",
            tags: [],
            title: "",
            userID: ""
});

const [personName, setPersonName] = useState([]);

const [submittedData, setSubmittedData] = useState(null);

const handleChanges = (e) => {
    const { name, value } = e.target;    
     setValues((prev) => ({ ...prev, [name]: value }));
};
const fileInputRef = useRef(null);

  const handleReset = () => {
    fileInputRef.current.value = "";
    setValues({
        createdAt: "",
        description: "",
        id: "",
        imagePath: null,
        tags: null,
        title: "",
        userID: ""});
     
  };
const handleSubmit = (e) => {

    e.preventDefault();
     const timestamp = Timestamp.now();
     setSubmittedData({ ...values, 
        createdAt : timestamp, 
        tags: personName, 
        id: UUID.generate(),
        userID: auth});

        console.log(submittedData)
      
     setValues({
        createdAt: "",
        description: "",
        id: "",
        imagePath: null,
        tags: null,
        title: "",
        userID: ""});
     }
     
    
     

    
    return (
        <div className='container'>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="titleInput" id="titleLabel">Enter title:</label>
            <input type="text" id="titleInput" placeholder="Enter title here" value={values.title}name="title"
            onChange = {(e) => handleChanges(e)} required/>
                    <input type="file" id="drop-zone-file" name="imagePath" multiple ref={fileInputRef} 
                    onChange = {(e) => handleChanges(e)} required/>
        
            <label htmlFor="descBox">description</label>
            <input type="text" id="descBox" placeholder="Enter description here" name="description" value={values.description} 
            onChange = {(e) => handleChanges(e)} required/>
            <button type="submit" id="uploadBtn">Upload</button>
            <button type="reset" onClick={handleReset} id="resetBtn">Reset</button>
            <MultipleSelectCheckmarks personName = {personName} setPersonName = {setPersonName}/>
        </form>
        </div>
    );
}
export default PostCreation
