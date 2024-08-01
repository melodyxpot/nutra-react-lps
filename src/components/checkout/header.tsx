import { Section,SegoeP,Color,Img } from "../../style";
import { useDeviceType } from "../../context/DeviceContext";
import { EyeImg } from "../../constants/images";

export const HeaderComponent = () => {

const {isMobile} = useDeviceType() 

  return (
    <>
    <Section $backgroundColor1={"#212529"} $zIndex={5} padding="0px 5px">
      <SegoeP $lineHeight="16px" direction="center" $fontSize={isMobile?"12px":"15px"}  color="#fff"><Img src={EyeImg} margin="0px 5px -3px 10px"/><Color color="rgb(245, 240, 180)">12 others</Color> are viewing this offer right now </SegoeP>
    </Section>
  </>

  )

}


  
  
