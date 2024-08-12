import styled from "styled-components";
import { HeaderComponent, NavBox } from "../../components/checkout";
import { Footer } from "../../components/layout/Footer";
import { OrderForm, Stories } from "../../components/Step1";
import { Box, Col, Container, Img, SegoeP, WrappedRow } from "../../style";
import { slimmyGummyLogo ,caIcon} from "../../constants/images";
import { useDeviceType } from "../../context/DeviceContext";

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

export default function Qualify () {
  const {isMobile} = useDeviceType()

  return <>
    <HeaderComponent/>
    <Section $backgroundColor1="#f7ffd3" $backgroundColor2="#fff">
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
      <Container $maxWidth="950px" padding="0" $gap="15px">
        <NavBox active={1} />
        <OrderForm />
      </Container>
      <Stories/>
      <Footer/>
    </Section>
  </>
}