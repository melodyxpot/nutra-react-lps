
import { Footer } from "../../components/layout/Footer";
import { useEffect, useRef, useState } from "react";
import { FloatingContainer,Btn } from "../../style";
import { useDeviceType } from "../../context/DeviceContext";
import { Notification } from "../../components/generic/Notification";
import { HeaderComponent, Main,HowToUse,Magazine,Science,Stories,LastSaction,OrderForm } from "../../components/Step1";



export const Step1Page = () => {

  const formSectionRef = useRef<HTMLDivElement | null>(null)
  const {isMobile} = useDeviceType()
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  

  const onClick = ()=>{
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    setIsButtonVisible(isMobile)
    if(isMobile){
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsButtonVisible(!entry.isIntersecting);
        },
        {
          threshold: 0.1
        }
      );
  
      if (formSectionRef.current) {
        observer.observe(formSectionRef.current);
      }
  
      return () => {
        if (formSectionRef.current) {
          observer.unobserve(formSectionRef.current);
        }
      };

    }
    
  }, [isMobile]);
 
  return (
  <>
  <HeaderComponent/>
  <Main ref={formSectionRef}/>
  <Magazine/>
  <HowToUse/>
  <Science/>
  <Stories/>
  <LastSaction onClick={onClick}/>
  {
    isMobile &&
    <OrderForm ref={formSectionRef}/>
  }
  
  {
    isButtonVisible  &&
    <FloatingContainer>
      <Btn width="100%" $backgroundColor1="#a3cc2c" $backgroundColor2="#5fbb49" onClick={onClick}>RUSH MY ORDER</Btn>
    </FloatingContainer>
  }
    
  <Footer/>
  <Notification bottom="90px"/>
  
  
  </>
  
    
  );
};
