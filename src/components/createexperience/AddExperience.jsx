import { React, useState } from 'react'
import { Stack } from '@chakra-ui/react'
import CanvaComponent from './CanvaComponent'
const AddExperience = () => {


    return (
        <Stack flexDirection={'row'} h={'100vh'} margin={'0 !important'} width={'full'}  >
            <Stack margin={'0px !important'} width={'80%'} height={'full'} overflow={'auto'}   >
                <CanvaComponent />
            </Stack>

            <Stack margin={'0px !important'} height={'100%'} width={'20%'} background={'skyblue'}  >

                <Stack>

                </Stack>
            </Stack>

        </Stack>

    )
}

export default AddExperience