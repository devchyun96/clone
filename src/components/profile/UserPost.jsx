import React, { useState } from 'react';
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai';
import {BiBookmark} from 'react-icons/bi'
import UserPostCard from './UserPostCard';

const UserPost = () => {
    const [activeTab, setActiveTab] =useState();
    const tabs=[
        {
            tab:"게시물",
            icon: <AiOutlineTable></AiOutlineTable>,
            activeTab: ""
        },
        {
            tab: "저장됨",
            icon: <BiBookmark></BiBookmark>
        },
        {
            tab:  "태그됨",
            icon: <AiOutlineUser></AiOutlineUser>
        }
    ]
    return (
        <div>
            <div className='flex space-x-14 border-t relative justify-center'>
                {tabs.map((item)=>
                <div onClick={()=> setActiveTab(item.tab)} className={`${activeTab===item.tab? "border-t border-black":"opacity-60"} 'flex items-center cursor-pointer py-2 text-sm'`}>
                    <p>{item.icon}</p>
                    <p className='ml-1 text-sm'>{item.tab}</p>
                </div>
                )}
            </div>
            <div>
                <div className='flex flex-wrap'>
                    {[1,1,1,1,1].map((item)=><UserPostCard/>)}
                </div>
            </div>
        </div>
    );
};

export default UserPost;