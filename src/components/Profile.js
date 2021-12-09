import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state)=> state.user.value)
    const selectedColor = useSelector((state)=> state.theme.value)
    return (
        <div style={{color: selectedColor}} className="content" >
            <h1>Profile Page</h1>
            <h4>Name: {user.name}</h4>
            <h4>Age: {user.age}</h4>
            <h4>Email: {user.email}</h4>
        </div>
    )
}

export default Profile
