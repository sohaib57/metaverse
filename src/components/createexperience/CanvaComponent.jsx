import React, { useState, useEffect } from 'react';
import {
  Button,
  FormLabel,
  Icon,
  Img,
  Stack,
  Textarea,
  IconButton,
  Text,
} from '@chakra-ui/react';
import dottedBG from '../../assets/images/download.png';
import settings from '../../assets/images/settings.png';
import screenBack from '../../assets/images/screenBack.jpg';
import { AiFillCaretDown, AiFillDelete } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { BsVolumeUpFill } from 'react-icons/bs';
import CharacterModal from './canvaComponent/CharacterModal';
import AddSoundModal from './canvaComponent/AddSoundModal';
import music from '../../assets/images/music.mp3';
import AddFrameModal from './canvaComponent/AddFrameModal';
import AddNewScreen from './canvaComponent/AddNewScreen';

const CanvaComponent = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = () => {
    setInputList(
      inputList.concat(
        <IconButton
          key={inputList.length}
          marginLeft={'24'}
          icon={<IoIosArrowForward />}
          bgColor={'#4F9DFC'}
          _hover={{}}
          _active={{}}
        />
      )
    );
  };

  return (
    <>
      <Stack position={'relative'}>
        <Stack
          className="Canvas Area"
          bgImage={dottedBG}
          bgRepeat={'repeat'}
          h={'full'}
          justify={'center'}
          pl={'20'}
        >
          <Img
            src={settings}
            boxSize={'20'}
            bgColor={'#444444'}
            left={'20'}
            borderRadius={'md'}
            cursor={'pointer'}
          />
          <Stack className={'formlable'} w={'56'}>
            <Stack spacing={'-2'}>
              <Stack
                justify={'space-between'}
                direction={'row'}
                color={'rgb(110, 110, 110)'}
              >
                <FormLabel fontSize={'xs'}>Scene 1</FormLabel>
                <Icon as={AiFillDelete} />
              </Stack>
              <Stack
                className="card"
                bgImage={screenBack}
                w={'56'}
                h={'96'}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                borderRadius={'md'}
                position={'relative'}
              >
                <Stack p={'2'} spacing={'-1.5'} align={'center'}>
                  <Textarea
                    size={'sm'}
                    _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                    _focus={{ bg: 'white' }}
                    overflow={'hidden'}
                    borderRadius={'md'}
                    resize={'none'}
                  />
                  <Icon as={AiFillCaretDown} sx={{ filter: 'invert(1)' }} />
                </Stack>
                <Stack h={'50%'} px={'4'}>
                  <CharacterModal />
                </Stack>

                <Stack position={'absolute'} bottom={'5%'} w={'inherit'}>
                  <Button
                    onClick={onAddBtnClick}
                    variant={'ghost'}
                    bgColor={'rgba(255, 255, 255, 0.1)'}
                    border={'2px solid rgba(255, 255, 255, 0.2)'}
                    _hover={{ bgColor: 'rgba(255, 255, 255, 0.3)' }}
                  />
                  {inputList}
                </Stack>
              </Stack>
            </Stack>
            <Stack color={'#5358EE'}>
              <AddSoundModal />
              <AddFrameModal />
            </Stack>
          </Stack>
        </Stack>
        <Stack position={'absolute'} right={'2'} top={'2'}>
          <AddNewScreen/>
        </Stack>
      </Stack>
    </>
  );
};

export default CanvaComponent;
