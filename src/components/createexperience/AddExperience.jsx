import { React, useState } from 'react'
import { Stack } from '@chakra-ui/react'
import CanvaComponent from './CanvaComponent'
import SidebarSetting from './SidebarSetting'
const AddExperience = () => {


    return (
        <Stack flexDirection={'row'} width={'full'} height={'100vh'} >
            <Stack margin={'0px !important'} width={'80%'} height={'100%'} backgroundColor={'red'} >
                <CanvaComponent />
            </Stack>

            <Stack margin={'0px !important'} height={'100%'} width={'20%'} bg='rgba(0, 0, 0, 0.03)'   >
                <SidebarSetting />
            </Stack>

        </Stack>

    )
}

export default AddExperience