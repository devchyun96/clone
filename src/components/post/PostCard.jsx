import React, { useState } from 'react';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {RiSendPlaneLine} from 'react-icons/ri'
import "./PostCard.css";
import CommentModal from '../comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';

const PostCard = () => {

    const [showDropDown,setShowDropDown] = useState(false);
    const [isPostLiked,setIsPostLiked] =useState(false);
    const [isSaved,SetIsSaved]=useState(false);
    const {isOpen,onOpen,onClose} = useDisclosure();

    const handleOpenCommentModal=()=>{
       onOpen();
    }

    const handleSavePost=()=>{
        SetIsSaved(!isSaved);
    }

    const handlePostLike=()=>{
        setIsPostLiked(!isPostLiked);
    }
    const handleClick=()=>{
        setShowDropDown(!showDropDown);
    }
    return (
        <div>
            <div className='border-b rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_640.jpg" alt="" />
                        <div className='pl-2'>
                            <p className='font-semibold text-sm'>아이디</p>
                            <p className='font-thin text-sm'>asdf</p>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick}/>
                        <div className='dropdown-content'>
                           {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>


                </div>
                <div className='w-full'>
                    <img className='w-full rounded' src="https://cdn.pixabay.com/photo/2020/06/21/22/11/pika-5326942_640.jpg" alt="" />
                </div>
                <div className='flex justify-between items-center w-full py-4'>
                    <div className='flex items-center space-x-4'>
                        {isPostLiked ? 
                        <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600'  
                        onClick={handlePostLike}/>: 
                        <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer'
                         onClick={handlePostLike}/>}

                        <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer' />
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                    </div>
                    <div className='cursor-pointer'>
                        { isSaved ? 
                        <BsBookmarkFill onClick={handleSavePost} 
                        className='text-xl hover:opacity-50 cursor-pointer'/>
                         :
                        <BsBookmark onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer' />}
                        
                    </div>
                </div>

                <div className='flex justify-start items-center w-full '>
                    <p>좋아요 10개</p>
                </div>
                <div className='flex justify-start items-center w-full '>
                    <p onClick={handleOpenCommentModal} className='opacity-50 cursor-pointer'>댓글 10개 모두 보기 </p>
                </div>
                <div >
                    <div className='flex w-full items-center  py-2'>
                        <input className='commentInput flex w-full justify-end' type="text" placeholder='댓글 달기...'/>
                        <BsEmojiSmile/>    
                    </div>
                </div>
            </div>
            <CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved} OnOpen={onOpen}/>
        </div>
    );
};

export default PostCard;