import React, { useState } from 'react';

const SuggetionCard = () => {

    return (
        <div className='flex justify-between items-center '>
            <div className='flex mb-2 items-center'>
                <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2020/02/14/17/20/greyhound-4848945_640.jpg" alt="" />
                <div className='ml-2'>
                    <div className='flex w-full'>
                    <p className='text-xs font-semibold'>아이디</p>
                    </div>
                    <p className='text-xs font-semibold opacity-70'>팔로우 합니다</p>
                </div>
            </div>
            <button className='text-sky-400 text-sm font-semibold'>
                팔로우
            </button>
        </div>
    );
};

export default SuggetionCard;