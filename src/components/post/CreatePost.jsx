import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import "./CreatePost.css"
import {GrEmoji} from 'react-icons/gr'
import {GoLocation} from 'react-icons/go'


const CreatePost = ({
    onClose,isOpen
}
) => {

    const [isDragOver,setIsDragOver]=useState(false);
    const [file,setFile]=useState();
    const [caption,setCaption]=useState("");

    const handleDragOver=(e)=>{
       e.preventDefault();
       e.dataTransfer.dropEffect='copy';
       setIsDragOver(true);
    }
    const handleDragLeave=()=>{
        setIsDragOver(false);
    }

    const handleDrop=(e)=>{
        e.preventDefault();
        const droppedFile=e.dataTransfer.files[0];
        if(droppedFile.type.startsWith("image/")||droppedFile.type.startsWith("video/")){
            setFile(droppedFile);
        }
    }

    const handleOnChange=(e)=>{
       
        const file=e.target.files[0];
        if(file && (file.type.startsWith("image/")|| file.type.startsWith("video/"))){
            setFile(file);
            console.log("file: ", file);
        }
        else {
            setFile(null);
            alert("이미지 혹은 영상을 선택해주세요")
        }
    }
    const handleCaptionChange=(e)=>{
        setCaption(e.target.value)
    }
   
    return (
        <div>
             <Modal size={"3xl"} onClose={onClose} isOpen={isOpen} isCentered>
                 <ModalOverlay />
                    <ModalContent>
                     <div className='flex justify-between py-1 px-10 items-center'>
                          <p>새 게시물 만들기</p>
                         <Button variant={"ghost"} size={"sm"} colorScheme={'blue'}>공유하기</Button>
                     </div>
                    <hr/>
                     <ModalBody>
                    <div className='h-[70vh] justify-between pb-5 flex'>
                        <div className='w-[50%]'>
                              {!file && <div
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                className='drag-drop h-full'
                                >
                                    <div className='flex justify-center p-10'>
                                    <FaPhotoVideo className='text-3xl'/>
                                    </div>
                                    <div className='flex justify-center mb-10'>
                                    <p>사진과 동영상을 여기에 끌어다 놓으세요</p>

                                    </div>
                                    <label htmlFor='upload-file' className='custom-file-upload'>컴퓨터에서 선택</label>
                                    <input className='fileInput' type='file' id='upload-file' accept='image/*, video/*' onChange={handleOnChange}/>
                                </div>}
                            {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt="" />}
                       
                            
                        </div>
                        <div className='w-[1px] border h-full'></div>
                        <div className='w-[50%]'>
                            
                            <div className='flex items-center px-2'>
                                <img className='w-7 h-7 rounded-full' src="https://cdn.pixabay.com/photo/2016/03/05/17/54/schnauzer-1238155_640.jpg" alt="" />
                            <p className='font-semibold ml-4'>아이디</p>
                            </div>
                            <div className='px-2'>
                                <textarea placeholder='문구를 입력하세요' className='captionInput' name='caption' rows="8" onChange={handleCaptionChange}></textarea>
                            </div>
                            <div className='flex justify-between px-2'>
                                <GrEmoji/>
                                <p className='opacity-70'>{caption?.length} /2200</p>
                            </div>
                            <hr />
                            <div className='p-2 flex justify-between items-center'>
                                <input className='locationInput' type='text' placeholder='위치를 입력해주세요' name='location'/>
                                <GoLocation/>
                            </div>
                                <hr />
                        </div>
                    </div>
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                    </ModalContent>
      </Modal>
        </div>
    );
};

export default CreatePost;