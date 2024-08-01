
import {securityIcons, bottleImage, arrow1Icon, guaranteeIcon, ingredientsIcon, wallpapers, Images } from "../../constants/images";
import { useDeviceType } from "../../context/DeviceContext";
import { DiagonalLine } from "../generic/DiagonalLine";
import { Section,Col,Container,Img,WrappedRow, OswaldTitle,Btn,StyledHR ,Row, AbsoluteImg} from "../../style";

import styled from "styled-components";

interface LastSectionProps{
  onClick:()=>void
}
export const LastSaction = ({onClick}:LastSectionProps) => {
  const {isMobile} = useDeviceType()
  return (
    <>
      <StyledHR/>
      <Section $backgroundColor1="#fff">
      
        <Container>

         
        <WrappedRow>
        
        
          <Col $maxWidth={isMobile?"48%":"30%"}>
            <Col>
              <OswaldTitle $isMobile={isMobile} $fontSize={54} color={"#a3cc2c"} weight={600} $lineHeight={60} $align="start">A POWERFUL HEALTHY FAT BURNER</OswaldTitle>
              <OswaldTitle $isMobile={isMobile} $fontSize={40} weight={400} $lineHeight={47} $align="start">TRANSFORM YOUR BODY IN JUST 30 DAYS</OswaldTitle>
              <Row>
                <Img src={guaranteeIcon} width={"33%"}/>
                <Img src={ingredientsIcon} width={"33%"}/>
                <Img src={arrow1Icon} width={"33%"}/>
              </Row>
            </Col>
          </Col>
  
  
          <Col $maxWidth={isMobile?"45%":"30%"}>
            <Col>
              <AbsoluteImg src={Images.bhb} width="30%" top={-20} left={15}/>
              <Img src={bottleImage} width={"50%"}/>
              <Btn onClick={onClick} $fontSize={isMobile?14:24} $backgroundColor1="#fdd508" $backgroundColor2="#fcaa07" color="#000" width="80%">RUSH MY ORDER</Btn>
              <Img src={securityIcons} />
              
            </Col>
          </Col>
          
          
          
          {!isMobile &&

            <Col $maxWidth="30%">
              <Img src={wallpapers} width={"445px"}/>
            </Col>
          }
          
        
        
        </WrappedRow>
        
        <DiagonalLine opposite={true}/>
       
        </Container>
     
  
  
  
      </Section>
      
    </>
  
  );
  
}







