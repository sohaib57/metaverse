import { FormLabel } from '@carbon/react'
import { Button, Icon, IconButton, Input, Stack, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillCaretDown, AiFillDelete } from 'react-icons/ai'
import CharacterModal from '../canvaComponent/CharacterModal'
import screenBack from '../../../assets/images/screenBack.jpg';
import { IoIosArrowForward } from 'react-icons/io'
import AddFrameModal from '../canvaComponent/AddFrameModal'
import AddSoundModal from '../canvaComponent/AddSoundModal'
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
      {/* <Stack
        justify={'space-between'}
        direction={'row'}
        color={'rgb(110, 110, 110)'}>
        <FormLabel fontSize={'xs'}>Scene 1</FormLabel>
        <Icon as={AiFillDelete} />
      </Stack>
      <Stack
        className="card"
        bgImage={screenBack}
        w={'56'}
        h={'96'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        borderRadius={'md'}
        position={'relative'}>
        <Stack p={'2'} spacing={'-1.5'} align={'center'}>
          <Textarea
            size={'sm'}
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
            _focus={{ bg: 'white' }}
            overflow={'hidden'}
            borderRadius={'md'}
            resize={'none'}
          />
          <Icon as={AiFillCaretDown} sx={{ filter: 'invert(1)' }} />
        </Stack>
        <Stack h={'50%'} px={'4'}>
          <CharacterModal />
        </Stack>

        <Stack position={'absolute'} bottom={'5%'} w={'inherit'}>
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
        <AddSoundModal/>
        <AddFrameModal/>
      </Stack> */}
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Group
            draggable
            onDragStart={() => {
              console.log("dragstart");
            }}
          >
            <Html  divProps={{}} >
              <Stack  h={400}>
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
                  w={'56'}
                  h={'96'}
                  bgRepeat={'no-repeat'}
                  bgSize={'cover'}
                  borderRadius={'md'}
                  position={'relative'}>
                  <Stack p={'2'} spacing={'-1.5'} align={'center'}>
                    <Textarea
                      size={'sm'}
                      _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                      _focus={{ bg: 'white' }}
                      overflow={'hidden'}
                      borderRadius={'md'}
                      resize={'none'}
                    />
                    <Icon as={AiFillCaretDown} sx={{ filter: 'invert(1)' }} />
                  </Stack>
                  <Stack h={'50%'} px={'4'}>
                    <CharacterModal />
                  </Stack>

                  <Stack position={'absolute'} bottom={'5%'} w={'inherit'}>
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
            <Rect width={400} height={400} fill={'red'} />
          </Group>
        </Layer>
      </Stage>
    </>
  )
}

export default Reactkonva

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Stage, Layer, Star, Text } from 'react-konva';

// function generateShapes() {
//   return [...Array(100)].map((_, i) => ({
//     id: i.toString(),
//     x: Math.random() * window.innerWidth,
//     y: Math.random() * window.innerHeight,
//     rotation: Math.random() * 180,
//     isDragging: false,
//   }));
// }

// const INITIAL_STATE = generateShapes();

// const ReactKonva = () => {
//   const [stars, setStars] = React.useState(INITIAL_STATE);

//   const handleDragStart = (e) => {
//     const id = e.target.id();
//     setStars(
//       stars.map((star) => {
//         return {
//           ...star,
//           isDragging: star.id === id,
//         };
//       })
//     );
//   };
//   const handleDragEnd = (e) => {
//     setStars(
//       stars.map((star) => {
//         return {
//           ...star,
//           isDragging: false,
//         };
//       })
//     );
//   };

//   return (
//     <Stage width={window.innerWidth} height={window.innerHeight}>
//       <Layer>
//         <Text text="Try to drag a star" />
//         {stars.map((star) => (
//           <Star
//             key={star.id}
//             id={star.id}
//             x={star.x}
//             y={star.y}
//             height={star.h}
//             numPoints={5}
//             innerRadius={20}
//             outerRadius={40}
//             fill="#89b717"
//             opacity={0.8}
//             draggable
//             rotation={star.rotation}
//             shadowColor="black"
//             shadowBlur={10}
//             shadowOpacity={0.6}
//             shadowOffsetX={star.isDragging ? 10 : 5}
//             shadowOffsetY={star.isDragging ? 10 : 5}
//             scaleX={star.isDragging ? 1.2 : 1}
//             scaleY={star.isDragging ? 1.2 : 1}
//             onDragStart={handleDragStart}
//             onDragEnd={handleDragEnd}
//           />
//         ))}
//       </Layer>
//     </Stage>
//   );
// };

// const container = document.getElementById('root');
// const root = createRoot(container);
// export default ReactKonva

// import React, { Component } from 'react';
// import { createRoot } from 'react-dom/client';
// import { Stage, Layer, Text } from 'react-konva';

// class ReactConva extends Component {
//   state = {
//     isDragging: false,
//     x: 50,
//     y: 50,
//   };

//   render() {
//     return (
//       <Stage width={window.innerWidth} height={window.innerHeight}>
//         <Layer>
//           <Text
//             text="Draggable Text"
//             x={this.state.x}
//             y={this.state.y}
//             draggable
//             fill={this.state.isDragging ? 'green' : 'black'}
//             onDragStart={() => {
//               this.setState({
//                 isDragging: true,
//               });
//             }}
//             onDragEnd={(e) => {
//               this.setState({
//                 isDragging: false,
//                 x: e.target.x(),
//                 y: e.target.y(),
//               });
//             }}
//           />
//         </Layer>
//       </Stage>
//     );
//   }
// }

// const container = document.getElementById('root');
// const root = createRoot(container);
// export default ReactConva -->


/* <html>
<head>
<link rel="stylesheet" type="text/css" media="all" href="css/reset.css" /> <!-- reset css -->
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>

<style>
    body{ background-color: ivory; }
    canvas{border:1px solid red;}
</style>

<script>
$(function(){


    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img, 0,0);
    };
    img.src = "http://images.christmastimeclipart.com/images/2/1271716593176_1788/img_1271716593176_17881.jpg";

    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    var canvasOffset=$("#canvas").offset();
    var offsetX=canvasOffset.left;
    var offsetY=canvasOffset.top;
    var canvasWidth=canvas.width;
    var canvasHeight=canvas.height;
    var isDragging=false;

    function handleMouseDown(e){
      canMouseX=parseInt(e.clientX-offsetX);
      canMouseY=parseInt(e.clientY-offsetY);
      // set the drag flag
      isDragging=true;
    }

    function handleMouseUp(e){
      canMouseX=parseInt(e.clientX-offsetX);
      canMouseY=parseInt(e.clientY-offsetY);
      // clear the drag flag
      isDragging=false;
    }

    function handleMouseOut(e){
      canMouseX=parseInt(e.clientX-offsetX);
      canMouseY=parseInt(e.clientY-offsetY);
      // user has left the canvas, so clear the drag flag
      //isDragging=false;
    }

    function handleMouseMove(e){
      canMouseX=parseInt(e.clientX-offsetX);
      canMouseY=parseInt(e.clientY-offsetY);
      // if the drag flag is set, clear the canvas and draw the image
      if(isDragging){
          ctx.clearRect(0,0,canvasWidth,canvasHeight);
          ctx.drawImage(img,canMouseX-128/2,canMouseY-120/2,128,120);
      }
    }

    $("#canvas").mousedown(function(e){handleMouseDown(e);});
    $("#canvas").mousemove(function(e){handleMouseMove(e);});
    $("#canvas").mouseup(function(e){handleMouseUp(e);});
    $("#canvas").mouseout(function(e){handleMouseOut(e);});

}); // end $(function(){});
</script>

</head>

<body>
    <canvas id="canvas" width=400 height=300></canvas>
</body>
</html> */