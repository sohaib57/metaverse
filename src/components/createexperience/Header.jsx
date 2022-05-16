import { Button, Divider, IconButton, Img, Input, Stack } from '@chakra-ui/react';
import React from 'react'
import { IoIosArrowBack, IoMdUndo } from 'react-icons/io'
import { BiZoomIn, BiZoomOut , BiLinkExternal} from 'react-icons/bi'
import { BsFillPlayFill } from 'react-icons/bs'
import { MdPublish } from 'react-icons/md'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <>
            <Stack bgColor={'rgb(28, 43, 52)'} h={'12'} direction={'row'} align={'center'} justify={'space-between'} pr={'2'}>
                <Stack direction={'row'} h={'full'} align={'center'} className='right'>
                    <Stack as={Button} borderRadius={'none'} h={'full'} w={'fit-content'} bgColor={'#102026'} _hover={{ bgColor: '#122229', color: 'ced1d2' }} direction={'row'} align={'center'}>
                        <Stack sx={{ filter: 'invert(1)' }} >
                            <IoIosArrowBack size={'16'} />
                        </Stack>
                        <Img src={logo} boxSize={'7'} w={'12'} />
                    </Stack>
                    <Input fontWeight={'bold'} placeholder='Unititled Experiance' variant={'unstyled'} color={'white'} width={'60'} /*borderRight={'1px solid rgb(0 0 0 / 90%)'}*/ borderRadius={'none'} />
                    <Divider orientation='vertical' h={'60%'} borderColor={'rgb(0 0 0 / 90%)'} />
                    <IconButton icon={<IoMdUndo />} bgColor={'inherit'} color={'#7d858a'} _hover={{ bgColor: '#141F26' }} />
                    <Divider orientation='vertical' h={'60%'} borderColor={'rgb(0 0 0 / 90%)'} />
                    <IconButton icon={<BiZoomIn />} bgColor={'inherit'} color={'#CDCDCD'} _hover={{ bgColor: '#141F26' }} />
                    <IconButton icon={<BiZoomOut />} bgColor={'inherit'} color={'#CDCDCD'} _hover={{ bgColor: '#141F26' }} />
                    <Divider orientation='vertical' h={'60%'} borderColor={'rgb(0 0 0 / 90%)'} />
                </Stack>
                <Stack className='right' direction={'row'}>
                    <Button height={'7'} leftIcon={<BsFillPlayFill />} bgColor={'#102026'} _hover={{ bgColor: '#030405', color: 'ced1d2' }} color={'#CDCDCD'} borderRadius={'none'} _active={{}} _focus={{}} >Test</Button>
                    <Button height={'7'} leftIcon={<BiLinkExternal />} isDisabled bgColor={'#102026'} _hover={{ bgColor: '#030405', color: 'ced1d2' }} color={'#CDCDCD'} borderRadius={'none'} _active={{}} _focus={{}} >Share</Button>
                    <Button height={'7'} leftIcon={<MdPublish />} bgColor={'#102026'} _hover={{ bgColor: '#030405', color: 'ced1d2' }} color={'#CDCDCD'} borderRadius={'none'} _active={{}} _focus={{}} >Publish</Button>
                </Stack>
            </Stack>
        </>
    )
}

export default Header;