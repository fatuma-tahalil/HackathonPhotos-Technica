import { useState} from 'react';
import ProfileEditForm from '../components/ProfileEditForm.jsx';
import ProfileView from '../components/ProfileView.jsx';

import '../css/App.css';
import '../css/Profile.css';

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