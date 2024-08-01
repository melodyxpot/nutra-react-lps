import  { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme/colors';

import { ColorState } from '.';




export interface CheckBoxFieldOptions {
  text: any
}

export interface CheckBoxFieldTypeProps {
  fieldConfig:FieldConfig
  onFieldChange:(name:string,value:any)=>void;
  colorState:ColorState
}


export const CheckboxField = ({ fieldConfig, onFieldChange, colorState }: CheckBoxFieldTypeProps) => {
  const { name,defaultValue } = fieldConfig
  const { text } = fieldConfig.typeOptions as CheckBoxFieldOptions
  const [value, setValue] = useState<any>(defaultValue);


  const handleChange = () => {
    const newVal = !value
    setValue(newVal)
    onFieldChange(name, newVal)
  }


  return (
    <CheckboxContainer id="checkbox-container">
      <CheckboxInput
        type="checkbox"
        id={name}
        name={name}
        checked={value}
        onChange={handleChange}
        $colorState={colorState}
      />
      <CheckboxLabel>
        {text}
      </CheckboxLabel>
    </CheckboxContainer>
  );
};




const CheckboxContainer = styled.div`

  display: flex;
  align-items: center;
  position: relative;
  width:90%;
  margin-right: 25px;
`;

const CheckboxLabel = styled.div`
  margin-left: 8px; // Space between checkbox and label
  font-size: 12px;
  color: ${Colors.text}; // Example color: ;
  width: 100%;
`;

const CheckboxInput = styled.input<{ $colorState: ColorState }>`
  accent-color: ${props => props.$colorState === ColorState.error ? Colors.error : Colors.primary};
  width: 18px; /* Set width */
  height: 18px; /* Set height */
  outline: ${props => props.$colorState === ColorState.error ? '2px solid '+Colors.error : 'none'}; /* Set outline */
`;


