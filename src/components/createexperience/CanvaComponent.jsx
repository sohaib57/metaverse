import React, { useState } from 'react';
import {
  Button,
  FormLabel,
  Icon,
  Img,
  Stack,
  Textarea,
  IconButton
} from '@chakra-ui/react';
import dottedBG from '../../assets/images/download.png';
import settings from '../../assets/images/settings.png';
import AddSoundModal from './canvaComponent/AddSoundModal';
import AddFrameModal from './canvaComponent/AddFrameModal';
import AddNewScreen from './canvaComponent/AddNewScreen';
// import ReactKonva from ReactKonva.html
import ReactKonva from '../../components/createexperience/canvaComponents/Reactkonva'

const CanvaComponent = () => {


  return (
    <>

      <Stack position={'relative'}>
        <Stack
          className="Canvas Area"
          bgImage={dottedBG}
          bgRepeat={'repeat'}
          h={'full'}
          justify={'center'}
          pl={'20'}>
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
              <ReactKonva />
            </Stack>

          </Stack>
        </Stack>
        <Stack position={'absolute'} right={'2'} top={'2'}>
          <AddNewScreen />
        </Stack>
      </Stack>
      <Stack position={'absolute'} right={'2'} top={'2'}>
        <AddNewScreen />
      </Stack>
    </>

  );
};

export default CanvaComponent;
