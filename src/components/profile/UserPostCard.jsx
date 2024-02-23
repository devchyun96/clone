import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import "./UserPostCard.css"

const UserPostCard = () => {
    return (
        <div>
            <div className='post w-60 h-60'>
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
        </div>
    );
};

export default UserPostCard;<div>
</div>