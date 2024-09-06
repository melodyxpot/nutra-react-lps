import { SegoeP,Col,Row } from "../../style"
import styled from "styled-components"
import { SaveCircle, Vicon } from "../../constants/images";
import { Bottles } from "./Bottles";
import { useEffect, useState } from "react";
import { useDeviceType } from "../../context/DeviceContext";
import LimitedOfferImage from "../../assets/images/limited-offer.svg";
import ReviewImage from "../../assets/images/review.svg";
import BestSellerImage from "../../assets/images/bestseller.svg";
import ProsLowImage from "../../assets/images/pros-low.svg";
import ProsMiddleImage from "../../assets/images/pros-middle.svg";
import ProsMaxImage from "../../assets/images/pros-max.svg";
import EffectCollection from "./EffectCollection";

interface OfferProps {
  campaignProduct:CampaignProduct;
  currency:string
  index:number;
  currentIndex:number
  onSelect:(index:number)=>void
}
export const Offer = ({campaignProduct,currency,index,currentIndex,onSelect}:OfferProps)=>{
  const {isMobile} = useDeviceType()
  const selectText = isMobile? "SELECT THIS PACKAGE! >>" : "Yes - Choose this";

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
  let free = 0;

  switch (qty){
    case 1:
      free=0
      break;
    case 2:
    case 3:
    case 4:
      free=1;
      break;
    case 5:
      free=2;
  }

  const paid = qty-free
  const bottlePrice = (campaignProduct.price/qty).toFixed(2)
  const retailPrice = (campaignProduct.price/paid).toFixed(2)

  const supply  = 45 - index * 15;
  const save = index === 0 ? 45 : index === 1 ? 30 : 0;
  let bottles = 3 - index;

  return (
    <OfferBox $background="#fff" onClick={clicked} style={{ cursor: "pointer", position: "relative" }}>
      {(qty === 5 && !isMobile) && <LimitedOfferImg src={LimitedOfferImage} alt="" width="76" height="76" />}
      <Row justify="space-between">
        <Head justify="space-between">
          <Col $maxWidth={isMobile ? "60%" : "75%"} align={isMobile ? "start" : "end"} margin={isMobile ? "0" : "5px"} justify={isMobile ? "flex-start" : "flex-end"}>
            <SegoeP 
              $lineHeight="16px" 
              color={isSelected ? "#1c1c28" : ""} 
              $fontSize={isMobile ? "18px": "18px" } 
              direction={isMobile ? "start" : "end"} 
              weight={900} 
              style={{ 
                width: "100%", 
                display: "flex", 
                flexDirection: isMobile ? "column" : "row",
                justifyContent: isMobile ? "flex-start" : "center"
              }}
            >
              <BlockTitleP $isSelected={isSelected}>SAVE A WHOLE {save}%</BlockTitleP> 
              <BlockTitleP>{" "}WITH {bottles} BOTTLES PACK</BlockTitleP>
            </SegoeP>
          </Col>
          <Col $maxWidth="25%" background={isSelected ? "#2956c2" : "#676873"} style={{ borderRadius: "0 8px 0 0", position: 'relative' }}>
          <FlexContainer $isSelected={isSelected} />
            <Row background={isSelected ? "#2956c2" : "#676873"} justify="flex-start" gap={"10px"}>
              <Col align="start"  >
                <BlockTitleP2 $lineHeight="16px" color="#fff" $fontSize="18px" weight={400} style={{ fontStyle: isSelected ? "italic" : "normal", fontWeight: "bold" }} >
                  {supply}-DAY SUPPLY
                </BlockTitleP2>
              </Col>
            </Row>
          </Col>
        </Head>
      </Row>
      <Row justify="space-between" gap="10px"  padding="0px 5px" background="white" style={{ padding: "20px 15px 20px 15px", zIndex: 2 }}>
        <Col $maxWidth={isMobile ? "60%" : "70%"} justify="center">
          <Row className="rowd" justify="flex-start" gap="15px">
            {
              !isMobile &&
              <Col justify="center" $maxWidth="50px">
                <BlueCircle onClick={clicked} $isMobile={isMobile}>
                  {
                    isSelected && 
                    <ImgV src={Vicon} width={isMobile?"22px":"58px"} height={isMobile?"22px":"58px"}/>
                  }
                  
                </BlueCircle>
              </Col>
            }
            
    
            <Col justify="center" $maxWidth={isMobile ? "100%" : "50%"}>
              <Bottles qty={paid} free={free}/>
            </Col>        

            {!isMobile &&
              <Col justify="center" $maxWidth="50%" gap="5px">
                {/* <SegoeP $lineHeight="16px" $fontSize={isMobile?"14px":"16px"} direction="center" weight={700}>{free?`GET ${free} FREE`:''}</SegoeP> */}
                <img src={index === 0 ? ProsMaxImage : index === 1 ? ProsMiddleImage : ProsLowImage} alt="" />
                <SegoeP $lineHeight="14px" $fontSize={isMobile? "16px" : "16px"} direction="center" weight={700}>
                  {index === 0 ? "Max Efficiency" : index === 1 ? "For Beginners" : "Starter"}
                </SegoeP>
                {(index === 0 && !isMobile) && <img src={BestSellerImage} alt="" style={{ width: "95%"}} />}
              </Col>
            }
          </Row>
          {
            isMobile && <EffectCollection index={index} />
          }
        </Col>
        
        <RightCol $maxWidth={isMobile ? "40%" : "30%"} justify="center" gap="10px" margin="10px 5px">
          <SegoeP 
            $fontSize={isMobile ? "17px" : "15px"} 
            weight={700} 
            color={"#ffffff"} 
            style={{
              textAlign: 'center', 
              backgroundColor: "#fd4f4f",
              padding: "3px 5px",
              borderRadius: "3px",
              margin: "0"
            }}
          >
            SAVE: ${save}
          </SegoeP>
          <SegoeP $lineHeight="16px" margin="0" $fontSize="17px" weight={700} color={"#1c1c28"} style={{textAlign: 'center', padding: "3px", paddingBottom: "5px"}}>Price per piece:</SegoeP>
          <CurrencyP $lineHeight="16px" margin="0" $fontSize={isMobile? "40px":"40px"} style={{ fontWeight: "bold", color: isSelected? "#3dc051" : "#1c1c28" }}>
            {currency}{bottlePrice}
            <Small></Small>
          </CurrencyP>
          {(index === 0 && isMobile) && <img src={BestSellerImage} alt="" style={{ width: "95%"}} />}
        </RightCol>

      </Row>
      {
        isMobile && 
        <Row style={{ flexDirection: "column", marginBottom: "10px", alignItems: "center" }}>
          <SelectBtn $backgroundColor1="#46bd58" $fontSize={20} $fontWeight={700} width="97%" onClick={clicked}>
            {isSelected ? "SELECTED!": selectText}
            <SegoeP $fontSize="13px" direction="center" style={{ color: "#fff", margin: "0"}}>60-Day Satisfaction Guarantee</SegoeP>
          </SelectBtn>
          {isMobile && <img src={ReviewImage} style={{width: "70%", marginTop: "10px"}} alt="" />}
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
  padding: 3px 15px;
  box-sizing: border-box;
  line-height: 25px;
  /* margin:10px; */
  text-align: center;
  text-decoration: none;
  color:${props=>props.color || '#fff'} ;
  display: block;
  font-family: Oswald, sans-serif;
  box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, .2);
  border-radius: 3px;
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


// const FlexContainer = styled(Col)<{ $isSelected?: boolean }>`
//   z-index: 2;
//   position: relative;
//   &:before {
//     content: "";
//     background-color: ${props => props.$isSelected ? "#2956c2" : "#676873"};
//     display: block;
//     height: 55px;
//     left: -26px;
//     position: absolute;
//     top: 2px;
//     transform: rotate(49deg);
//     width: 30px;
//     z-index: 1;
//   }
// `;

const FlexContainer = styled.div<{$isSelected?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  position: absolute;
  left: -50px;
  top: 0;
  background: ${props => props.$isSelected ? "linear-gradient(to bottom right, #ffffff 50%, #2956c2 50%)" : "linear-gradient(to bottom right, #ffffff 50%, #676873 50%)"};
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
`;

const LimitedOfferImg = styled.img`
  position: absolute;
  top: -35px;
  left: -35px;
  height: auto;
  z-index: 5;
`;

const BlockTitleP = styled.p<{ $isSelected?: boolean }>`
  color: ${props => props.$isSelected ? "#2956c2" : "#1c1c28"};
  font-weight: 700;
  margin: 0;

  @media (max-width: 320px) {
    font-size: 15px;
  }
`;

const BlockTitleP2 = styled(SegoeP)`
  @media (max-width: 320px) {
    font-size: 15px;
  }
`

const CurrencyP = styled(SegoeP)`
  @media (max-width: 320px) {
    font-size: 30px;
  }
`