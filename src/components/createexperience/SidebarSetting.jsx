import { useState } from 'react';
import {
    Stack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    ButtonGroup,
    Button,
    Text,
    Switch,
    Select,
    Input,
    HStack,
    Circle,
    Square,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Image,
    VStack,



} from '@chakra-ui/react'
import { DatePicker, DatePickerInput } from '@carbon/react'
import { CirclePicker, HuePicker, CustomPicker } from 'react-color'
import AR from '../../assets/images/AR.png'
import bg from '../../assets/images/bg.jpg'
import ReactCalendar from '../createexperience/ui/ReactCalendar'
import ReactTimer from '../createexperience/ui/ReactTimer'



const SidebarSetting = ({ hex, hsl, hsv }) => {
    var { Saturation } = require('react-color/lib/components/common');
    const [inputScene, setInputScene] = useState(false);
    const [inputBlock, setInputBlock] = useState(false);
    const [showSquareSlider, setShowSquareSlider] = useState(false)
    const [showCircleSlider, setShowCircleSlider] = useState(false)
    const [color, setColor] = useState('#00bcd4')
    const [checkedSwitch, setCheckedSwitch] = useState()
    const [timerDelayValue, setDelayTimerValue] = useState()
    const [timerTransitionValue, setTimerTransitionValue] = useState()


    const styles = {

        saturation: {
            width: 220,
            height: 100,
            position: "relative"
        }
    };


    function swit(e) {

        setCheckedSwitch(e.target.checked)

    }
    function timerTyperHandler(value) {
        const timer = value.target.value
        if (timer === "Delay") {

            setDelayTimerValue(true)

        }
        else if (timer === "At timestamp") {

            setTimerTransitionValue(true)
            setDelayTimerValue(false)


        }
        else {

            setDelayTimerValue(false)
            setTimerTransitionValue(false)

        }
    }

    function hideSliderHandler() {
        setShowSquareSlider(false)
        setShowCircleSlider(false)
    }


    function squareSliderHandler() {

        setShowSquareSlider(true)
        setShowCircleSlider(false)

    }
    function circleSliderHandler() {

        setShowCircleSlider(true)
        setShowSquareSlider(false)


    }

    function onHandleChange(event) {
        const value = event.target.value
        if (value === "Transition to scene") {
            setInputScene(true);
        }
        else if (value === "Transition to Block") {

            setInputBlock(true)
            setInputScene(false)

        }
        else {
            setInputScene(false)
            setInputBlock(false)
        }
    }


    return (
        <Stack>

            <Accordion defaultIndex={[0]} allowMultiple p={'2'} >
                {/* background style */}
                <AccordionItem mb={'2'} border='1px solid rgb(230, 230, 230)'>
                    <AccordionButton bg='rgba(0, 0, 0, 0.05)' px={2}  >
                        <AccordionIcon />
                        <Box pl={1} fontWeight={'bold'} color='rgba(0, 0, 0, 0.8)' fontSize='12px' flex='1' textAlign='left'>
                            Background style
                        </Box>

                    </AccordionButton>
                    <AccordionPanel pb={4} bg={'white'}>
                        <ButtonGroup isAttached variant='outline'>
                            <Button _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} width={'110px'} height={'70px'}  >
                                <Stack spacing={'0 !important'} >
                                    <Image
                                        boxSize='40px'
                                        objectFit='cover'
                                        src={AR}

                                    />

                                    <Text>   AR  </Text>
                                </Stack>
                            </Button>

                            <Button _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} width={'110px'} height={'70px'}  >
                                <VStack spacing={'0 !important'} >
                                    <Image
                                        boxSize='40px'
                                        objectFit='cover'
                                        src={bg}

                                    />

                                    <Text>  Background </Text>
                                </VStack>
                            </Button>
                        </ButtonGroup>

                    </AccordionPanel>
                </AccordionItem>
                {/* Response style */}

                <AccordionItem mb={'2'} border='1px solid rgb(230, 230, 230)' >
                    <AccordionButton bg='rgba(0, 0, 0, 0.05)' px={2} >
                        <AccordionIcon />
                        <Box pl={1} fontWeight={'bold'} color='rgba(0, 0, 0, 0.8)' fontSize='12px' flex='1' textAlign='left'>
                            Response style
                        </Box>

                    </AccordionButton>
                    <AccordionPanel pb={4} bg={'white'} >
                        <Stack>
                            <Text color={'rgb(110, 110, 110)'} fontSize={'smaller'} >
                                Shape
                            </Text>
                            <Stack direction={'row'} >
                                <Stack onClick={hideSliderHandler} _active={{ border: '1px solid rgb(74, 155, 255)' }} bg={'rgb(250, 250, 250)'} border={'1px solid rgb(230, 230, 230)'} p={'2'} cursor={'pointer'} >

                                    <Box width={'50px'} height={'10px'} bg={'rgba(0, 0, 0, 0.2)'}>
                                    </Box>


                                    <Box width={'50px'} height={'10px'} bg={'rgba(0, 0, 0, 0.2)'}>
                                    </Box>



                                    <Box width={'50px'} height={'10px'} bg={'rgba(0, 0, 0, 0.2)'}>
                                    </Box>


                                </Stack>

                                <Stack onClick={squareSliderHandler} _active={{ border: '1px solid rgb(74, 155, 255)' }} bg={'rgb(250, 250, 250)'} border={'1px solid rgb(230, 230, 230)'} p={'2'} cursor={'pointer'} >
                                    <HStack>
                                        <Square bg={'rgba(0, 0, 0, 0.2)'} size='20px' >
                                        </Square>
                                        <Square bg={'rgba(0, 0, 0, 0.2)'} size='20px' >
                                        </Square>
                                    </HStack>
                                    <HStack>
                                        <Square bg={'rgba(0, 0, 0, 0.2)'} size='20px' >

                                        </Square>
                                        <Square bg={'rgba(0, 0, 0, 0.2)'} size='20px' >

                                        </Square>

                                    </HStack>

                                </Stack>

                                <Stack onClick={circleSliderHandler} _active={{ border: '1px solid rgb(74, 155, 255)' }} bg={'rgb(250, 250, 250)'} border={'1px solid rgb(230, 230, 230)'} p={'2'} cursor={'pointer'} >
                                    <HStack>
                                        <Circle bg={'rgba(0, 0, 0, 0.2)'} size='20px' >
                                        </Circle>
                                        <Circle size='20px' bg={'rgba(0, 0, 0, 0.2)'}>
                                        </Circle>
                                    </HStack>
                                    <HStack>
                                        <Circle size='20px' bg={'rgba(0, 0, 0, 0.2)'}>

                                        </Circle>
                                        <Circle size='20px' bg={'rgba(0, 0, 0, 0.2)'}>

                                        </Circle>

                                    </HStack>

                                </Stack>

                            </Stack>

                        </Stack>

                        {showSquareSlider ?
                            <Stack pt={'2'} spacing={'0 !important'} >
                                <Text fontSize={'smaller'} color={'rgb(110, 110, 110)'}  >Number of Columns</Text>
                                <Slider min={0} max={6} defaultValue={2}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </Stack> : null}

                        {showCircleSlider ?
                            <Stack pt={'2'} spacing={'0 !important'} >
                                <Text fontSize={'smaller'} color={'rgb(110, 110, 110)'} >Number of Columns</Text>
                                <Slider min={0} max={6} defaultValue={4}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </Stack> : null}

                        <Text pt={'2'} fontSize='smaller' color={'rgb(110, 110, 110)'} > Button color</Text>

                        <Stack spacing={4} pt={'2'} >

                            <div style={styles.saturation}>
                                <Saturation hsl={hsl} hsv={hsv} />
                            </div>


                            <HuePicker height='10px' width='220px' color={color} onChange={updatedColor => setColor(updatedColor.hex)} />

                            <CirclePicker width='220px' color={color} onChangeComplete={updatedColor => setColor(updatedColor.hex)} />

                            <Input size={'sm'} value={color} />
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                {/* Timer */}

                <AccordionItem mb={'2'} border='1px solid rgb(230, 230, 230)' >
                    <AccordionButton bg='rgba(0, 0, 0, 0.05)' px={2} >
                        <AccordionIcon />
                        <Box pl={1} fontWeight={'bold'} color='rgba(0, 0, 0, 0.8)' fontSize='12px' flex='1' textAlign='left'>
                            Timer
                        </Box>

                    </AccordionButton>
                    <AccordionPanel bg={'white'}  >

                        <Stack direction={'row'} >
                            <Stack alignSelf={'center'}>
                                <Switch onChange={swit} size='md' />
                            </Stack>
                            <Stack spacing={'0'}>
                                <Text color='rgba(0, 0, 0, 0.8)' fontSize='12px' >
                                    Use a timer to transition automatically
                                </Text>
                            </Stack>

                        </Stack>

                        {
                            checkedSwitch ?
                                <Stack>
                                    <Text color='rgba(0, 0, 0, 0.8)' fontSize='12px' >Timer type</Text>
                                    <Select size={'sm'} onChange={timerTyperHandler} >
                                        <option value="Choose"> Choose  </option>
                                        <option value="Delay" >Delay</option>
                                        <option value="At timestamp" > At timestamp</option>
                                    </Select>
                                    {
                                        timerDelayValue ?
                                            <Stack>
                                                <Text color='rgba(0, 0, 0, 0.8)' fontSize='12px' >
                                                    Delay (seconds)
                                                </Text>
                                                <Input size={'sm'} defaultValue={'5'} ></Input>
                                            </Stack> : timerTransitionValue ? <Stack>

                                                <ReactCalendar />
                                                <ReactTimer />

                                            </Stack> : null

                                    }

                                    <Text color='rgba(0, 0, 0, 0.8)' fontSize='12px' >
                                        Default transition
                                    </Text>
                                    <Select size={'sm'} onChange={onHandleChange}>
                                        <option value='Do nothing'>Do nothing</option>
                                        <option value='Transition to scene'>Transition to scene</option>
                                        <option value='Transition to Block'>Transition to block</option>
                                        <option value='End experience'>End experience</option>
                                        <option value='Suspend experience'>Suspend experience</option>
                                    </Select>
                                    {inputScene ? <Select size={'sm'} >
                                        <option value="" disabled selected hidden>Select a scene</option>
                                        <option value='New Scene'>New Scene</option>
                                    </Select>
                                        : inputBlock ? <Select size={'sm'} >
                                            <option value="" disabled selected hidden>Select a block</option>
                                            <option value='New Block'>New Block</option>
                                            <option value='Entry'>Entry</option>

                                        </Select> : null}
                                    <Stack direction={'row'} >
                                        <Stack alignSelf={'center'}>
                                            <Switch size='md' />
                                        </Stack>
                                        <Stack spacing={'0'}>
                                            <Text color='rgba(0, 0, 0, 0.8)' fontSize='12px' >
                                                Force user to wait until timer finishes before transitioning
                                            </Text>
                                        </Stack>

                                    </Stack>

                                </Stack> :
                                null

                        }


                    </AccordionPanel>
                </AccordionItem>

                {/* Transition control */}
                <AccordionItem mb={'2'} border='1px solid rgb(230, 230, 230)' >
                    <AccordionButton bg='rgba(0, 0, 0, 0.05)' px={2} >
                        <AccordionIcon />
                        <Box pl={1} fontWeight={'bold'} color='rgba(0, 0, 0, 0.8)' fontSize='12px' flex='1' textAlign='left'>
                            Transition control
                        </Box>

                    </AccordionButton>
                    <AccordionPanel pb={4} bg={'white'} >
                        <Select size={'sm'} onChange={onHandleChange}>
                            <option value='Do nothing'>Do nothing</option>
                            <option value='Transition to scene'>Transition to scene</option>
                            <option value='Transition to Block'>Transition to block</option>
                            <option value='End experience'>End experience</option>
                            <option value='Suspend experience'>Suspend experience</option>
                        </Select>

                        <Text pt={'2'} fontSize={'11px'} opacity={'0.5'} >Nothing will happen when this experience is
                            finished being drawn on the screen.
                        </Text>

                        {inputScene ? <Select size={'sm'} >
                            <option value="" disabled selected hidden>Select a scene</option>
                            <option value='New Scene'>New Scene</option>
                        </Select>
                            : inputBlock ? <Select size={'sm'} >
                                <option value="" disabled selected hidden>Select a block</option>
                                <option value='New Block'>New Block</option>
                                <option value='Entry'>Entry</option>

                            </Select> : null}

                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

        </Stack >
    )
}

export default CustomPicker(SidebarSetting)