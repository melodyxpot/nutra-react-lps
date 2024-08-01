
import {socialIcons,websiteSecure,caIcon } from "../../constants/images";
import styled from "styled-components";
import GlobalLoader from "./Loader";
import { useEffect, useState } from "react";
import { Notification } from "../generic/Notification";
import { TextLink } from "../generic/TextLink";
import Popup from "../generic/Popup";

export const Footer = () =>{
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupPath, setPopupPath] = useState<string>();
  
  
  const openPopup = (path:string) => {
    setPopupPath(path)
    setIsPopupOpen(true);
  }
  const closePopup = () => setIsPopupOpen(false);



  return (
    <>
    <StyledHR/>
    <Popup
        isOpen={isPopupOpen}
        contentUrl={popupPath || ""}
        onClose={closePopup}
        />
      <Container>
        <GlobalLoader/>
        
        <SubContainer>
        
          <WebSecImg src={websiteSecure}/>
          <ImagesContainer>
            <Img src={socialIcons} width={"171px"}/>
            <Img src={caIcon} width={"168px"}/>
          </ImagesContainer>
          <P>BioKetix Keto Gummies is committed to maintaining the highest quality products and the utmost integrity in business practices. All products sold on this website are certified by Good Manufacturing Practices (GMP), which is the highest standard of testing in the supplement industry.</P>
            <P>Notice: The products and information found on this site are not intended to replace professional medical advice or treatment. These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.</P>
            <P>© 2024 BioKetix Brands. All Rights Reserved.</P>

            <P><TextLink hasLine={true} fontSize="12px" route={"#"} onClick={()=>openPopup("/us/privacy.html")}>privacy policy</TextLink> | <TextLink onClick={()=>openPopup("/us/terms.html")} route={"#"} hasLine={true} fontSize="12px">terms of conditions</TextLink></P>
            <P>Privacy Policy | Terms and Conditions</P>
  
    
        </SubContainer>
     
  
  
      
      </Container>
    </>
  
  );
} 



const P = styled.p`
   font-size: .75rem;
    text-align: center;
    line-height: 1.4;
    margin: 0;
    /* margin-bottom: 1.25rem; */


`

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  background: #fff;
  margin-top: 20px;
  `


const SubContainer =styled.div`

 display: flex;
 flex-direction: column;
 position: relative;
 align-items: center;
 gap: 20px;
 justify-content: center;
max-width: 1140px;
width: 100%;
/* margin-top: 25px; */
margin-bottom: 40px;
/* z-index: 1; */
`

const WebSecImg = styled.img`
width: 257px;
height: auto;
vertical-align: middle;
padding: 0;
`


const Img = styled.img`
  height: auto;
  `
const ImagesContainer = styled.div`
  display: flex;
  /* position: relative; */
  gap:20px;
  `


const StyledHR = styled.hr`
  width: 100%;
  height: 4px;
  background-color: #cccccc;
  border: none;
  margin:0;
  z-index: 5;
  max-width: 1120;
`;

