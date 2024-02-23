import React from 'react';
import { BsGearWide, BsPencilSquare } from "react-icons/bs";

const UserDetail = () => {
    return (
        <div className='py-10 w-full'>
            <div className='flex justify-center items-center'>
                <div className='w-[15%]'>
                    <img className='w-32 h-32 rounded-full' src="img/logo.png" alt="" /> {/* 프로필 사진이 들어갈 이미지 */}
                </div>
                <div className='space-y-5'>
                    <div className='flex space-x-10 items-center'>
                        <p>아이디</p>
                        <button>프로필 편집</button>
                        <BsGearWide></BsGearWide>
                    </div>
                    <div className='flex space-x-10'>
                    <div>
                        <span className='font-semibold mr-2'>10</span>
                        <span>게시글</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>5</span>
                        <span>팔로워</span>
                    </div>
                    <div>
                        <span>2</span>
                        <span>팔로잉</span>
                    </div>
                    </div>
                    <div className='flex space-x-10 items-center'>
                        <p className='font-semibold'> 진짜이름</p>
                        <p className='font-thin textsm'>asdf</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;