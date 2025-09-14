
import { useState, useEffect } from "react";
import { updateProfile } from '../firebase/updateProfile.ts';
import { fetchProfilePhoto } from '../firebase/fetchProfile.ts';
import editIcon from '../assets/editIcon.svg';

import PropTypes from 'prop-types';
import '../css/App.css';
import '../css/Profile.css';

const ProfileEditForm = ({ onSave }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState("");
    const [profileImage, setProfileImage] = useState(null); //  We grab the photo from the database

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

    useEffect(() => {
        const fetchProfile = async() => {
            try {
                setProfileImage(await fetchProfilePhoto());
            } catch (error) {
                console.error(error);
            }
        };
        fetchProfile();
    })

    return (
        /* Profile section */
        <form className="profile-container page" onSubmit={handleSubmit}autoComplete="off" >
            <label htmlFor="name" type="name">Enter name</label>
            <input id="name" type="text" value={name} onChange={handleNameChange} className="edit-profile-name" placeholder="Enter your name" />
            <div className="padding-medium"></div>

            <div className="photo-edit-wrapper">
                <img src={selectedImage ? URL.createObjectURL(selectedImage) : profileImage} alt="profile preview" className="edit-photo" />
                <label htmlFor="drop-zone-file" className="edit-photo-icon" title="Edit photo" >
                    <img src={editIcon} alt="Edit" style={{ width: "1.5rem", height: "1.5rem" }} />
                </label>
                <input type="file" className="drop-zone-file" id="drop-zone-file" name="imagePath" onChange={handleFileChange}  accept="image/*" />
            </div>
            <div className="padding-medium"></div>

            <button type="submit" className="profile-button button">
                <h1>Submit Changes</h1>
            </button>
        </form>

    );
}

ProfileEditForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    photo: PropTypes.string.isRequired
};

export default ProfileEditForm;