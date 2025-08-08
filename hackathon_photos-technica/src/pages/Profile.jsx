import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import icon from '../assets/icon.png';
import '../css/App.css';
import '../css/Profile.css';

// TODO: Add edit image feature: Event handler when button is clicked, ability to change name, read name change and then update user info
const Profile = ({ user }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
    if (user?.photoURL !== null) {
        setImageLoaded(true);
    }
    }, [user?.photoURL])


    return (
        <>
            {/* Profile section */}
            <section className="profile-container page">
                <h1 className="name">{user?.displayName || "loading.."}</h1>
                <div className="padding-medium"></div>

                {/* Sets profile image to the google profile if it has loaded or to the placeholder image if not*/}
                {imageLoaded ? (<img src={user.photoURL || icon} className="icon" alt="user icon" />) :(<img src={icon} className="icon" alt="user icon" />)}

                <div className="padding-medium"></div>
                <button /*onClick={handleEditImage}*/ className="profile-button">
                    <h1>Edit Account</h1>
                </button>
            </section>

            {/* Group Members Section */}
        </>
    )
}

/* Defines user to be an object */
Profile.propTypes = {
    user: PropTypes.object.isRequired,
};

export default Profile