import React from 'react';
import './SearchComponents.css'
import SearchUserCard from './SearchUserCard';

const SearchComponents = () => {
    return (
        <div className='searchContainer'>
            <div className='px-3 pb-5'>
                <h1 className='flex justify-start text-xl pb-5'>검색</h1>
                <input className='searchInput' type="text" placeholder='검색' />
            </div>
            <hr />
            <div className='px-3 pt-5'>
                {[1,1,1,1,1].map((item)=><SearchUserCard/>)}
            </div>
        </div>
    );
};

export default SearchComponents;