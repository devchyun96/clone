import React, { useState } from 'react';
import {FaBars, FaInstagram} from "react-icons/fa"
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';
import CreatePost from '../post/CreatePost';
import { useDisclosure } from '@chakra-ui/react';
import SearchComponents from '../searchComponents/SearchComponents';

const Sidebar = () => {
    const [activeMenu,setActiveMenu]=useState("");
    const navigate=useNavigate();
    const {isOpen,onClose,onOpen}=useDisclosure();
    const [isSearchVisible,setIsSearchVisible]=useState(false);

    const handleMenu= (title) =>{
        setActiveMenu(title);

        if(title==="프로필"){
            navigate("/profile");
        }
         if(title==="홈"){
            navigate("/");
        }
         if(title==='만들기'){
            onOpen();
        }
        if(title==='검색'){
            setIsSearchVisible(true);
        }else{
            setIsSearchVisible(false);
        }
        if(title==='탐색'){
            navigate("/explore");
        }
    }
    return (
        <div className='sticky top-0 h-[100vh] flex'>
            <div className={`flex flex-col justify-between h-full ${activeMenu==="검색"?"px-2":"px-10"}`}>
                {<div>

                {activeMenu!=='검색' 
                ? 
                <div className='pt-10'>
                    <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
                </div> 
                :
                <div className='mt-20'>
                    <FaInstagram className='text-2xl'/>
                </div>}
                <div className='mt-10'>
                    {menu.map((item)=>                    
                    <div 
                    onClick={()=>handleMenu(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                        {activeMenu===item.title ?  item.activeIcon : item.icon}
                        {activeMenu!=='검색' && <p className={`${activeMenu===item.title? "font-semibold": "font"}`}>{item.title}</p>}
                    </div>
                    )}
                </div>
                </div>}
                <div className='flex items-center cursor-pointer pb-10'>
                <FaBars className='text-2xl' />
                {activeMenu!=='검색' && <p className='ml-5'>더보기</p>}
                </div>
            </div>
            <CreatePost onClose={onClose} isOpen={isOpen} />
            {isSearchVisible&&<SearchComponents/>}
        </div>
    );
};

export default Sidebar;