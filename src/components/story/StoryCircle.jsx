import React from 'react';
import { useNavigate } from 'react-router-dom';

const StoryCircle = () => {
    const navigate=useNavigate();

    const handleNavigate=()=>{
        navigate("/story")
    }

    return (
        <div onClick={handleNavigate} className='currsor-pointer flex flex-col items-center'>
            <img className='w-16 h-16 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/07/15/31/red-panda-8372704_640.jpg" alt="" />
            <p >아이디</p>
        </div>
    );
};

export default StoryCircle  