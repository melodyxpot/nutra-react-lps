import styled from 'styled-components';
import  { useEffect, useState } from 'react';
import { Colors } from '../../theme/colors';
import { Icons } from '../../constants/images';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'; // Importing Material Design style
import { ColorState } from '.';
import { useClient } from '../../context/ClientContext';




export enum TextFieldType{
    text="text",
    number="number",
    password="password",
    search="search",
}

export interface PhoneFieldOptions {
  countryFieldName:string;
}



export const PhoneField= ({ fieldConfig,onBlur,onFocuse,onFieldChange,colorState,isActive}:FieldTypeProps)  => {
  
  const {name,label,defaultValue} = fieldConfig
  const {countryFieldName} = fieldConfig.typeOptions as PhoneFieldOptions
  const {client} = useClient()
  
  
  const [value,setValue] = useState<any>(defaultValue)
  const [country,setCountry] = useState<any>(client?.country?.toLocaleLowerCase() || 'us')

  useEffect(() => {
    if(client?.country){
      setCountry(client.country.toLocaleLowerCase())
    }
    
  }, [client]);
  
  

const handleChange = (value:string, countryObj:any) => {
    const phone = countryObj?.dialCode+"-"+value.replace(countryObj?.dialCode,"")

    setValue(value)
    onFieldChange(name, phone)
    onFieldChange(countryFieldName, countryObj.countryCode)

  };
 
  
  return (
    <Form>
        
        <StyledPhoneInput
        country={country}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocuse}
        value={value}
        $colorState={colorState}
        $isActive={true}
        specialLabel=""
        
    
      />


            <Label htmlFor={name} $isActive={isActive} $colorState={colorState}>
                {label}
            </Label> 

            <IconContiner>
            
              {colorState===ColorState.success && <Icon src={Icons.Success}/>}
              {colorState===ColorState.error&& <Icon src={Icons.Error}/>}
            </IconContiner>


    </Form>
    
);
}




const Form = styled.div`
display: flex;
flex-direction: column;
position: relative;
margin-bottom: 10px;
margin-top: 10px;
width:100%;
`;

const Label = styled.label<{ $colorState:ColorState ,$isActive:boolean}>`
  position: absolute;
  left: 10px;
  top: 15px; /* Initial top offset */
  color: ${props => props.$colorState===ColorState.error ? Colors.error : Colors.placeholder};
  background:${Colors.whiteBackground};
  padding: 0 5px;
  transition: all 0.3s ease;
  transform: translateY(-23px); /* Smaller vertical movement */
  font-size: 12px;
  pointer-events: none; // Allows click events to pass through to the input below
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
const IconContiner = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  right: 10px;
  gap:10px;
  top: 17px; /* Initial top offset */
`;


const StyledPhoneInput = styled(PhoneInput)<{ $colorState:ColorState ,$isActive:boolean}>`
  width: 100%;

  .form-control {
    
    border-radius: 8px;
    width: 100%;
    height: 48px;
    outline:none;
    font-size:'24px';
    transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease;
    border:1px solid ${props => props.$colorState===ColorState.error ? Colors.error : Colors.fieldBorder};
    &:hover {
      border:1px solid ${Colors.fieldBorder};
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);; // Adding shadow on hover
    }
    &:focus {
    border-color: ${props => props.$colorState===ColorState.error ? Colors.error : Colors.primary};
    }
    &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
      transform: translateY(-23px); /* Adjusted to move label to the border */
      font-size: 12px;
      color: ${props => props.$colorState===ColorState.error ? Colors.error : Colors.primary};
    }
    &.success {
      border-color: #00805a;
    }
  }
`;



