import React from 'react';
import './AlarmCard.css'

const AlarmCard = () => {
    return (
        <div className='cursor-pointer w-full'>
            <div className='AlarmCard flex items-center justify-between'>
                <div className='ImageBox flex justify-center items-center'>
                    <img className='AlarmImage ' src="https://cdn.pixabay.com/photo/2023/11/14/11/07/sparrow-8387465_640.jpg" alt="" />
                </div>
                <div className='AlarmTextBox'>
                    <p className='text-xs flex justify-center items-center'>달디달고 달디달고 달디단 밤양갱. 밤양갱 뚜루뚜루 뚜루뚜루</p>
                </div>
                <div className='FollowBox'>
                    <span className='AlarmFollowBtn'>팔로우</span>
                </div>
            </div>
        </div>
    );
};

export default AlarmCard;