import { SegoeP,Col,Row, Img } from "../../style"
import styled from "styled-components"
import { Icons, SaveCircle, Vicon } from "../../constants/images";
import { Bottles } from "./Bottles";
import { useEffect, useState } from "react";
import { useDeviceType } from "../../context/DeviceContext";


interface OfferProps {
  campaignProduct:CampaignProduct;
  currency:string
  index:number;
  currentIndex:number
  onSelect:(index:number)=>void
}
export const Offer = ({campaignProduct,currency,index,currentIndex,onSelect}:OfferProps)=>{
  const {isMobile} = useDeviceType()
  const selectText = isMobile?"Yes - Choose this Package>>":"Yes - Choose this"

  const [isSelected,setIsselected] = useState(currentIndex===index)
  const clicked = ()=>{
    setIsselected(true)
    onSelect(index)
    // const paymentForm = document.getElementById('paymentForm');
    // if (paymentForm) {
    //   paymentForm.scrollIntoView({ behavior: 'smooth' });
    // }
  }

  useEffect(() => {
    setIsselected(currentIndex===index)

  }, [currentIndex]);
  const qty = campaignProduct.productQty
  let free = 0
  switch (qty){
    case 1:
      free=0
      break;
    case 2:
    case 3:
    case 4:
      free=1
      break;
    case 5:
      free=2
  }
  const paid = qty-free
  const bottlePrice = (campaignProduct.price/qty).toFixed(2)
  const retailPrice = (campaignProduct.price/paid).toFixed(2)
    
  return (
    <OfferBox $background="#fff" onClick={clicked} style={{ cursor: "pointer", padding: "10px" }}>
      <Row justify="flex-start">
        <Head>
          <Col $maxWidth={isMobile ? "40%" : "50%"} align="start" margin="8px 0px">
            <SegoeP $lineHeight="16px" color="#2956c2" $fontSize={isMobile?"12px":"27px"} weight={700}>BUY {paid} GET {free} FREE*</SegoeP></Col>
          <Col  $maxWidth="28%" align="start">
            <SegoeP $lineHeight="16px" color="#000000" margin="0px" $fontSize="12px" weight={700}>Retail:</SegoeP>
            <SegoeP $lineHeight="16px" color="#000000" margin="0px" $fontSize="12px" weight={700}>{currency}{retailPrice} / Bottle</SegoeP>
          </Col>
          <FlexContainer/>
          <Col $maxWidth="25%" background="#2956c2">
            <Row background="#2956c2" justify="flex-start" gap={"10px"}>
              <Col align="start" $maxWidth="20%"  >
                <Img src={Icons.box}  width={"20px"}/>
              </Col>
              <Col align="start"  >
                <SegoeP $lineHeight="16px" color="#fff" $fontSize="18px" weight={400} style={{ fontStyle: isSelected ? "italic" : "normal", fontWeight: "bold" }} >FREE {isMobile?"":"SHIPPING"}</SegoeP>
              </Col>
            </Row>
          </Col>
        </Head>
      </Row>
      {
        isMobile && 
        <Row justify="space-between"  padding="0px 5px" background="transparent">
          {/* <Col align="start" $maxWidth="22px" margin="5px">
            <BlueCircle $isMobile={isMobile}>
              {
                isSelected && 
                <ImgV src={Vicon} width={"22px"} height={"22px"}/>
              }
            </BlueCircle>
          </Col> */}
          <Col>
            <SegoeP $lineHeight="16px" margin="0" color="#2956c2" weight={700} $fontSize="12px">For Those Who Need to Lose {qty*5}+ Pounds!</SegoeP>
          </Col>
        </Row>
      }
      <Row justify="space-between" gap="10px"  padding="0px 5px" background="transparent" style={{ padding: "20px 0 20px 0" }}>
        
        <Col $maxWidth="70%" justify="center">
          <Row className="rowd" justify="flex-start" gap="15px">
            {
              !isMobile &&
              <Col justify="center" $maxWidth="20%">
            <BlueCircle onClick={clicked} $isMobile={isMobile}>
              {
                isSelected && 
                <ImgV src={Vicon} width={isMobile?"22px":"58px"} height={isMobile?"22px":"58px"}/>
              }
              
            </BlueCircle>
            </Col>
            }
            
    
            <Col justify="center" $maxWidth={isMobile ? "100%" : "60%"}>
              <Bottles qty={paid} free={free}/>
            </Col>        

            {!isMobile &&
              <Col justify="center" $maxWidth="20%">
                <Save size={isMobile?50:78}>
                  <SegoeP $lineHeight="16px" $fontSize={isMobile?"14px":"16px"} direction="center" weight={700}>{free?`GET ${free} FREE`:''}</SegoeP>
                </Save>
              </Col>
            }

          </Row>
        </Col>
        
        <RightCol $maxWidth="28%" justify="center" gap="10px" margin="10px 5px">
          {!isMobile &&
            <SegoeP $lineHeight="16px" margin="0" color="#2956c2" weight={700} $fontSize="16px">For Those Who Need to Lose {qty*5}+ Pounds!</SegoeP>
          }
          
          <SegoeP $lineHeight="16px" margin="0" $fontSize="14px">Same as</SegoeP>
          <SegoeP $lineHeight="16px" margin="0" $fontSize={isMobile? "18px":"40px"} style={{ fontWeight: "bold", color: isSelected? "#3dc051" : "#1c1c28" }}>{currency}{bottlePrice}<Small>/Bottle</Small></SegoeP>
            
        </RightCol>

      </Row>
      {
        isMobile && 
        <Row style={{marginBottom: "10px"}}>
          <SelectBtn $backgroundColor1="#fc6806" $fontSize={17} $fontWeight={400} width="80%" onClick={clicked}>{isSelected?"Selected!":selectText}</SelectBtn>
        </Row>
        }
    </OfferBox>
  )
}

const Small =styled.span`
font-size: 15px;
`
const Save = styled.div<{size:number}>`
display: flex;
justify-content: center;
position: relative;
align-items: center;
width: ${props=>props.size}px;
height: ${props=>props.size}px;
background-image: url(${SaveCircle});
background-repeat: no-repeat;
background-size: ${props=>props.size}px ${props=>props.size}px;
z-index: 5;

`

const SelectBtn = styled.a<{$backgroundColor1: string, $backgroundColor2?: string,color?:string,width?:string,$fontSize?:number,$fontWeight?:number}>`
  background: linear-gradient(to bottom, ${props=>props.$backgroundColor1}, ${props=>props.$backgroundColor2 || props.$backgroundColor1});
  width: ${props=>props.width || 'auto'};
  padding: 5px 15px;
  box-sizing: border-box;
  line-height: 25px;
  /* margin:10px; */
  text-align: center;
  text-decoration: none;
  color:${props=>props.color || '#fff'} ;
  display: block;
  font-family: Oswald, sans-serif;
  box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, .2);
  border-radius: 10px;
  font-size: ${props=>props.$fontSize || 20}px;
  font-weight: ${props=>props.$fontWeight || 700};
  float: right;
  cursor: pointer;
  &:hover {
    color: #253b88;
    text-decoration: underline

  }
`;

const BlueCircle = styled.div<{$isMobile:boolean}>`
display: flex;
position: relative;
cursor: pointer;
justify-content: center;
width: ${props=>props.$isMobile?"18px":"30px"};   /* Set the width of the circle */
height: ${props=>props.$isMobile?"18px":"30px"};
border-radius: 50%;  /* Make it a circle */
border: 4px solid #59aeee;
z-index: 5;
    /* margin-left: -10px; */
`;


const ImgV = styled.img<{margin?:string}>`
  display: block;
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: auto;
  margin:${props => props.margin || '0px'};
`;


const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 10%;
  width:60px;
  background: linear-gradient(to bottom right, #ffffff 50%, #2956c2 50%);
`;


export const OfferBox = styled.div<{$noBorder?:boolean, $background?:string}>`
display: flex;
flex-direction: column;
background: #fff;
width: 100%;
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 10px;
`


export const Cols = styled.div<{background?:string, gap?:string, align?: 'center' | 'start' | 'end' ,justify?:'center' | 'flex-start' | 'flex-end',margin?:string , $maxWidth?:string }>`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  height: 35px;
  background: 'transparent';
  margin:${props => props.margin || '0px'};
  justify-content:center;
  align-items: center;
  align-items: ${props => props.align || 'center'};
  gap:  ${props => props.gap || '0px'};
  background: ${props=>props.background|| 'transparent'};
  border-radius: 0px 5px 0px 0px;
  max-width: ${props => props.$maxWidth !== undefined ? props.$maxWidth: 'none' };;
  
`;

const Head = styled.div<{justify?:'center' | 'flex-start' | 'flex-end' |'space-between'}>`
  display: flex;
  width: 100%;
  justify-content:${props => props.justify || 'center'};
  border-radius: 10px 10px 0px 0px;
  background: #fff;
  padding-left:10px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  /* flex-wrap: wrap; */
`;

const RightCol = styled(Col)`
  position: relative;

  &::before {
    background: #ddd;
    content: "";
    display: block;
    height: 110px;
    left: -8px;
    position: absolute;
    top: 0;
    width: 2px;
  }

  @media (max-width: 768px) {
    &::before {
      left: -13px;
      height: 100%;
    }
  }
`