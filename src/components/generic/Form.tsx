import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { Field } from "../fields";
import { MessageBox } from "./MessageBox";





export const FormComponent = ({ fields, title, subTitle,onChange,serverRes,submitted,showMessageBox=true,align='center' }: FormProps) => {

  return (
    <FormContainer>
      
      {title && <Title $align={align}>{title}</Title>}
      {showMessageBox &&<MessageBox align={align} serverRes={serverRes}/>}
      
      {subTitle}
      {
      fields.map((field, index) => {
        return (
        <Field
          submitted={submitted}
          key={index}
          fieldConfig={field}
          onChange={onChange}
          serverRes={serverRes}
        />
        )
        
      })
      }
      
    </FormContainer>
  );
};

const FormContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center; /* This will center the items horizontally */
justify-content: center; /* This will center the items vertically and space them evenly */
width: 100%;
margin-bottom: 10px;
background: transparent;
`
const Title=styled.h3<{$align:'flex-start'| 'flex-end'| 'center' }>`
margin: 0;
margin-bottom: 10px;
align-self:${prop=>prop.$align};
`