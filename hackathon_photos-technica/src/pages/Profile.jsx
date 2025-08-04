import { useState, useEffect } from 'react';

import icon from '../assets/icon.png';
import '../css/App.css';
import '../css/Profile.css';

// TODO: Add edit image feature: Event handler when button is clicked, ability to change name, read name change and then update user info
const Profile = ({ user }) => {
    return (
        <>
            {/* Profile section */}
            <section className="profile-container page">
                <h1 className="name">{user?.displayName || "loading.."}</h1>
                <div className="padding-medium"></div>
                {/* TODO: Add placeholder image while google profile image loads */}
                <img src={user?.photoURL || icon} className="icon" alt="user icon" />
                <div className="padding-medium"></div>
                <button /*onClick={handleEditImage}*/ className="profile-button">
                    <h1>Edit Account</h1>
                </button>
            </section>

            {/* Group Members Section */}
        </>
    )
}

export default Profile