import React, { useState } from 'react';
import {
  Button,
  FormLabel,
  Icon,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  useDisclosure,
  Input,
  IconButton,
  grid,
  Grid,
} from '@chakra-ui/react';
import dottedBG from '../../assets/images/download.png';
import settings from '../../assets/images/settings.png';
import cake from '../../assets/images/cake.png';
import cat from '../../assets/images/cat.png';
import face1 from '../../assets/images/face1.png';
import face2 from '../../assets/images/face2.png';
import fish from '../../assets/images/fish.png';
import screenBack from '../../assets/images/screenBack.jpg';
import { AiFillCaretDown, AiFillDelete } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const CanvaComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputList, setInputList] = useState([]);
  const [Image, setImage] = useState();

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

  const imageHandler = e => {
    console.log(e);
    setImage(e);
    console.log(Image);
  };

  return (
    <>
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
        <Stack spacing={'-2'} className={'formlable'} w={'56'}>
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
              <Button
                bgColor={'inherit'}
                variant={'ghost'}
                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                _focus={{}}
                _active={{}}
                border={'2px solid rgba(255, 255, 255, 0.2)'}
                borderRadius={'100%'}
                w={'100%'}
                h={'100%'}
                onClick={onOpen}
              >
                <Img src={Image} />
              </Button>

              <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Characters</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Stack direction={'row'} flexWrap={'wrap'}>
                      <Img src={cake} onClick={() => imageHandler(cake)} />
                      <Img src={cat} onClick={() => imageHandler(cat)} />
                      <Img src={face1} onClick={() => imageHandler(face1)} />
                      <Img src={face2} onClick={() => imageHandler(face2)} />
                      <Img src={fish} onClick={() => imageHandler(fish)} />
                    </Stack>
                  </ModalBody>
                </ModalContent>
              </Modal>
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
      </Stack>
    </>
  );
};

export default CanvaComponent;
