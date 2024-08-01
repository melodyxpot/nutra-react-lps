import React, { forwardRef, useEffect, useState } from "react";
import { Box, Row,SegoeP, SegoeTitle, Img, Col, Btn } from "../../style"
import { VisaMaster } from "../../constants/images";
import { Field, FieldType, TextFieldType } from "../fields";
import Joi from "joi";
import { TextLink } from "../generic/TextLink";
import { useCampaign } from "../../context/CampaignContext";
import { useFormHandling } from "../../hooks/FormHandle";
import { RequestConfigs } from "../../api";
import { useLocation, useNavigate } from "react-router-dom";
import { V1Routes } from "../../pages/v1/v1routes";
import Popup from "../generic/Popup";
import { MessageBox } from "../generic/MessageBox";
import { useTagHandler } from "../../hooks/TagManagerHandle";



const cardNumberField:FieldConfig =  {
  type:FieldType.text,
  name:"cardNumber",
  label:"Card Number",
  joiSchema:Joi.string().creditCard().required().allow("7997285399919009").allow("7012000033330026").allow("7485666666666668").allow("7997285399919009").allow("7444333322221111").allow("7005519200000004").allow("7166676667666746"),
  typeOptions:{type:TextFieldType.creditCard}
}


const expirationField:FieldConfig =   {
  type:FieldType.text,
  name:"expiration",
  label:"expiration(MM/YY)",
  joiSchema:Joi.string().pattern(/^(0[1-9]|1[0-2])\/([0-9]{2})$/).required(),
  typeOptions:{type:TextFieldType.expiration}
}
const cvv:FieldConfig = {
  type:FieldType.text,
  name:"cardSecurityCode",
  label:"CVV",
  joiSchema:Joi.string().pattern(/^[0-9]+$/).length(3).required(),
  typeOptions:{type:TextFieldType.number,maxLength:3}
}



interface PaymentFormProps{
  currentIndex:number;
  // ref:React.MutableRefObject<HTMLDivElement | null>
}

export const PaymentForm = forwardRef<HTMLDivElement, PaymentFormProps>(({ currentIndex }, ref) => {
    const {campaign} = useCampaign()
    const [cartItem,setCartItem] = useState<CartItem>()
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [combinedServerRes, setCombinedServerRes] = useState<ApiResponse | null>(null);
    const [popupPath, setPopupPath] = useState<string>();
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const success = queryParams.get('success');
    const errorMsg = queryParams.get('errorMsg');
    
    

    const openPopup = (path:string) => {
      setPopupPath(path)
      setIsPopupOpen(true);
    }
    const closePopup = () => setIsPopupOpen(false);

    const tcField:FieldConfig = {
      type:FieldType.checkBox,
      name:"allowTerms",
      label:"terms",
      joiSchema:Joi.boolean().valid(true).required(), 
      typeOptions:{text:(<SegoeP $lineHeight="16px" $fontSize="12px">I agree to <TextLink hasLine={true} fontSize="12px" route={"#"} onClick={()=>openPopup("/us/privacy.html")}>privacy policy</TextLink> and <TextLink onClick={()=>openPopup("/us/terms.html")} route={"#"} hasLine={true} fontSize="12px">terms of conditions</TextLink></SegoeP>)}
    }


    const fieldsConfig = [cardNumberField,expirationField,cvv,tcField]
    const navigate = useNavigate()

    const {serverRes,handleInputChange,handleClick,submitted} = useFormHandling({
      requestType:RequestConfigs.createOrder,
      fieldsConfig,
      data:{
        products:[cartItem],
        returnUrl:window.location.origin + window.location.pathname
      }
    })


    useTagHandler(RequestConfigs.createOrder,serverRes)

    useEffect(() => {
      if(campaign?.products[currentIndex]){
        const cartItem:CartItem = {
          campaignProductId:campaign.products[currentIndex].campaignProductId,
          qty:1
        }
        setCartItem(cartItem)
      }
    }, [currentIndex]);


    useEffect(() => {
      if(combinedServerRes?.succeeded){
        if(combinedServerRes?.redirect){
          window.location.href=combinedServerRes?.redirect
        } else { 
          navigate(V1Routes.thankYou)
        }
        
      }
    }, [combinedServerRes]);

    useEffect(() => {

      const combined:ApiResponse | null = serverRes?serverRes:(success?{
        message:success==="true"?"OK":errorMsg || "failed",
        succeeded:success==="true",
      }:null)

      setCombinedServerRes(combined)
      
    }, [serverRes,queryParams]);




    return (
      <>
        <Popup
        isOpen={isPopupOpen}
        contentUrl={popupPath || ""}
        onClose={closePopup}
        />
        <Box $background="#323232" id="paymentForm" ref={ref}>
        <SegoeTitle $isMobile={false} $fontSize={22} color="#fff" $align="center" $lineHeight={28} weight={700}>FINAL STEP:</SegoeTitle>
        <SegoeTitle $isMobile={false} $fontSize={16} color="#fff" $align="center" $lineHeight={22} weight={400}>PAYMENT INFORMATION</SegoeTitle>
        </Box>
        <Box $background="#ebebeb" margin="0px 0px 20px 0px">
        <SegoeP $lineHeight="16px" direction="center"  $fontSize="14px">We accept:</SegoeP>
        <Col><Img src={VisaMaster} width={"100px"}/></Col>
        <Col>
        <MessageBox align="center" serverRes={combinedServerRes}/>
        <Field fieldConfig={cardNumberField} onChange={handleInputChange} serverRes={serverRes} submitted={submitted}/>
          <Row justify="space-between">
            <Col $maxWidth="60%">
              <Field fieldConfig={expirationField} onChange={handleInputChange} serverRes={serverRes} submitted={submitted}/>
            </Col>
            <Col $maxWidth="35%">
              <Field fieldConfig={cvv} onChange={handleInputChange} serverRes={serverRes} submitted={submitted}/>
            </Col>  
          </Row>
          <Field fieldConfig={tcField} onChange={handleInputChange} serverRes={serverRes} submitted={submitted}/>
          <SegoeP $lineHeight="16px" direction="center" $fontSize="11px">Secure 256-bit SSL Encryption</SegoeP>
          <Btn width="100%" $backgroundColor1="#a3cc2c" $backgroundColor2="#5fbb49" onClick={handleClick} href="#">RUSH MY ORDER!</Btn>
          
        </Col>
        </Box>
      </>
      
    )
})

