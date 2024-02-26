import React from 'react';
import SuggetionCard from './SuggetionCard';

const HomeRightPage = () => {
    return (
        <div>
            <div>
                <div>
                    <div className='flex mb-1 items-center'>
                        <div>
                            <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2017/10/30/11/06/cheetah-2902163_640.jpg" alt=''/>
                        </div>
                        <div className='flex w-full ml-3 justify-center'>
                            <div className='w-[45%]'>
                                <div className='flex justify-start'>
                                <p className='text-sm'>이름</p>
                                </div>
                                <div className='flex justify-start'>
                                <p className='text-sm opacity-70'>아이디</p>

                                </div>
                            </div>
                            <div className='flex w-[55%] justify-end'>
                                <button>전환</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex justify-start w-[75%]'>
                        <span>회원님을 위한 추천</span>
                        </div>
                        <button className='flex justify-end w-[25%]'>
                        <span className='text-xs opacity-60'>모두 보기</span>
                        </button>
                    </div>
                    <div>
                        {[,1,1,1,11,1].map((item)=><SuggetionCard/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeRightPage;
