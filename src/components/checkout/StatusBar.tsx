import ReviewImage from "../../assets/images/review.svg";
import CarImage from "../../assets/images/car.svg";

import { Box } from "../../style"
import styled from "styled-components";

const FreeShipping = styled.div`
  align-items: center;
  background: #fff200;
  display: flex;
  font-style: italic;
  height: 26px;
  justify-content: center;
  margin-left: 20px;
  text-align: center;
  gap: 5px; 
  width: 168px;
`;

const ShippingText = styled.span`
  font-weight: 700;
  font-size: 20px;
  padding: 3px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StatusBar = () => {
  return (
    <Box $noBorder style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      <img src={ReviewImage} alt="review" />
      <FreeShipping> 
        <img src={CarImage} alt="" /> 
        <ShippingText>FREE SHIPPING</ShippingText> 
      </FreeShipping>
    </Box>
  )
}