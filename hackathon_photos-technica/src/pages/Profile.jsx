import iconImage from '../assets/icon.png';

import "../css/App.css";
import "../css/Profile.css";

const Profile = () => {
    return (
        <>
            {/* Nav Bar */}
            
            {/* Profile section */}
            <section className="profile-container page">
                <h1 className="name">Fatuma Tahalil</h1>
                <div className="padding-medium"></div>
                <img src={iconImage} className="icon" alt="icon"/>
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