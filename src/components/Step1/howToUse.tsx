
import { step1Image,step2Image,step3Image, arrowImage, logoJu, securityIcons, bottleImage, arrow1Icon, guaranteeIcon, ingredientsIcon, usa,ketoMagazines } from "../../constants/images";
import { useDeviceType } from "../../context/DeviceContext";
import { Section,Container,WrappedRow,Col,OswaldTitle,Color } from "../../style";
import styled from "styled-components";
export const HowToUse = () => {
  const {isMobile} = useDeviceType() 
  return (
    <>
      <Section $backgroundColor1="#fff">
        <Container>
        <ContentContainer>
        <OswaldTitle $isMobile={isMobile} $fontSize={55} $lineHeight={82} weight={500}><Color color="#253b88">HOW TO USE</Color> - BioKetix Keto Gummies <br/>
        TO GET RESULTS</OswaldTitle>
        
        <WrappedRow className="tssss">
        {/* <Col $maxWidth={isMobile?"100%":"33%"}> */}
          <Col $maxWidth={isMobile?"100%":"30%"}>
            <StampsImg src={step1Image}/>
            <StepTextContainer>
              <StepTitle>Step 1</StepTitle>
              <StepSubTitle>INSTANT FAT BURN</StepSubTitle>
              <P>BioKetix Keto Gummies works to release stored fat, by helping your body burn fat for energy instead of carbs. Advanced Ketones are behind this miracle product that helps you lose up to 5 lbs in the first week.</P>
              
            </StepTextContainer>
          </Col>
          <Col $maxWidth={isMobile?"100%":"30%"}>
            <StampsImg src={step2Image}/>
            <StepTextContainer>
              <StepTitle>Step 2</StepTitle>
              <StepSubTitle>ACCELERATED FAT BURN</StepSubTitle>
              <P>During the first month of use, BioKetix Keto Gummies with BHB produces accelerated Fat Burn, which results in expected weight loss of up to 20 lbs. You will notice a drastic change in a very short period of time!</P>
              
            </StepTextContainer>
          </Col>
          <Col $maxWidth={isMobile?"100%":"30%"}>
            <StampsImg src={step3Image}/>
            <StepTextContainer>
              <StepTitle>Step 3</StepTitle>
              <StepSubTitle>TRANSFORM YOUR BODY</StepSubTitle>
              <P>With your weight loss goals achieved, continue to take BioKetix Keto Gummies for 3-5 months as to stabilize your appetite, as well as to maintain and transform your new, slim body.</P>
              
            </StepTextContainer>
          </Col>
        {/* </Col> */}
  
        </WrappedRow>
        
       
        </ContentContainer>
        
        <DiagonalLineContainer>
        <DiagonalLineSVG preserveAspectRatio="none" version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <Polygon points="200,500 0,500 300,0 500,0" />
        </DiagonalLineSVG>
        </DiagonalLineContainer>
  
        </Container>
     
  
  
  
      </Section>
    </>
  
  )

};

const P = styled.p`
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 1.25rem;
    margin-top: 10px;

`


const StepTextContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`



const ContentContainer =styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 justify-content: center;

 z-index: 1;
`

const DiagonalLineContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;
const DiagonalLineSVG = styled.svg`
  width: 100%;
  height: 100%;
  preserveAspectRatio: none;
`;

const Polygon = styled.polygon`
  fill: #f3f3f3;
`;


const StepTitle = styled.h1`
 font-weight: 700;
    font-size: 23px;
    display: block;
    font-family: Oswald, sans-serif;
    margin: 0;
  `

const StepSubTitle = styled.h3`
    display: block;
    font-size: 23px;
    color: #a2d408;
    font-weight: 700;
    font-family: Oswald, sans-serif;
    margin: 0;

`

const Title = styled.h2`
  font-family: Oswald, sans-serif;
    font-weight: 500;
    color: #000000;
    font-size: 3.3125rem;
    margin-bottom: 0;
    margin-top: 61px;
    line-height: 1.2;
    text-align: center;
  `
  


const StampsImg = styled.img`
height: auto;
width: 244px;
margin-top: -20px;

margin-left: -10px;
display: block;
`