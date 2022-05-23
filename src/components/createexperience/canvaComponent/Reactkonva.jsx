import { FormLabel } from '@carbon/react'
import { Button, Icon, IconButton, Input, Stack, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillCaretDown, AiFillDelete } from 'react-icons/ai'
import CharacterModal from './CharacterModal'
import screenBack from '../../../assets/images/screenBack.jpg';
import { IoIosArrowForward } from 'react-icons/io'
import AddFrameModal from './AddFrameModal'
import AddSoundModal from './AddSoundModal'
import { Html } from 'react-konva-utils'
import { Group, Layer, Rect, Stage } from 'react-konva'

const Reactkonva = () => {
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
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Group
            draggable
            onDragStart={() => {
              console.log("dragstart");
            }}
          >
            <Html divProps={{}} >
              <Stack h={400}>
                <Stack
                  justify={'space-between'}
                  direction={'row'}
                  color={'rgb(110, 110, 110)'}>
                  <FormLabel fontSize={'xs'}>Scene 1</FormLabel>
                  <Icon as={AiFillDelete} />
                </Stack>
                <Stack
                  className="card"
                  bgImage={screenBack}
                  w={200}
                  h={400}
                  bgRepeat={'no-repeat'}
                  bgSize={'cover'}
                  borderRadius={'md'}
                  position={'relative'}>
                  <Stack p={'2'} spacing={'-2.5'} align={'center'}>
                    <Textarea
                      size={'sm'}
                      _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                      _focus={{ bg: 'white' }}
                      overflow={'hidden'}
                      borderRadius={2}
                      resize={'none'}
                      bg={'rgba(255, 255, 255, 0.1)'}
                      border={'2px solid rgba(255, 255, 255, 0.2)'}
                      w={190}

                    />
                    <Icon as={AiFillCaretDown} sx={{ filter: 'invert(1)' }} />
                  </Stack>
                  <Stack h={'50%'} px={'4'}>
                    <CharacterModal />
                  </Stack>

                  <Stack className='Add Button' position={'absolute'} bottom={'5%'} w={400}>
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
                <Stack pt={'3'} spacing={'1'}>
                  <AddSoundModal />
                  <AddFrameModal />
                </Stack>
              </Stack>
            </Html>
            <Rect width={220} height={420} />
          </Group>
        </Layer>
      </Stage>
    </>
  )
}

export default Reactkonva