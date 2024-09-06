import React from 'react';
import styled from 'styled-components';

import Effect1Image from "../../assets/images/effect-1.jpg";
import Effect2Image from "../../assets/images/effect-2.jpg";
import Effect3Image from "../../assets/images/effect-3.jpg";

import ArrowUpSvg from "../../assets/images/arrow-up.svg";

const Container = styled.div`
  width: 80%;
  display: flex;
  padding: 10px;

  @media (max-width: 425px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 80%;
    padding: 0;
  }
`;

const Item = styled.div<{ $color: string }>`
  width: 100%;
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & p {
    background-color: ${props => props.$color};
    font-style: italic; 
    width: 100%;
    font-size: 7px;
    font-weight: 600;
    padding: 1px;
    text-align: center;
    height: 13px;
    line-height: 13px;
    margin: 0;
    margin-bottom: 3px;
    white-space: nowrap;
  }
`;

const EffectImg = styled.img`
  width: 30px;
  height: auto;

  @media (max-width: 325px) {
    width: 20px;
  }
`;

const SelectedArrowImg = styled.img`
  width: 10px;
  height: auto;
`;

export default function EffectCollection({ index }: { index: number}) {
  return (
    <Container>
      <Item $color="rgb(255, 130, 40)">
        <EffectImg src={Effect2Image} alt='' /> 
        <p>{index === 2 ? "Starter": " "}</p>
        {index === 2 && <SelectedArrowImg src={ArrowUpSvg} alt='' />}
      </Item>
      <Item $color="rgb(255, 206, 49)">
        <EffectImg src={Effect3Image} alt='' /> 
        <p>{index === 1 ? "For Beginners" : " "}</p>
        {index === 1 && <SelectedArrowImg src={ArrowUpSvg} alt='' />}
      </Item>
      <Item $color="rgb(158, 233, 54)">
        <EffectImg src={Effect1Image} alt='' /> 
        <p>{index === 0 ? "Max efficiency": " "}</p>
        {index === 0 && <SelectedArrowImg src={ArrowUpSvg} alt='' />}
      </Item>
    </Container>
  )
}
