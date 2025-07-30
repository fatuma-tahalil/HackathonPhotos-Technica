import iconImage from '../assets/icon.png'
import "../App.css";

const Profile = () => {
    return (
        <>
            {/* Nav Bar */}
            
            {/* Profile section */}
            <section className="profile-container">
                <h1>Name Here</h1>
                <img src={iconImage} className="icon" alt="icon"/>
                <button /*onClick={handleEditImage}*/ className="profile-button">
                    <h1>Edit Account</h1>
                </button>
            </section>

            {/* Group Members Section */}
        </>
    )
}

export default Profile;