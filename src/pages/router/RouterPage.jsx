import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Profile from '../Profile';
import Story from '../Story';
import Login from '../login/Login';
import ExplorePost from '../../components/explore/ExplorePost';
import Explore from '../explore/Explore';

const RouterPage = () => {
    return (
        <>
            <div className='flex'>
                <div className='w-[20%] border border-l-slate-500 '>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/profile' element={<Profile />}></Route>
                        <Route path='/story' element ={<Story/>}></Route>
                        <Route path='/explore' element={<Explore/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default RouterPage;