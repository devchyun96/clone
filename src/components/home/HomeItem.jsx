import React from 'react';
import './HomeItem.css';
const HomeItem = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex mt-10'>
                <span>회원님을 위한 추천</span>
            </div>
            <div className='mt-10 ml-5 flex '>
                <div >
                    <img className='w-16 h-16 rounded-full' src="img/logo.png" alt="" />
                </div>
                <div className='flex ml-5 flex-col'>
                    <span className='flex'>asdasdasdasdasdad</span>
                    <span className='flex'>name</span>
                </div>
                <div className='ml-20 flex items-center'>
                    <button className='followBtn'>
                        팔로우
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeItem;