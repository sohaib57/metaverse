import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsVolumeUpFill } from 'react-icons/bs';
import music from '../../../assets/images/music.mp3';
import music1 from '../../../assets/images/music1.jfif';
const AddSoundModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Audio, setAudio] = useState();
  const [Name, setName] = useState()
  const audioHandler = e => {
    setAudio(e);
    onClose();
  };
  return (
    <>
      <Button
        onClick={onOpen}
        variant={'ghost'}
        border={'1px dashed #5358EE'}
        leftIcon={<BsVolumeUpFill />}
        justifyContent={'start'}
        _focus={{}}
        placeholder={'Add sound'}
      >
        {Audio ? Audio : 'Add Sound'}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sounds</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction={'row'} flexWrap={'wrap'}>
              <Box size={'200px'}>
                <Stack>
                  <Image src={music1} />
                  <Text>Imran Hashmi</Text>
                  <Button onClick={() => audioHandler(music)}>Use</Button>
                </Stack>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSoundModal;
