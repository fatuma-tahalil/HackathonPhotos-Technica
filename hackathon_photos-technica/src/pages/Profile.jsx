import { useState, useEffect } from 'react';
import { getUserData } from '../firebase/profileService.ts';
import icon from '../assets/icon.png';
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
                // TODO: Change hard-coded ID into dynamically updated ID from user-side
                const data = await getUserData('jWn5rS56E1cv5mmd8EHBAaW0PhT2');
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
                <img src={icon} className="icon" alt="user icon" />
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