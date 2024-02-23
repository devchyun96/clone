import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import CommentCard from './CommentCard';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import "./CommentModal.css";

const CommentModal = ({
    onClose,
    isOpen,
    isSaved,
    isPostLiked,
    handlePostLike,
    handleSavePost}) => {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className='flex h-[75vh]'>
                        <div className='w-[45%] flex flex-col justify-center'>
                            <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2020/06/21/22/11/pika-5326942_640.jpg" alt="" />
                        </div>
                        <div className='border w-[55%]'>
                            <div className='border-b flex justify-between items-center px-3 py-3'>

                                <div className='flex items-center'>
                                    <div>
                                        <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_640.jpg" alt="" />
                                    </div>
                                    <div className='ml-2'>
                                        <p>아이디</p>
                                    </div>
                                </div>
                            
                                <BsThreeDots/>
                            </div>
                            <div className='comment border-b'>
                                {[1,1,1,1,1].map((item)=><CommentCard/>)}
                            </div>
                            <div className='border-b pb-4'>

                                <div className='flex justify-between items-center w-full px-3 py-4'>
                                    <div className='flex items-center space-x-4'>
                                        {isPostLiked ? 
                                        <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600'  
                                        onClick={handlePostLike}/>: 
                                        <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer'
                                         onClick={handlePostLike}/>}
                                        <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
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
                                    <div className='flex justify-start items-center w-full px-3'>
                                        <p className='font-semibold'>좋아요 10개</p>
                                    </div>
                                    <div className='flex items-center space-x-3 text-xs opacity-60 px-3'>
                                        <p>1일전</p>
                                    </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='flex justify-start items-center w-full px-3 py-4'>
                                    <BsEmojiSmile/> 
                                    <input className='commentInput' type="text" placeholder='댓글 달기...'/>
                                </div>
                                <div className='flex justify-end items-center w-full px-3'>
                                    <span className='opacity-60 text-sky-300 '>게시</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
      </Modal>
        </div>
    );
};

export default CommentModal;