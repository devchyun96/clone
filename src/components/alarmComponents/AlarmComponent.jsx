import React from 'react';
import "./AlarmComponent.css"
import AlarmCard from './AlarmCard';


const AlarmComponent = () => {
    return (
        <div className='AlarmContainer'>
            <div className='px-3 pb-5'>
                <h1 className='flex justify-start text-xl pb-5'>알림</h1>
            </div>
            <div className='px-3 pt-5'>
                {[1,1,1,1,1,1].map((item)=><AlarmCard/>)}
            </div>

        </div>
    );
};

export default AlarmComponent;