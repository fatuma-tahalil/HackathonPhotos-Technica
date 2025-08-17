
import  { useState } from "react";
import { updateProfile } from '../firebase/updateProfile.ts';
import PropTypes from 'prop-types';
import '../css/App.css';
import '../css/Profile.css';

const ProfileEditForm = ({ onSave }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState("");


    const handleFileChange = (e) => {
        setSelectedImage(e.target.files[0]);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (name!== "" || selectedImage !== null) { // If at least 1 parameter was changed
            await updateProfile(name, selectedImage);
        }
        setName("");
        setSelectedImage(null);
        onSave();
    }
    //const fileInputRef = useRef(null);*/

    return (
        /* Profile section */
        <form className="profile-container page" onSubmit={handleSubmit}autoComplete="off" >
            <label htmlFor="name" type="name">Enter name</label>
            <input id="name" type="text" value={name} onChange = {handleNameChange}/>
            <div className="padding-medium"></div>
            <input type="file" id="drop-zone-file" name="imagePath" onChange={handleFileChange} accept="image/*"/>
            <div className="padding-medium"></div>
            <button type="submit" className="profile-button">
                <h1>Submit Changes</h1>
            </button>
        </form>

    );
}

ProfileEditForm.propTypes = {
    onSave: PropTypes.func.isRequired,
};

export default ProfileEditForm;