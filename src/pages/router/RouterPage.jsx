import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Profile from '../Profile';
import Story from '../Story';

const RouterPage = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[20%] border border-l-slate-500 '>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/profile' element={<Profile />}></Route>
                        <Route path='/story' element ={<Story/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default RouterPage;