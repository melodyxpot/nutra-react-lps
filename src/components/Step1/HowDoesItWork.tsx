import React, { ReactNode } from 'react'
import { Color, Container, OswaldTitle, Row } from '../../style'
import { useDeviceType } from '../../context/DeviceContext';
import styled from 'styled-components';
import "./style.css";
import VsImg from '../../assets/images/vs.svg';
import CardArrowImg from '../../assets/images/card.png';
import YesImg from '../../assets/images/yes.png';
import NoImg from '../../assets/images/no.png';
import SectionCollapseImg from '../../assets/images/section-collapse.png';
import BackgroundBG from '../../assets/images/howwork.jpg';
import CardLeftMobileImg from "../../assets/images/card-left-mobile.png";
import CardRightMobileImg from "../../assets/images/card-right-mobile.png";

const HowSection = styled.section`
  background: url(${BackgroundBG}) no-repeat center center !important;
  background-size: 100% !important;
  margin-bottom: -20px;
  position: relative;
  z-index: 2;
  font-weight: 400;
  font-family: Helvetica,sans-serif;

  &::before {
    background: url(${SectionCollapseImg}) no-repeat top;
    background-size: 110% 244px;
    bottom: -212px;
    content: "";
    height: 243px;
    left: 0;
    position: absolute;
    width: 100%;
  }
  
  @media only screen and (max-width: 850px) {
    background: #fff !important;
  }
`

const StyledH3 = styled.h3`
  color: #171717;
  font-family: Oswald, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  width: 100%;
  text-align: center;
  margin: 0;

  @media only screen and (max-width: 420px) {
    margin-bottom: 15px;
    font-size: 18px;
    letter-spacing: 0.5px;
  }
`;

const VsCard = styled.div`
  width: calc(50% - 95px);
  float: left;
  margin-bottom: -70px;
  z-index: 10;
  height: auto;
  @media only screen and (max-width: 850px) {
    width: 100% !important;
  }
`;

const VsCardConent = styled.div<{$position: 'left' | 'right' }>`
  background: ${props => props.$position === 'left' ? `#fff url(${NoImg}) no-repeat bottom;` : `#fff url(${YesImg}) no-repeat bottom;`};
  background-size: 100%;
`

const StyledCardTitle = styled.div`
  background: #000;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  color: #fff;
  display: block;
  font-family: Oswald, sans-serif;
  font-size: 23px;
  font-weight: 700;
  margin: 0 auto;
  max-width: 80%;
  padding: 16px 0;
  text-align: center;
  text-transform: uppercase;
`;

const StyledCardText = styled.p`
  margin-top: 30px;
  font-size: 15px;
  margin-top: 30px;
  min-height: 140px;
  line-height: 19px;

  @media only screen and (max-width: 850px) {
    min-height: 0;
  }
`;

const StyledVsCard = styled.div<{$position: 'left' | 'right' }>`
  box-shadow: 0 0 14px 1px #00000030;
  min-height: 470px;
  border-radius: 15px;
  padding: 0 36px 20px;
  flex-direction: row;
  margin-right: ${props => props.$position === 'left' ? '15px' : '0'};
  margin-left: ${props => props.$position === 'right' ? '15px' : '0'};
  z-index: 50;
  background: #fff;
  
  @media only screen and (max-width: 850px) {
    min-height: 0;
    margin: 0 20px;
    margin-bottom: ${props => props.$position === 'left' ? "70px" : "0"};
  }
`;

const VsCardHead = styled.div<{$position: 'left' | 'right' }>`
  background: url(${CardArrowImg}) no-repeat 50%;
  background-size: contain;
  height: 242px;
  margin: 0 auto -39px;
  position: relative;
  text-align: center;
  width: 235px;
  background-size: contain;
  height: 242px;
  margin: 0 auto -39px;
  text-align: center;
  width: 235px;
  z-index: 3;
  font-family: Oswald, sans-serif;

  & span, h2 {
    font-weight: 700;
    text-transform: uppercase;
  }

  & span {
    color: #fff;
    display: block;
    font-size: 26px;
    padding: 0;
    margin: 0;
    line-height: 1.15;
  }

  & span:first-child {
    display: inline-block;
    margin-top: 67px;
  }

  @media only screen and (max-width: 850px) {
    /* For everything bigger than 768px */
    background: url(${props => props.$position === 'left' ? CardLeftMobileImg : CardRightMobileImg }) no-repeat;
    background-size: 100% 100%;
    max-width: 300px;
    width: 50%;
    height: 163px;
    margin: 0 auto -12px;
    position: relative;
    text-align: ${props => props.$position === 'left' ? 'right': 'left'};
  
    & span:first-child {
      margin-top: 14px;
    }
    & span {
      margin-left: ${props => props.$position === 'left' ? '0' : '10px'};
      margin-right: ${props => props.$position === 'right' ? '0' : '10px'};
    }
  }

  @media only screen and (max-width: 420px) {
    width: 80%;
  }
`;

const VsImage = styled.div`
  float: left;
  margin-top: 38%;
  text-align: center;
  width: 159px;
  
  @media only screen and (max-width: 850px) {
    float: none;
    margin: -13px auto -18px;
    position: relative;
    text-align: center;
    z-index: 20;
    & img {
      max-width: 100px;
    }
  }
`;

const List = styled.div`
  & p {
    margin-bottom: 20px;
    font-size: 15px;
    line-height: 19px;
  }
`;

const CardTag = styled.div`  
  background: #23ad27;
  border-radius: 30px;
  color: #fff;
  display: block;
  font-size: 23px;
  font-weight: 700;
  line-height: 50px;
  margin: 0 auto;
  max-width: 275px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-family: Oswald, sans-serif;

  &::before, &::after {
    background: #eee;
    content: "";
    display: block;
    height: 2px;
    left: -52px;
    position: absolute;
    top: 25px;
    width: 40px;
  }

  &::after {
    left: auto;
    right: -52px;
  }

  @media only screen and (max-width: 420px) {
    font-size: 18px;
    max-width: 212px;

    &::before, &::after {
      width: 25px;
      left: -32px;
    }

    &::after {
      right: -32px;
      left: auto;
  }
  }
`;

const CardContainer = styled(Row)`
  width: 100%;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const SectionHeader = styled(OswaldTitle)`
  @media only screen and (max-width: 420px) {
    font-size: 48px;
    font-weight: bold;
    line-height: 1.15;
  }
`

const MethodCard = ({ position, children }: { children: ReactNode; position: 'left' | 'right'}) => {
  return <VsCard>
    <VsCardHead className={`how-title-block`} $position={position} >
      <span>BODY BURNS</span>
      <span style={{ color: '#ffd600', fontSize: '50px', lineHeight: '1.15'}}>{ position === 'left' ? 'CARBS' : 'FATS' }</span>
      <span>FOR ENERGY</span>
    </VsCardHead>
    <StyledVsCard $position={position}>
      <StyledCardTitle>{position === 'left' ? 'WHY YOUR DIETS FAIL...' : 'WHY KETO WORKS!'}</StyledCardTitle>
      
      <VsCardConent $position={position}>
        <StyledCardText>{position === 'left' ? 'Currently with the massive load of carbohydrates in our foods, our bodies are conditioned to burn carbs for energy instead of fat. Because it is an easier energy source for the body to use up.' : 'Ketosis is the state where your body is actually burning fat for energy instead of carbs. Ketosis is extremely hard to obtain on your own and takes weeks to accomplish. Proper Keto Capsules actually help your body achieve Ketosis fast and help you burn fat for energy instead of carbs!'}</StyledCardText>
      
        <CardTag>
          {position === 'left' ? 'THE PROBLEM:' : 'THE SOLUTION:'}
        </CardTag>

        <div>{children}</div>
      </VsCardConent>
    </StyledVsCard>
  </VsCard>
}

export default function HowDoesItWork() {
  const {isMobile} = useDeviceType()

  return (
    <HowSection>
      <Container style={{ flexDirection: 'column', maxWidth: '1000px' }}>
        <SectionHeader $isMobile={isMobile} style={{ marginBottom: "30px"}} $fontSize={55} $lineHeight={82} weight={500}>
          <Color color='#253b88'>HOW DOES IT WORK?</Color>
        </SectionHeader>
        <StyledH3>KETOSIS FORCES YOUR BODY TO BURN FAT FOR ENERGY INSTEAD OF CARBS.</StyledH3>
        <CardContainer>
          <MethodCard position='left'>
            <List>
              <p style={{ fontFamily: 'Helvetica, sans-serif' }}>1. Fat stores on the body as carbs are burned as an easy energy fuel. Essentially we gain more weight year after year.</p>
              <p style={{ fontFamily: 'Helvetica, sans-serif' }}>2. Carbs are not the body's ideal source of energy therefore we are usually left feeling tired, stressed and drained at the end of each day.</p>
            </List>
          </MethodCard>
          <VsImage>
            <img src={VsImg} alt='vs' />
          </VsImage>
          <MethodCard position='right'>
            <List>
              <p style={{ fontFamily: 'Helvetica, sans-serif' }}>1. When your body is in Ketosis, you are actually burning stored fat for energy and not carbs!</p>
              <p style={{ fontFamily: 'Helvetica, sans-serif' }}>2. Fat is the body's ideal source of energy and when you are in Ketosis you experience energy and mental clarity like never before and of course very rapid weight loss.</p>
            </List>
          </MethodCard>
        </CardContainer>
      </Container>
    </HowSection>
  )
}
