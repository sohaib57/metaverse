import { React, useState } from 'react'
import { Stack } from '@chakra-ui/react'
import CanvaComponent from './CanvaComponent'
import SidebarSetting from './SidebarSetting'
const AddExperience = () => {


    return (
        <Stack flexDirection={{ base: 'column', lg: 'row' }} h={'100vh'} margin={'0 !important'} width={'full'}  >
            <Stack margin={'0px !important'} width={'80%'} height={'full'} overflow={'auto'}   >
                <CanvaComponent />
            </Stack>

            <Stack margin={'0px !important'} pt={{ base: '20', lg: '0' }} height={'100%'} width={{ base: '100%', lg: '20%' }} bg='rgba(0, 0, 0, 0.03)'   >
                <SidebarSetting />
            </Stack>



        </Stack>

    )
}

export default AddExperience