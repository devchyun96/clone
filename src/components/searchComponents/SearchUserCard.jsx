import React from 'react';
import './SearchUserCard.css'

const SearchUserCard = () => {
    return (
        <div className='py-2 cursor-pointer'>
            <div className='SearchBox flex items-center'>
                <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg" alt="" />
                <div className='ml-2'>
                    <p className='flex justify-start'>이름</p>
                    <p className='opacity-70 flex justify-start'>아이디</p>
                </div>
            </div>
        </div>
    );
};

export default SearchUserCard;