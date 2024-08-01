import Select from 'react-select';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Colors } from '../../theme/colors';

import { ColorState } from '.';





export interface SelectValue{
    value:string | number
    label:string
  }
  
 export  interface SelectFieldOptions{
    options:SelectValue[]
  }




// State Dropdown Component
export const SelectField =  ({ fieldConfig,onBlur,onFocuse,onFieldChange,colorState,isActive}:FieldTypeProps) => {
    // Convert state data to options for react-select
    const {name,label,defaultValue} = fieldConfig
    const {options} = fieldConfig.typeOptions as SelectFieldOptions
    
    const [value,setValue] = useState(defaultValue)    
    
    const handleChange = (value:any)=>{
        setValue(value)
        onFieldChange(name, value.value)
    }

    useEffect(() => {
      const initialValue = options.find((option) => option.value === defaultValue) || null;
      setValue(initialValue);
    }, [defaultValue, options]);

    
   
  
    return (
        <Form className='select-f'>
            
            <StyledSelect
                    onChange={handleChange}
                    onBlur={onBlur}
                    onFocus={onFocuse}
                    classNamePrefix="Select"
                    options={options}
                    value={value}
                    $colorState={colorState}
                    $isActive={true}
                />

                <Label htmlFor={name} $isActive={isActive} $colorState={colorState}>
                    {label}
                </Label> 


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


const StyledSelect = styled(Select)<{ $isActive: boolean,$colorState:ColorState }>`
   width: 100%;
  .Select__control {
    border-radius: 8px;
    width: 100% !important;
    height: 48px;
    outline:none;
    font-size:'24px';
    box-sizing: border-box;   
    transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease;
    border:1px solid ${props => props.$colorState===ColorState.error ? Colors.error : Colors.fieldBorder};
    display: flex;
    align-items: center;
    &:hover {
      border:1px solid ${Colors.fieldBorder};
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);; // Adding shadow on hover
    }
    &:focus {
    border-color: ${props => props.$colorState===ColorState.error ? Colors.error : Colors.primary};
    }
    &:focus + &:not(:placeholder-shown)  {
      transform: translateY(-23px); /* Adjusted to move label to the border */
      font-size: 12px;
      color: ${props => props.$colorState===ColorState.error ? Colors.error : Colors.primary};
    }
    &.success {
      border-color: #00805a;
    }
  }

 

  .Select__value-container {
    padding: 0 8px;
    display: flex;
    align-items: center;
  }

  .Select__single-value {
    margin: 0;
    text-align: left;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: #3c3d3e;
  }
  .Select__menu-list {
    padding: 0;
    text-align: left;
  }
`;
