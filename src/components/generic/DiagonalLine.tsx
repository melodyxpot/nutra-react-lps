import styled from "styled-components";


interface Props{
  opposite?:boolean
}
export const DiagonalLine = ({opposite}:Props)=>{
    return(
        <DiagonalLineContainer $opposite={opposite} >
        <DiagonalLineSVG preserveAspectRatio="none" version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <Polygon points="200,500 0,500 300,0 500,0" />
        </DiagonalLineSVG>
        </DiagonalLineContainer>
    )
}




const DiagonalLineContainer = styled.div<{$opposite?:boolean}>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  transform: ${props=>props.$opposite?'scale(-1, 1)':'scale(1, 1)'};
`;
const DiagonalLineSVG = styled.svg`
  width: 100%;
  height: 100%;
  preserveAspectRatio: none;
`;

const Polygon = styled.polygon`
  fill: #f3f3f3;
`;