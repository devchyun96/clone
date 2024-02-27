import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';

const ExplorePost = () => {
    return (
                <div className='post'>
                    <img className='cursor-pointer' src="logo192.png" alt="" />
                    <div className='overlay'>
                        <div className='overlay-text flex justify-between'>
                                <div>
                                <AiFillHeart></AiFillHeart><span>10</span>
                                </div>
                                <div>
                                <FaComment/><span>30</span>
                                </div>
                        </div>
                    </div>
                </div>
    );
};

export default ExplorePost;