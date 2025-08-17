import { useState} from 'react';
import ProfileEditForm from '../components/ProfileEditForm.jsx';
import ProfileView from '../components/ProfileView.jsx';

import '../css/App.css';
import '../css/Profile.css';

// TODO: Add edit image feature: Event handler when button is clicked, ability to change name, read name change and then update user info
const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <section>
            {(isEditing) ? (
                <ProfileEditForm onSave={() => setIsEditing(false)}/>
            ): (
                <ProfileView onEdit={() => setIsEditing(true)}/>
            )}
        </section>
    );
}

export default Profile;