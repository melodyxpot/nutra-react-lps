import { Container,Col,WrappedRow,AbsoluteImg,SegoeP,Color,Row,Img,BulletsArea,Bullet,RobertoTitle,OswaldTitle,SegoeTitle, Btn } from "../../style";
import { model,arrowImage,logoJu,securityIcons,bottleImage,arrow1Icon,guaranteeIcon,ingredientsIcon,usa } from "../../constants/images";
import styled from "styled-components";
import { useDeviceType } from "../../context/DeviceContext";
import {FieldType, TextFieldType } from "../fields";
import Joi from "joi";
import { FormComponent } from "../generic/Form";
import { useFormHandling } from "../../hooks/FormHandle";
import { RequestConfigs } from "../../api";
import { Routes } from "../../constants/routes";
import { useCampaign } from "../../context/CampaignContext";
import { useOrder } from "../../context/OrderContext";
import { forwardRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { V1Routes } from "../../pages/v1/v1routes";
import { OrderForm } from "./OrderForm";


const fieldsConfig = [

  {
    type:FieldType.text,
    name:"firstName",
    label:"First Name",
    joiSchema:Joi.string().max(50).required(),
    typeOptions:{
      type:TextFieldType.text
    }

  },

  {
    type:FieldType.text,
    name:"lastName",
    label:"Last Name",
    joiSchema:Joi.string().max(50).required(),
    typeOptions:{
      type:TextFieldType.text
    }
  
  },
  {
    type:FieldType.text,
    name:"address1",
    label:"Address",
    joiSchema:Joi.string().max(50).required(),
    typeOptions:{
      type:TextFieldType.text
    }
  
  },
  {
    type:FieldType.text,
    name:"postalCode",
    label:"Zip code",
    joiSchema:Joi.string().max(20).required(),
    typeOptions:{
      type:TextFieldType.text
    }
  
  },
  {
    type:FieldType.text,
    name:"city",
    label:"City",
    joiSchema:Joi.string().max(30).required(),
    typeOptions:{
      type:TextFieldType.text
    }
  },
  {
    type:FieldType.text,
    name:"emailAddress",
    label:"Email",
    joiSchema:Joi.string().email({ tlds: { allow: false } }).required(),
    typeOptions:{
      type:TextFieldType.text
    }
  
  },
  {
    type:FieldType.phone,
    name:"phoneNumber",
    label:"Phone",
    joiSchema:Joi.string().pattern(/^[0-9-]+$/).required(),
    typeOptions:{
      countryFieldName:"country"
    }
  }

]





export const Main = forwardRef<HTMLDivElement>((props,ref) => {
  const {isMobile} = useDeviceType() 
  const {setCampaign} = useCampaign()
  const {setOrder} = useOrder()
  const navigate = useNavigate()

  const {handleInputChange,handleClick,serverRes,formValues,submitted} = useFormHandling(
    {
      requestType:RequestConfigs.createLead,
      fieldsConfig:fieldsConfig,
      data:{campaignId:process.env.REACT_APP_CAMPAIGN_ID},
      // navOnSuccess:Routes.payment
    }
  )

  useEffect(() => {
    if(serverRes?.campaign && serverRes.order){
      setCampaign(serverRes.campaign)
      setOrder(serverRes.order)
      navigate(V1Routes.checkout)
    }

    
  }, [serverRes]);
 

  return  (
  
  
    <Section $isMobile={isMobile} className="sec1">
      <Container padding="0">
        <WrappedRow>
          <Col align="start" $maxWidth={isMobile?"100%":"50%"}>
  
          <Img width={"210px"} src={logoJu}/>
          <RobertoTitle $isMobile={isMobile} $fontSize={110}>MELT FAT <i>FAST!</i></RobertoTitle>
          <OswaldTitle $isMobile={isMobile} $fontSize={55} $align="start" $lineHeight={82}>WITHOUT DIET OR EXERCISE</OswaldTitle>
          <OswaldTitle $isMobile={isMobile} $fontSize={40} $align="start" color="#7fc407" >Powerful New Formula Triggers Fat-Burning Ketosis!</OswaldTitle>
  
          <BulletsArea $isMobile={isMobile}>
            <Bullet>Burn Fat for Energy not Carbs</Bullet>
            <Bullet>Release Fat Stores</Bullet>
            <Bullet>Increase Energy Naturally!</Bullet>
            <Bullet>Love the Way You Feel!</Bullet>
          </BulletsArea>
  
          <Row>
            <Col justify="flex-start" >
              <Img width={"100%"} src={arrowImage} />
              <Img  width={isMobile?"90%":"60%"} src={securityIcons} margin="-20px 0px 0px 0px" />
            </Col>
            <Col $maxWidth="25%">
            <Img width={"100%"} src={bottleImage}  margin="-45px 0px 0px 0px"/>
            </Col>
            
              <Col margin={"-100px 0px 0px 0px"} $maxWidth={isMobile?"24%":"20%"} justify="flex-start">
                <Img width={"100%"}  src={ingredientsIcon} margin="-20px 0px 0px 0px" />
                <Img width={"100%"}  src={guaranteeIcon} margin="-20px 0px 0px 0px"/>
                <Img width={"95%"}  src={usa} margin="-12px 0px 0px 0px"/>
              </Col>
              
  
          </Row>
          
          </Col>
          {
            !isMobile && 
            <Col className="cont" justify="center" $maxWidth="40%" align="end" margin="0px 15px" padding="0px 30px">
                  <OrderForm ref={ref}/>
                  
                  
              
            </Col>
          }
          
  
        </WrappedRow>
  
  
      
      </Container>
      
  
  
    </Section>
    
    
    );
  


} )

const Section = styled.div<{$isMobile:boolean}>`

  display: flex;
  flex: 1;
  position: relative;
  padding: 10px;
  overflow: hidden;
  background: linear-gradient(${props=>props.$isMobile?'rgba(255, 255, 255, .5)':'transparent'}, rgba(255, 255, 255, .5)),  url(${model}); 
  background-position: calc(100% + 100px) center;
  background-size: auto, contain;
  background-repeat: no-repeat;


  
`;


