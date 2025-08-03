import { useState, useEffect } from 'react';
import { getUserData } from '../firebase/profileService.ts';
import { editImageUrl } from '../utils/imageUtils.js';

import '../css/App.css';
import '../css/Profile.css';

// TODO: Add edit image feature: Event handler when button is clicked, ability to change name, read name change and then update user info
const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);
                const data = await getUserData();
                setUserData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);
    return (
        <>
            {/* Profile section */}
            <section className="profile-container page">
                <h1 className="name">{userData?.name || "loading.."}</h1>
                <div className="padding-medium"></div>
                <img src={editImageUrl(userData?.profileURL)} className="icon" alt="user icon" />
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