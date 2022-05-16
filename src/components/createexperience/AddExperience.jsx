import { React, useState } from 'react'
import { Stack } from '@chakra-ui/react'
import CanvaComponent from './CanvaComponent'
const AddExperience = () => {


    return (
        <Stack flexDirection={'row'} width={'full'} >
            <Stack margin={'0px !important'} width={'80%'} height={'100%'} backgroundColor={'red'} >
                <CanvaComponent />
            </Stack>

            <Stack margin={'0px !important'} width={'20%'} background={'skyblue'}  >

                <Stack>

                </Stack>
            </Stack>

        </Stack>

    )
}

export default AddExperience