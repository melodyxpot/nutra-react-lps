import styled from 'styled-components';
import  { useState } from 'react';
import { Colors } from '../../theme/colors';
import { Icons } from '../../constants/images';
import { Range, getTrackBackground } from 'react-range';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'; // Importing Material Design style
import { ColorState } from '.';




export enum TextFieldType{
    text="text",
    number="number",
    password="password",
    search="search",
}

export interface RangeFieldOptions {
  minFieldName:string;
  maxFieldName:string;
  min:number;
  max:number;
}



export const RangeField= ({ fieldConfig,onBlur,onFocuse,onFieldChange,colorState,isActive}:FieldTypeProps)  => {
  
  const {name,label,defaultValue} = fieldConfig
  const {minFieldName,maxFieldName,min,max} = fieldConfig.typeOptions as RangeFieldOptions
  
  const [values, setValues] = useState<number[]>([min, max]);
  
  

const handleChange = (values:number[]) => {

    setValues(values)
    onFieldChange(minFieldName, values[0])
    onFieldChange(maxFieldName, values[1])
  };
 
  
  return (
    <Container>
        
      


        <Label>{label}</Label>
        <SliderWrapper>

        <Range
        values={values}
        step={1}
        min={min}
        max={max}
        onFinalChange={(values) => handleChange(values)}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <Track
            {...props}
            ref={props.ref}
            background={getTrackBackground({
              values,
              colors: ['#ccc', '#7b61ff', '#ccc'],
              min: min,
              max: max,
            })}
          >
            {children}
          </Track>
        )}
        renderThumb={({ props, index }) => (
          <Thumb
            {...props}
            key={props.key}
            >
            <ThumbLabel>{values[index]}</ThumbLabel>
          </Thumb>
        )}
      />
        </SliderWrapper>



    </Container>
    
);
}




const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
justify-content: flex-end;
margin-bottom: 35px;
margin-top: 10px;
width:100%;
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 5px;
`;


const Label= styled.h4`
margin-bottom: 16px;
margin-top: 8px;
`

const Track = styled.div<{ background: string }>`
  height: 6px;
  width: 100%;
  border-radius: 3px;
  background: ${(props) => props.background};
`;

const Thumb = styled.div`
  height: 12px;
  width: 12px;
  background-color: #7b61ff;
  border-radius: 50%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ThumbLabel = styled.div`
  position: absolute;
  bottom: -35px;
  color: #fff;
  background-color: #7b61ff;
  padding: 5px 10px;
  border-radius: 8px;
`;






