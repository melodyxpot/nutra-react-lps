import styled from 'styled-components';
import React, {useState,useEffect } from 'react';
import { Colors } from '../../theme/colors';
import  { Schema } from 'joi';


import { SelectField, SelectFieldOptions } from './SelectField';
import {TextField, TextFieldOptions,TextFieldType } from './TextField';
import { PhoneField,PhoneFieldOptions } from './PhoneField';
import { MultiSelectField,MultiSelectFieldOptions } from './multiSelect';
import { CheckboxField,CheckBoxFieldOptions } from './CheckBoxField';
import { FilterSelectField } from './filterSelect';
import { RangeField,RangeFieldOptions } from './Range';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { DateRangeField, DateRangeFieldOptions } from './DateRange';


export {TextFieldType}

export enum FieldType{
  text=1,
  checkBox=2,
  multiSelect=3,
  select=4,
  phone=5,
  filterSelect=6,
  range=7,
  dateRange=8
}



export enum ColorState {
  normal="normal",
  error="error",
  success="success"

} 



export const Field= ({fieldConfig,onChange,serverRes,submitted}:FieldProps)  => {
  
  const {type,name,defaultValue,joiSchema} = fieldConfig
  const [errorMessage,setErrorMessage] = useState<string | null>(null)
  const [isActive,setIsActive] = useState<boolean>(false)
  const [value,setValue] = useState<any>(defaultValue)
  const [colorState,setColorState] = useState<ColorState>(ColorState.normal)
  const [visible,setVisible] = useState<boolean>(!fieldConfig.hide)



  const getFieldComponent = ()=>{
    switch (type){
      case FieldType.select:
        return (<SelectField fieldConfig={fieldConfig} onBlur={onBlur} onFocuse={onFocus} onFieldChange={onFieldChange} colorState={colorState} isActive={isActive}/>)
      case FieldType.filterSelect:
          return (<FilterSelectField fieldConfig={fieldConfig} onBlur={onBlur} onFocuse={onFocus} onFieldChange={onFieldChange} colorState={colorState} isActive={isActive}/>)
      case FieldType.text:
        return (<TextField fieldConfig={fieldConfig} onBlur={onBlur} onFocuse={onFocus} onFieldChange={onFieldChange} colorState={colorState} isActive={isActive}/>)
      case FieldType.phone:
        return (<PhoneField fieldConfig={fieldConfig} onBlur={onBlur} onFocuse={onFocus} onFieldChange={onFieldChange} colorState={colorState} isActive={isActive}/>)
      case FieldType.multiSelect:
        return (<MultiSelectField fieldConfig={fieldConfig} onBlur={onBlur} onFocuse={onFocus} onFieldChange={onFieldChange} colorState={colorState} isActive={isActive}/>)
      case FieldType.checkBox:
        return (<CheckboxField fieldConfig={fieldConfig}   onFieldChange={onFieldChange} colorState={colorState} />)
      case FieldType.range:
        return (<RangeField fieldConfig={fieldConfig} onBlur={onBlur} onFocuse={onFocus} onFieldChange={onFieldChange} colorState={colorState} isActive={isActive}/>)
      case FieldType.dateRange:
        return (<DateRangeField fieldConfig={fieldConfig} onBlur={onBlur} onFocuse={onFocus} onFieldChange={onFieldChange} colorState={colorState} isActive={isActive}/>)
    }
  }

 


  const onBlur = ()=>{
    const validation = validate(value)
    const colorState = validation.isValid ? ColorState.success : ColorState.error
    setColorState(colorState)
    setIsActive(false)

  }

  const onFocus = ()=>{
    setColorState(ColorState.normal)
    setIsActive(true)

  }

  const onFieldChange = (propName:string,value:any)=>{
    let validation = {isValid:true}
    if(propName===name){
      validation = validate(value)
      setValue(value);
      setColorState(ColorState.normal)
    }
  
    onChange(propName,value,validation.isValid)
   
  }

  const validate = (value: any) => {
    const res = joiSchema.validate(value);
    
    const validation:{isValid:boolean,error:string | null} = {
      isValid:true,
      error:null 
    }
   

    if(res.error){
      validation.isValid=false
      validation.error=res.error.message.replace(`"value" is`,``).replace(`"value"`,``).replace("must be [true]","must approve")
      setErrorMessage(validation.error)
    } else {
      setErrorMessage(null)
    }
  
    return validation
    
  };

  useEffect(() => {
    
    if(defaultValue){
      onFieldChange(name,defaultValue)
    }

  }, [defaultValue]);

  useEffect(() => {
    
    setVisible(!fieldConfig.hide)

  }, [fieldConfig.hide]);
  
  
  

  React.useEffect(() => {

    if(serverRes?.fieldName===name && serverRes.succeeded===false){
      if(serverRes.errorDescription){
        setErrorMessage(serverRes.errorDescription)
        setColorState(ColorState.error)
      }
        
    }
    
  }, [serverRes]);


  
  React.useEffect(() => {

    if(submitted){
       
      const validation = validate(value)
      const colorState = validation.isValid ? ColorState.success : ColorState.error
      setColorState(colorState)
      setIsActive(false)
    }
    
  }, [submitted]);



  

  return (
    <Form>
      {
        visible && getFieldComponent()
      }

    
  
      {visible &&  colorState===ColorState.error && 
        <ErrorMessage>{errorMessage}</ErrorMessage>
        
      }
    </Form>
  );
}



const Form = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width:100%;
  /* margin-right: 25px; */
`;


const ErrorMessage = styled.p`
  color: ${Colors.error};
  font-size: 14px;
  margin-top: -5px;
  margin-bottom: 2px;
`;





