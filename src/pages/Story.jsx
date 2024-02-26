import React from 'react';
import StoryViewer from '../components/storyComponents/StoryViewer';

const Story = () => {
    const story=[
        {
            image:"https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277414_640.jpg"
        }
        ,{
            image:"https://cdn.pixabay.com/photo/2014/03/14/20/13/dog-287420_640.jpg"
        },
        {
            image:"https://cdn.pixabay.com/photo/2017/02/01/09/48/jack-russell-2029214_640.jpg"
        },
        {
            image:"https://cdn.pixabay.com/photo/2020/11/08/10/25/dog-5723334_640.jpg"
        },{
            image:"https://cdn.pixabay.com/photo/2022/01/17/19/59/dog-6945696_640.jpg"
        }
    ]
    return (
        <div>
            <StoryViewer stories={story}/>
        </div>
    );
};

export default Story;