import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BiImageAdd } from 'react-icons/bi';


const AddFrameModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        onClick={onOpen}
        variant={'ghost'}
        border={'1px dashed #5358EE'}
        leftIcon={<BiImageAdd />}
        justifyContent={'start'}
        _focus={{}}
        placeholder={'Add sound'}
      >
        Add Frame
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Frame</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddFrameModal