import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentCard = () => {
    const [isCommentLiked,setIsCommentLiked]=useState(false);

    const handleLikeComment=()=>{
        setIsCommentLiked(!isCommentLiked);
    }
    return (
        <div className=''>
            <div className='flex items-center justify-between py-3 px-3 '>
                <div className='flex items-center '>
                    <div>
                        <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2014/01/27/03/16/cupcake-252805_640.jpg" alt="" />
                    </div>
                    <div className='ml-3'>
                        <p>
                            <span className='font-semibold'>아이디</span>
                            <span className='ml-2'>이게 맞지</span>
                        </p>

                        <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                            <span>1일전</span>
                            <span >좋아요 7개</span>
                            <span >답글 달기</span>
                        </div>
                    </div>
                </div>
                {isCommentLiked?<AiFillHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600'/> 
                : 
                <AiOutlineHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer'/>}
            </div>
        </div>
    );
};

export default CommentCard;