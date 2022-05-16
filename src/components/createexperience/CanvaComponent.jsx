import React, { useState } from 'react'
import { Button, FormLabel, Icon, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Textarea, useDisclosure ,Input, IconButton } from '@chakra-ui/react'
import dottedBG from '../../assets/images/download.png'
import settings from '../../assets/images/settings.png'
import screenBack from '../../assets/images/screenBack.jpg'
import { AiFillCaretDown, AiFillDelete } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'




const CanvaComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [inputList, setInputList] = useState([]);

    const onAddBtnClick = () => {
        setInputList(inputList.concat(<IconButton key={inputList.length} marginLeft={'24'} icon={<IoIosArrowForward />} bgColor={'#4F9DFC'}  _hover={{}} _active={{}} />));
    };

    return (
        <>
            <Stack className='Canvas Area' bgImage={dottedBG} bgRepeat={'repeat'} h={'full'} justify={'center'} pl={'20'} >
                <Img src={settings} boxSize={'20'} bgColor={'#444444'} left={'20'} borderRadius={'md'} cursor={'pointer'} />
                <Stack spacing={'-2'} className={'formlable'} w={'56'}>
                    <Stack justify={'space-between'} direction={'row'} color={'rgb(110, 110, 110)'}>
                        <FormLabel fontSize={'xs'}>Scene 1</FormLabel>
                        <Icon as={AiFillDelete} />
                    </Stack>
                    <Stack className='card' bgImage={screenBack} w={'56'} h={'96'} bgRepeat={'no-repeat'} bgSize={'cover'} borderRadius={'md'}>
                        <Stack p={'2'} spacing={'-1.5'} align={'center'}>
                            <Textarea size={'sm'} _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }} _focus={{ bg: 'white' }} overflow={'hidden'} borderRadius={'md'} resize={'none'} />
                            <Icon as={AiFillCaretDown} sx={{ filter: 'invert(1)' }} />
                        </Stack>
                        <Stack h={'50%'} px={'4'}>
                            <Button variant={'ghost'} _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }} _focus={{}} border={'2px solid rgba(255, 255, 255, 0.2)'} borderRadius={'100%'} w={'100%'} h={'100%'} onClick={onOpen} />

                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Modal Title</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>

                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </Stack>
                        <Stack overflow={'visible'}>
                            <Button onClick={onAddBtnClick}>Add input</Button>
                            {inputList}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default CanvaComponent