import styled from "styled-components";
import { Section,Container, SegoeTitle, Color, Row, Col, StyledHR, SegoeP, OswaldTitle, Img, WrappedRow } from "../../style";
import { bottleImage, Images } from "../../constants/images";
import { Footer } from "../layout/Footer";
import { useDeviceType } from "../../context/DeviceContext";
import { useEffect } from "react";




export const ThankU = () => {
  const {isMobile} = useDeviceType()


useEffect(() => {
  const sale = localStorage.getItem('sale');
  if (!sale) {
    localStorage.setItem('sale', JSON.stringify(true));
    window.dataLayer.push({
      event: "sale"
  });
  } 
}, []);
 
  return (
  <>
  
  <Section  $backgroundColor1="#fff"  >
        <Container>
          <Col justify="flex-start" align="center">
          <SegoeTitle
            $isMobile={isMobile}
            $fontSize={28}
            weight={500}
            $lineHeight={55}
          >
            <Color color="#007bff">Customer Serivce Support:</Color> {process.env.REACT_APP_API_PHONE}
          </SegoeTitle>
          
          
          <StyledHR/>
          </Col>
          <GreenArea>
            <SegoeP><b>Thank You!</b> Your order will be shipped within 2 business day! You can expect it to arrive in 5-7 days after shipment.</SegoeP>
          </GreenArea>
          <WrappedRow>
            <Col $maxWidth={isMobile?"100%":"35%"}>
              <Img src={Images.Right} width={isMobile?"40px":"80px"}/>
              <Img src={bottleImage} width={isMobile?"100px":"255px"}/>
            </Col>
            <Col $maxWidth={isMobile?"100%":"50%"}>
            <OswaldTitle
            $isMobile={isMobile}
            $fontSize={40}
            weight={500}
            $lineHeight={48}
          >Your Order is Confirmed</OswaldTitle>
          <SegoeP>We are happy you have chosen to achieve your weight loss goals with one of the most effective and the hottest products on the market.</SegoeP>
          <SegoeP margin="10px 0px 30px 0px">Your order is currently being processed and will be shipped within 2 business days. Once your product ships, you'll receive a shipping confirmation email with a tracking number. If for some reason you don't receive that email,
             contact our customer service team immediately so we may investigate the issue: {process.env.REACT_APP_API_PHONE}</SegoeP>

             <OswaldTitle
             
            $isMobile={isMobile}
            $fontSize={32}
            weight={500}
            $lineHeight={38}
          >We are 100% committed to your product satisfaction and wight loss goals</OswaldTitle>

            <SegoeP>Call us if you have any problems with your purchase</SegoeP>
            <SegoeP>Customer Service Number: {process.env.REACT_APP_API_PHONE}</SegoeP>
            </Col>
          </WrappedRow>
       
        </Container>

        
  
  
  
      </Section>
      <Footer/>
  </>
  
    
  );
};


const GreenArea = styled.div`
display: flex;
background: #0080003d;
border-radius: 5px;
margin: 15px 0px;
padding: 15px;
`