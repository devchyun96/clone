import React, { useState } from 'react';
import {FaBars} from "react-icons/fa"
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [activeMenu,setActiveMenu]=useState();
    const navigate=useNavigate();
    const handleMenu= (title) =>{
        setActiveMenu(title);
        if(title==="프로필"){
            navigate("/profile");
        }
        else if(title==="홈"){
            navigate("/");
        }
    }
    return (
        <div className='sticky top-0 h-[100vh]'>
            <div className='flex flex-col justify-between h-full px-10'>
                <div>

                <div className='pt-10'>
                    <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
                </div>
                <div className='mt-10'>
                    {menu.map((item)=>                    
                    <div onClick={()=>handleMenu(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                        {activeMenu===item.title ?  item.activeIcon : item.icon}
                        <p className={`${activeMenu===item.title? "font-semibold": "font"}`}>{item.title}</p>
                    </div>
                    )}
                </div>
                </div>
                <div className='flex items-center cursor-pointer pb-10'>
                <FaBars className='text-2xl' />
                <p className='ml-5'>더보기</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;