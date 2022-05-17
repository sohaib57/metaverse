import { React } from 'react'
import {Stack} from '@chakra-ui/react'
import Header from '../components/createexperience/Header'
import AddExperience from '../components/createexperience/AddExperience'


const CreateExperience = () => {
    return (
        <>
            <Stack className='Create Experiance' h={'full'} m={'0 !important'}>
                <Header />
                <AddExperience />
            </Stack>
        </>

    )
}

export default CreateExperience