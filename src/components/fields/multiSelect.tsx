import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme/colors';




export interface MultiSelectOption {
  name: string;
  value: number;
}


export  interface MultiSelectFieldOptions{
  options:MultiSelectOption[]
}



export const MultiSelectField = ({ fieldConfig,onBlur,onFocuse,onFieldChange,colorState,isActive}:FieldTypeProps) => {
  
  const {name,label,defaultValue} = fieldConfig
  const {options} = fieldConfig.typeOptions as MultiSelectFieldOptions
  
  
  const [selectedValues, setSelectedValues] = useState<number[]>(defaultValue || []);


  const toggleSelection = (value: number) => {
    const currentIndex = selectedValues.indexOf(value);
    const newSelectedValues = [...selectedValues];

    if (currentIndex === -1) {
      newSelectedValues.push(value);
    } else {
      newSelectedValues.splice(currentIndex, 1);
    }
    onFieldChange(name,newSelectedValues)
    setSelectedValues(newSelectedValues);
  };

  return (
    <Container>
        <Label>{label}</Label>
            <ButtonsContainer>
            {options.map(option => (
          <Button
            key={option.value}
            type="button"
            selected={selectedValues.includes(option.value)}
            onClick={() => toggleSelection(option.value)}
          >
            {option.name}
          </Button>
        ))}

            </ButtonsContainer>
        
      
    </Container>
      
      
    
  );
}


const Container= styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
  width:100%;
  /* margin-right: 25px; */
`

const Label= styled.h4`
margin-bottom: 16px;
margin-top: 8px;
`
const ButtonsContainer= styled.div`

`

const Button = styled.button<{ selected: boolean }>`
  border: 1px solid ${props => props.selected ? Colors.primary : Colors.fieldBorder};
  border-radius: 8px;
  padding: 12px 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  color: ${props => props.selected ? Colors.primary : Colors.text};
  background-color: transparent;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;
