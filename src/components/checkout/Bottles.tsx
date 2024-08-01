import React from 'react';
import styled from 'styled-components';
import { bottleImage, plusIcon } from '../../constants/images';
import { Img } from '../../style';
import { useDeviceType } from '../../context/DeviceContext';

interface BottlesGroupingProps {
    qty: number
    free: number
}




export const Bottles = ({qty,free}:BottlesGroupingProps) =>{
  const {isMobile} = useDeviceType()
  const width = isMobile ?28:70
  const height = width*1.8
  return (
    <Container>
      <Col>
      <ImageStackContainer count={qty>1?2:1} width={width} height={height}>
      <Image width={width} height={height} src={bottleImage} />
      {qty>1 && 
      <Image width={width} height={height} src={bottleImage} />
      }
      {qty>2 && 
      <Image width={width} height={height} src={bottleImage} />
      }
    </ImageStackContainer>
      </Col>
      <Col>
        <Img src={plusIcon} width={isMobile ?"22px":"36px"}/>
      </Col>
      <Col>
      <ImageStackContainer width={width} height={height} count={free>1?2:1}>
      <Image width={width} height={height} src={bottleImage} />
      {free>1 && 
      <Image width={width} height={height} src={bottleImage} />
      }
      {free>2 && 
      <Image  width={width} height={height} src={bottleImage} />
      }
    </ImageStackContainer>
      </Col>
    </Container>
  );
} 

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0px; /* Adjust the gap between the two sets of images */
`;

const Col = styled.div`
  display: flex;
  justify-content: space-around; /* Center the image stacks horizontally */
  align-items: center; /* Center the image stacks vertically */
`;

const ImageStackContainer = styled.div<{count:number,width:number,height:number}>`
  display: grid;
  grid-template-columns: repeat(${props=>props.count}, ${props=>props.width}px); /* Adjust columns based on image size */
  position: relative;
  justify-content: center;
  height: ${props=>props.height}px; /* Adjust height based on image size */
  overflow: hidden; /* Hide overflow to ensure proper alignment */
`;

const Image = styled.img<{width:number,height:number}>`
  width: ${props=>props.width}px; /* Fixed width for the images */
  height: ${props=>props.height}px; /* Fixed height for the images */
  transition: all 0.3s ease-in-out;
  position: absolute;

  &:nth-child(1) {
    z-index: 1;
    left: 0px;
  }

  &:nth-child(2) {
    left: ${props=>props.width/2}px;
    z-index: 2;
    
  }

  &:nth-child(3) {
    right: 0px;
    z-index: 1;
  }

  &:hover {
    opacity: 1;
  }
`;

