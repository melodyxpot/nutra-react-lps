import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../theme/colors';
import { Icons } from '../../constants/images';
import 'react-phone-input-2/lib/material.css'; // Importing Material Design style




import { ColorState } from '.';





export enum TextFieldType {
  text = "text",
  textArea = "textArea",
  number = "number",
  password = "password",
  search = "search",
  expiration = "expiration",
  creditCard = "creditCard"
}

enum InputType {
  text = "text",
  textArea = "textArea",
  number = "number",
  password = "password",
  search = "text",
  expiration = "text",
  creditCard = "text"
}

enum InputMode {
  text = "text",
  textArea = "text",
  number = "numeric",
  password = "text",
  search = "text",
  expiration = "numeric",
  creditCard = "numeric"
}


export interface TextFieldOptions {
  type: TextFieldType;
  maxLength?: number
}



export const TextField = ({ fieldConfig, onBlur, onFocuse, onFieldChange, colorState, isActive }: FieldTypeProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const { name, label } = fieldConfig
  const { type, maxLength } = fieldConfig.typeOptions as TextFieldOptions
  const [value, setValue] = useState(fieldConfig.defaultValue || "")

  useEffect(() => {
    if(fieldConfig.defaultValue){
      setValue(fieldConfig.defaultValue)
      onFieldChange(name, fieldConfig.defaultValue)
    } 
    
  }, [fieldConfig.defaultValue]);



  const template = (value: any) => {

    const res = {
      formated: value,
      unformated: value,
    }
    if (type === TextFieldType.expiration) {
      value = value.replace(/[^0-9]/g, '').slice(0, 4); // Remove non-digits and limit length
      if (value.length > 2) {
        res.formated = value.slice(0, 2) + '/' + value.slice(2); // Add slash after MM
        res.unformated = res.formated
      }
    }


    if (type === TextFieldType.creditCard) {
      value = value.replace(/\D/g, '').slice(0, 16);
      res.formated = value.match(/.{1,4}/g)?.join('-') ?? "";
      res.unformated = res.formated.replace(/-/g, '')
    }

    if (maxLength) {

      if (typeof value === 'string') {
        res.formated = res.formated.slice(0, 3)
        res.unformated = res.unformated.slice(0, 3)
      } else if (typeof value === 'number') {
        res.formated = Number(String(res.formated).slice(0, 3))
        res.unformated = Number(String(res.unformated).slice(0, 3))
      }

    }

    return res
  }



  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const templateData = template(event.target.value)
    setValue(templateData.formated)
    onFieldChange(name, templateData.unformated)
  }


  const clearField = () => {
    setValue("")
    onFieldChange(name, "")
  }




  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };




  return (
    <Form>
      {
        type!==TextFieldType.textArea && 
        <Input
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocuse}
        value={value}
        $colorState={colorState}
        $isActive={true}
        type={showPassword && type === TextFieldType.password ? InputType.text : InputType[type]}
        inputMode={InputMode[type]}
        name={name}
        maxLength={maxLength}
        placeholder=" " // Ensures :placeholder-shown is not triggered when empty
      />

      }

{
        type===TextFieldType.textArea && 
        <TextArea
        onChange={(e)=>handleChange(e)}
        onBlur={onBlur}
        onFocus={onFocuse}
        value={value}
        $colorState={colorState}
        $isActive={true}
        // type={showPassword && type === TextFieldType.password ? InputType.text : InputType[type]}
        inputMode={InputMode[type]}
        name={name}
        maxLength={maxLength}
        placeholder=" " // Ensures :placeholder-shown is not triggered when empty
      />

      }

      

      <Label htmlFor={name} $isActive={isActive} $colorState={colorState}>
        {label}
      </Label>

      <IconContiner>
        {type === TextFieldType.search && value==="" &&
         <Icon src={Icons.Search} />}
         {type === TextFieldType.search && value!=="" &&
         <Clear onClick={clearField}>✖</Clear>}
        {type === TextFieldType.password && <Icon src={Icons.Eye} onClick={togglePasswordVisibility} />}
        {type !== TextFieldType.search && colorState === ColorState.success && <Icon src={Icons.Success} />}
        {colorState === ColorState.error && <Icon src={Icons.Error} />}
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
/* margin-right: 25px; */
`;

const Label = styled.label<{ $colorState: ColorState, $isActive: boolean }>`
position: absolute;
left: 10px;
top: 12px; /* Initial top offset */
color: ${props => props.$colorState === ColorState.error ? Colors.error : Colors.placeholder};
background:${Colors.whiteBackground};
/* border:1px solid #000; */
border-radius: 5px;
padding: 0 5px;
transition: all 0.3s ease;
transform: ${props => props.$isActive ? 'translateY(-23px)' : 'translateY(0px)'}; /* Smaller vertical movement */
font-size: ${props => props.$isActive ? '12px' : '16px'};
pointer-events: none; // Allows click events to pass through to the input below
`;


const Input = styled.input<{ $isActive: boolean, $colorState: ColorState }>`
  padding: 0px 15px;
  height: 44px;
  border: 1px solid ${props => props.$colorState === ColorState.error ? Colors.error : Colors.fieldBorder};
  border-radius: 8px;
  outline:none;
  font-size:'24px';
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow color and intensity as needed */
  }
  
  &:focus {
    border-color: ${props => props.$colorState === ColorState.error ? Colors.error : Colors.primary};
  }
  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    transform: translateY(-23px); /* Adjusted to move label to the border */
    font-size: 12px;
    color: ${props => props.$colorState === ColorState.error ? Colors.error : Colors.primary};
  }
  &.success {
    border-color: #00805a;
  }
  /* width: 100%; // Ensures input fills its container */
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const Clear = styled.button`
  width: 20px;
  font-size: 15px;
  border:none;
  background: transparent;
  margin: 0;
  padding: 0;
  height: 20px;
`;
const IconContiner = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  right: 10px;
  gap:10px;
  top: 17px; /* Initial top offset */
`;


const TextArea = styled.textarea<{ $isActive: boolean, $colorState: ColorState }>`
  /* padding: 12px 8px; */
  height: 150px;
  border: 1px solid ${props => props.$colorState === ColorState.error ? Colors.error : Colors.fieldBorder};
  border-radius: 8px;
  outline:none;
  font-size:16px;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow color and intensity as needed */
  }
  
  &:focus {
    border-color: ${props => props.$colorState === ColorState.error ? Colors.error : Colors.primary};
  }
  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    transform: translateY(-23px); /* Adjusted to move label to the border */
    font-size: 16px;
    color: ${props => props.$colorState === ColorState.error ? Colors.error : Colors.primary};
  }
  &.success {
    border-color: #00805a;
  }
  /* width: 100%; // Ensures input fills its container */
`;


