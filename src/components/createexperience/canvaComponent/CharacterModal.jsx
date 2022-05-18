import React, { useState } from 'react';
import {
  Button,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import cake from '../../../assets/images/cake.png';
import cat from '../../../assets/images/cat.png';
import face1 from '../../../assets/images/face1.png';
import face2 from '../../../assets/images/face2.png';
import fish from '../../../assets/images/fish.png';

const CharacterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Image, setImage] = useState();
  const imageHandler = e => {
    setImage(e);
    onClose();
  };
  return (
    <>
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
    </>
  );
};

export default CharacterModal;
