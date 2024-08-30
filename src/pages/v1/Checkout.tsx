import {useRef, useState} from "react";
import styled from "styled-components";
import { Col, Img, SegoeP, Container, Box, WrappedRow } from "../../style";
import { slimmyGummyLogo ,caIcon} from "../../constants/images";
import { Footer } from "../../components/layout/Footer";
import { useDeviceType } from "../../context/DeviceContext";
import { Notification } from "../../components/generic/Notification";

import { NavBox,PaymentForm,Offers,HeaderComponent } from "../../components/checkout";
import { StatusBar } from "../../components/checkout/StatusBar";

export const CheckoutPage = () => {
  const [selected,setSelected] = useState<number>(0)
  const paymentSection = useRef<HTMLDivElement | null>(null)
  const onSelect = (index:number)=>{
    paymentSection.current?.scrollIntoView({ behavior: 'smooth' });
    setSelected(index)
  }

  const {isMobile} = useDeviceType()
  return (<>
    <HeaderComponent/>
    <Section $backgroundColor1="#fff" $backgroundColor2="#fff">
      <Container $maxWidth="950px" padding="0" $gap="15px">
        <Col $maxWidth={isMobile?"100%":"65%"}>
          <Box $noBorder={true}>
            <WrappedRow justify="space-between" className="wr" $gap="0">
              <Col $maxWidth={isMobile?"100%":"30%"}>
              <Img src={slimmyGummyLogo} width={"150px"}/>
              </Col>
              <Col $maxWidth={isMobile?"35%":"30%"}>
                <Img src={caIcon} width={"150px"}/>
              </Col>
              <Col $maxWidth={isMobile?"50%":"30%"}>
                <SegoeP $lineHeight="16px" margin="0" $fontSize="14px" weight={500}>Internet Exclusive Offers Available to {process.env.REACT_APP_MARKET} Residents Only</SegoeP>
              </Col>
              </WrappedRow>
          </Box>
        </Col>
        <Col $maxWidth="30%">
        </Col>
      </Container>

      <Container $alignItems="start" $maxWidth="1024px" padding="0" $gap="15px">
        <Col $maxWidth={isMobile?"100%":"68%"} gap="10px" margin="0px 0px 20px 0px">
          <NavBox/>
          {!isMobile && <StatusBar />}
          <Offers currentIndex={selected} onSelect={onSelect}/>
        </Col>
        <Col $maxWidth={isMobile?"100%":"30%"}>
          <PaymentForm currentIndex={selected} ref={paymentSection}/>
        </Col>
      </Container>
      <Footer/>
    </Section>

    <Notification/>
  </>);
};


const Section = styled.div<{ $backgroundColor1: string, $backgroundColor2?: string, $zIndex?: number, padding?: string }>`
  background:${props => props.$backgroundColor2?"linear-gradient(to bottom, "+props.$backgroundColor1+", "+props.$backgroundColor2+")":props.$backgroundColor1};
  padding:${props => props.padding || '10px 0px'};
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  z-index: ${props => props.$zIndex !== undefined ? props.$zIndex : 0};

`;




