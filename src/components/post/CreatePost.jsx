import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';

const CreatePost = (
    onClose,isOpen
) => {

    const [isDragOver,setIsDragOver]=useState(false);

    const handleDragOver=(e)=>{
       e.preventDefault();
       e.dataTransfer.dropEffect='copy';
       setIsDragOver(true);
    }
    const handleDragLeave=()=>{
        
    }

    const handleDrop=()=>{

    }
   
    return (
        <div>
             <Modal size={"3xl"} isOpen={true} onClose={onClose} isCentered>
                 <ModalOverlay />
                    <ModalContent>
                     <div className='flex justify-between py-1 px-10 items-center'>
                          <p>새 게시물 만들기</p>
                         <Button variant={"ghost"} size={"sm"} colorScheme={'blue'}>공유하기</Button>
                     </div>
                    <hr/>
                     <ModalBody>
                    <div>
                        <div>
                            <div>
                                <div
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
                                </div>
                            </div>
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