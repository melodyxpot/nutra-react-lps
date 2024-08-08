import { useEffect, useState } from "react";
import { Box, SegoeP,Color } from "../../style"
import styled from "styled-components"



const date = new Date().toDateString()

interface Props {
  active?: number
}

export const NavBox = ({ active = 2 }: Props)=>{
    const [activeTab, setActiveTab] = useState<number>(2);

    useEffect(() => {
      setActiveTab(active)
    }, [active])

    return (
        <Box $background="#fff" gap="0px">
          <TabHeaders>
            <TabHeader
                key={1}
                $isActive={activeTab === 1}
                // onClick={() => setActiveTab(1)}
            >
                1.Qualify
            </TabHeader>
            <TabHeader
              key={2}
              $isActive={activeTab === 2}
              // onClick={() => setActiveTab(2)}
            >
             2. Select Package
            </TabHeader>
            <TabHeader
              key={3}
              $isActive={activeTab === 3}
              // onClick={() => setActiveTab(3)}
            >
              3. Summary
            </TabHeader>
          </TabHeaders>

          {activeTab === 1 && <>
            <SegoeP weight={700} $fontSize="14px" $lineHeight="16px" style={{ textAlign: "center" }}>
              SEE IF YOU QUALIFY FOR OUR SPECIAL OFFER BY FILLING OUT THE FORM BELOW
            </SegoeP>
          </>}

          {activeTab === 2 && <>
            <SegoeP weight={700} $fontSize="14px" $lineHeight="16px"><Color color="#661997">APPROVED!</Color> Free Bottle Packages Confirmed</SegoeP>
            <SegoeP margin="3px 0px" $fontSize="14px" $lineHeight="16px">Limited supply available as of <Color color="#fc0303">{date}</Color> We currently have product <b>in stock</b> and ready to ship within 24 hours.</SegoeP>
            {
              process.env.REACT_APP_SUBSCRIBE_NOTIFICATION==="yes" &&
              <>
              <SegoeP margin="3px 0px" $fontSize="12px" $lineHeight="16px">To ensure fair access for all customers, please limit your purchase to one package of BioKetix gummies per person.</SegoeP>
            <SegoeP margin="3px 0px" $fontSize="12px" $lineHeight="16px">This unique offer is exclusive to our BioKetix journey and sold as a subscription. It can be canceled, pause or changed at any time.</SegoeP>
            <SegoeP margin="3px 0px" $fontSize="12px" $lineHeight="16px">I am aware of the importance of using the advanced formula ACV gummies responsibly as part of the BioKetix journey for effective weight management.</SegoeP>
              </>
            }
            <SegoeP margin="3px 0px" $fontSize="14px" $lineHeight="16px">Sell Out Risk: <Color color="#fc0303">HIGH</Color></SegoeP>
          </>} 
          
        </Box>
    )
}



const TabHeaders = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  /* border-bottom: 1px solid #ccc; */
`;

const TabHeader = styled.div<{ $isActive: boolean }>`
  padding: 5px 10px;
  width: 100%;
  font-size: 12px;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => (props.$isActive ? '#fd6f03' : '#ebebeb')};
  color: ${(props) => (props.$isActive ? '#fff' : '#000')};
`;
