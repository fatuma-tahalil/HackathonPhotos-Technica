import { useState, useEffect } from 'react';
import { auth } from '../firebase/config.ts';
import { fetchProfileName, fetchProfilePhoto } from '../firebase/fetchProfile.ts';
import PropTypes from 'prop-types';
import icon from '../assets/icon.png';
import '../css/App.css';
import '../css/Profile.css';

const ProfileView = ({ onEdit }) => {
    const user = auth.currentUser;

    const [imageLoaded, setImageLoaded] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchProfile = async() => {
            try {
                setProfileImage(await fetchProfilePhoto());
                setName(await fetchProfileName());
            } catch (error) {
                console.error(error);
            }
        };
        fetchProfile();
    })

    useEffect(() => {
        if (profileImage !== null && profileImage !== undefined) {
            setImageLoaded(true);
        }
        console.log(profileImage);
    }, [profileImage])

    return (
        /* Profile section */
        <section className="profile-container page">
            <h1 className="name">{name || user.displayName || "loading.."}</h1>
            <div className="padding-medium"></div>

            {/* Sets profile image to the google profile if it has loaded or to the placeholder image if not*/}
            <div className="photo">
                {imageLoaded ? (<img src={profileImage} className="icon" alt="profile" />) : (<img src={icon} className="icon" alt="user icon" />) }
            </div>

            <div className="padding-medium"></div>
            <button onClick={onEdit} className="profile-button">
                <h1>Edit Account</h1>
            </button>
        </section>

    );
}

ProfileView.propTypes = {
    onEdit: PropTypes.func.isRequired,
};

export default ProfileView;