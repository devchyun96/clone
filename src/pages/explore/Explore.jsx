import React from 'react';
import ExplorePost from '../../components/explore/ExplorePost';
import "./Explore.css"

const Explore = () => {
    return (
        <div className='ExploreContainer'>
            <div className='grid grid-cols-3'>
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item)=><ExplorePost/>)}
            </div>
        </div>
    );
};

export default Explore;