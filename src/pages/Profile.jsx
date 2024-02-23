import React from 'react';
import UserDetail from '../components/profile/UserDetail';
import UserPost from '../components/profile/UserPost';

const Profile = () => {
    return (
        <div className='px-20'>
            <div>
            <UserDetail/>
            </div>
            <div>
                <UserPost/>
            </div>
        </div>
    );
};

export default Profile;