import React from 'react';
import HomeItem from '../components/home/HomeItem';
import StoryCircle from '../components/story/StoryCircle';
import HomeRightPage from '../components/rightPage/HomeRightPage';
import PostCard from '../components/post/PostCard';
import CreatePost from '../components/post/CreatePost';
import { useDisclosure } from '@chakra-ui/react';

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <div>
        <div className='mt-10 flex w-[100%] justify-center'>
            <div className='w-[44%] px-10 '>
                <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
                    {[1,1,11].map((item) => <StoryCircle/>)}
                </div>

                <div className='space-y-10 w-full mt-10'>
                    {[1,1,1].map((item)=><PostCard/>)}
                </div>
            </div>
            <div className='w-[35%]'>
                <HomeRightPage/>
            </div>
        </div>
    </div>
    );
};

export default Home;