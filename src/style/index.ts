import styled from "styled-components";



export const Section = styled.div<{ $backgroundColor1: string, $backgroundColor2?: string, $zIndex?: number, padding?: string }>`
  background:${props => props.$backgroundColor2?"linear-gradient(to bottom, "+props.$backgroundColor1+", "+props.$backgroundColor2+")":props.$backgroundColor1};
  padding:${props => props.padding || '10px 0px'};
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: ${props => props.$zIndex !== undefined ? props.$zIndex : 0};

`;


export const Container = styled.div<{padding?:string,$alignItems?:string,$maxWidth?:string,$gap?:string}>`
  display: flex;
  justify-content:center;
  align-items: ${props=>props.$alignItems || "none"};
  flex-wrap: wrap;
  max-width: ${props=>props.$maxWidth || '1220px'};
  padding: ${props=>props.padding || '20px 0px'};
  gap: ${props=>props.$gap || '0px'};
  @media screen and (max-width: 768px) {
    max-width: 95%;  
  }
  width: 100%;
  margin: 0 auto;
`;

export const StyledHR = styled.hr`
  width: 100%;
  height: 4px;
  background-color: #cccccc;
  border: none;
  margin:0;
  z-index: 5;
  max-width: 1120;
`;

export const Row = styled.div<{justify?:'center' | 'flex-start' | 'flex-end' |'space-between',gap?:string, padding?:string,background?:string}>`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  background:${props => props.background || 'transparent'};
  justify-content:${props => props.justify || 'center'};
  gap:${props => props.gap || '0px'};
  padding:${props => props.padding || '0px'};
`;

export  const FloatingContainer = styled.div`
width: 100%;
display: flex;
position: fixed;
bottom:15px;
z-index: 60;
`

export const WrappedRow = styled.div<{$gap?:string,margin?:string,justify?:'center' | 'flex-start' | 'flex-end' |'space-between',$reverse?:boolean}>`
  margin:${props => props.margin  || '0px'};
  display: flex;
  justify-content:${props => props.justify || 'center'};
  width: 100%;
  flex-wrap:${props => props.$reverse ? 'wrap-reverse':'wrap'};
  gap: ${props=>props.$gap || '20px'};
  z-index: 1;
`;

export const Col = styled.div<{padding?:string ,background?:string, gap?:string, align?: 'center' | 'start' | 'end' ,justify?:'center' | 'flex-start' | 'flex-end',margin?:string , $maxWidth?:string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  margin:${props => props.margin || '0px'};
  padding:${props => props.padding || '0px'};
  justify-content:${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  gap:  ${props => props.gap || '0px'};
  width: 100%;
  max-width: ${props => props.$maxWidth !== undefined ? props.$maxWidth: 'none' };
  background: ${props=>props.background|| 'transparent'};
  box-sizing: border-box;
  z-index: 1;
`;

export const Img = styled.img<{margin?:string}>`
  height: auto;
  margin:${props => props.margin || '0px'};
`;



export const AbsoluteImg = styled.img<{ width: string, top?: number, left?: number, right?: number, bottom?: number }>`
position: absolute;
top:${props => props.top !== undefined ? props.top+'px' : 'auto'};
left:${props => props.left !== undefined ? props.left+'px' : 'auto'};
right:${props => props.right !== undefined ? props.right+'px' : 'auto'};
bottom:${props => props.bottom !== undefined ? props.bottom+'px' : 'auto'};
width: ${props => props.width};
height: auto;
`

export const SegoeP = styled.p<{ margin?:string, color?: string, $fontSize?: string,$lineHeight?: string, weight?: number, direction?: 'center' | 'end' | 'start' }>`
color:${props => props.color ? props.color : "#212529"};
font-size: ${props => props.$fontSize ? props.$fontSize : '16px'};
margin: ${props => props.margin ||  '4px 0px'};
line-height: ${props => props.$lineHeight ? props.$lineHeight : "22px"};
font-weight: ${props => props.weight ? props.weight : 400};
text-align: ${props => props.direction || 'start'};
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const Color = styled.span<{ color: string }>`
color:${props => props.color};
`


















export const Btn = styled.a<{$backgroundColor1: string, $backgroundColor2?: string,color?:string,width?:string,$fontSize?:number}>`
  background: linear-gradient(to bottom, ${props=>props.$backgroundColor1}, ${props=>props.$backgroundColor2});
  width: ${props=>props.width || 'auto'};
  padding: 10px 15px;
  box-sizing: border-box;
  line-height: 25px;
  margin:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color:${props=>props.color || '#fff'} ;
  text-transform: uppercase;
  border-radius: 10px;
  font-size: ${props=>props.$fontSize || 20}px;
  font-weight: 700;
  float: right;
  min-height: 60px;
  cursor: pointer;
  &:hover {
    color: #253b88;
    text-decoration: underline

  }
`;


export const BulletsArea = styled.ul<{$isMobile:boolean}>`
position: relative;
  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${props=>props.$isMobile?"17px":"30px"};
  line-height: ${props=>props.$isMobile?"15px":"35px"};
  letter-spacing: -.02em;
  color: #000;
  padding-left: 20px;
  margin-bottom: 8px;
`

export const Bullet = styled.li`

&::marker {
  font-size: 30px;
 color: #ca3070; /* Set the bullet color */
}
`

const calculateSize = (isMobile: boolean, size: number): string => {
  return isMobile ? `${Math.floor(size / 2)}px` : `${size}px`;
};



export const RobertoTitle = styled.h3<{$isMobile:boolean, $fontSize:number, color?:string , weight?:number, $lineHeight?:number}>`
font-size: ${props=>calculateSize(props.$isMobile,props.$fontSize)};
line-height: ${props=>props.$lineHeight?calculateSize(props.$isMobile,props.$lineHeight):calculateSize(props.$isMobile,props.$fontSize)};
letter-spacing: -.09em;
color: ${props=>props.color || '#253b88'};
margin:0;
font-family: 'Roboto Condensed';
font-weight: ${props=>props.weight || 400};
padding: 0;
/* margin-top: -20px; */
`


export const OswaldTitle = styled.h1<{$isMobile:boolean, $fontSize:number, color?:string, weight?:number, $lineHeight?:number, $align?:"center" | "start"}>`
margin:0;
margin-bottom: 10px;
padding: 0;
font-size: ${props=>calculateSize(props.$isMobile,props.$fontSize)};
line-height: ${props=>props.$lineHeight?calculateSize(props.$isMobile,props.$lineHeight):calculateSize(props.$isMobile,props.$fontSize)};
font-family: Oswald, sans-serif;
font-weight: ${props=>props.weight || 400};
color: ${props=>props.color || '#212529'};
text-align: ${props=>props.$align || "center"};
`

export const SegoeTitle = styled.h1<{$isMobile:boolean, $fontSize:number, color?:string, weight?:number ,$lineHeight?:number,$align?:"center" | "start"}>`
margin:0;
padding: 0;
font-size: ${props=>calculateSize(props.$isMobile,props.$fontSize)};
line-height: ${props=>props.$lineHeight?calculateSize(props.$isMobile,props.$lineHeight):calculateSize(props.$isMobile,props.$fontSize)};
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: ${props=>props.weight || 400};
color: ${props=>props.color || '#212529'};
text-align: ${props=>props.$align || "center"};
`


export const Box = styled.div<{$noBorder?:boolean, $background?:string,gap?:string, margin?:string}>`
display: flex;
flex-direction: column;
background: ${props=>props.$background || 'transparent'};
width: 100%;
box-sizing: border-box;
border: ${props=>props.$noBorder?'none':'solid 1px #ccc'};
padding: 10px;
gap:${props => props.gap || '10px'};
margin: ${props => props.margin || '0'};
`