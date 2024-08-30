
import { Box, Row,SegoeP, Img, Col, WrappedRow } from "../../style"
import styled from "styled-components"
import { Offer } from "./Offer";
import { guarantee, SecureIcons } from "../../constants/images";
import { useCampaign } from "../../context/CampaignContext";
import { useDeviceType } from "../../context/DeviceContext";


interface OffersProps{
  currentIndex:number
  onSelect:(index:number)=>void
}

export const Offers = ({currentIndex,onSelect}:OffersProps)=>{

  const {campaign} = useCampaign()
  const {isMobile} = useDeviceType()
  
    return (
      <>
        <Box $background="#fff" $noBorder style={{ padding: "0" }}>
          {
            campaign?.products.map(
              (product,index)=>(
                <Offer
                  key={index}
                  campaignProduct={product}
                  currency={campaign?.currencySymbol || "E"}
                  onSelect={onSelect}
                  index={index}
                  currentIndex={currentIndex}
                />
              )
            )
          }
      
          <Row>
            <SecImg
              src={SecureIcons}
              width={isMobile ? "400px" : "600px"}
            />
          </Row>
          <Row>
          <OfferBox $background="#fff">
          <Col justify="flex-start">
            <Head>
              <Col align="center"><SegoeP $lineHeight="16px" color="#fff" $fontSize={isMobile?"17px":"27px"} margin="10px" weight={700}>30 DAY MONEY BACK GUARANTEE</SegoeP></Col>
            </Head>
            <WrappedRow $reverse={true} $gap="0">
              <Col $maxWidth={isMobile?"100%":"20%"}>
                <Img src={guarantee} width={isMobile?"139px":"139px"}/>
              </Col>
              <Col $maxWidth={isMobile?"100%":"70%"}>
                <SegoeP margin="10px" $lineHeight={"22px"} $fontSize="15px">We are so confident in our products and services, that we back it with a 30 day money back guarantee. If for any reason you are not fully satisfied with our products, simply return the purchased products in the original container within 30 days of when you received your order. We will refund you 100% of the purchase price - with absolutely no hassle.</SegoeP>
              </Col>
            </WrappedRow>
          </Col>

          </OfferBox>
          </Row>
          <Row>
          <SegoeP margin="20px" $lineHeight={"22px"} $fontSize="15px">HURRY! CONFIRM YOUR ORDER NOW!</SegoeP>
          </Row>
         
        </Box>
      
      </>
      
        
    )
}


const SecImg = styled.img<{margin?:string}>`
  height: auto;
  margin:${props => props.margin || '0px'};
  clip-path: polygon(10% 0, 90% 0, 90% 100%, 10% 100%);
`;

const OfferBox = styled.div<{ $noBorder?:boolean, $background?:string }>`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 20px;
`
const Head = styled.div<{ justify?:'center' | 'flex-start' | 'flex-end' |'space-between' }>`
  display: flex;
  width: 100%;
  justify-content:${props => props.justify || 'center'};
  border-radius: 20px 20px 0px 0px;
  background:#6b0d7d;
  padding-left:10px;
  box-sizing: border-box;
  /* flex-wrap: wrap; */
`;
