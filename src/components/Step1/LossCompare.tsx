import React from 'react'
import { Color, Container, OswaldTitle, Section } from '../../style';
import { useDeviceType } from '../../context/DeviceContext';
import styled from 'styled-components';
import ProperMobileImg from '../../assets/images/proper-keto-mobile.png';
import ProperImg from '../../assets/images/proper.png';
import ProductImg from '../../assets/images/other-product.png';
import Product1Img from '../../assets/images/product1.png';
import Product2Img from '../../assets/images/product2.png';
import SurgeryImg from '../../assets/images/surgery.svg';
import SurgeryMobileImg from '../../assets/images/surgey-mobile.svg';
import CheckImg from '../../assets/images/check.svg';

import './style.css';

const StyledTable = styled.table`
  display: table;
  box-sizing: border-box;
  text-indent: initial;
  unicode-bidi: isolate;
  border-color: #ffffff80;
  border-collapse: initial;
  border-spacing: 3px 0;
  width: 100%;
  font-family: Oswald, sans-serif;
  text-align: center;
  border-collapse: initial;
  border-spacing: 3px 0;
  width: 100%;

  & td {
    border: 1px solid #ffffff80;
    padding: 0;
    width: 18%;
    font-size: 15px;
    position: relative;
  }

  & tr:first-child td:first-child {
    border: none;
  }

  @media only screen and (max-width: 850px) {
    border-spacing: 1px 0;
    & td {
      border: none;
      padding: 0 3px;
    }

    & td:first-child {
      width: 40% !important;
    }

    & tr:first-child td {
      background: none !important;
    }

    & tr:first-child i {
      border-spacing: 0;
      border-radius: 15px 15px 0 0;
      border: solid #e5e5e5 1px;
      background: #ffffff80 !important;
      height: 100%;
      left: 2px;
      position: absolute;
      right: 2px;
      top: 0;
      z-index: -1;
    }

    & span {
      z-index: 3;
      position: relative;
    }

    & i {
      border-spacing: 0;
      border: solid #e5e5e5 1px;
      border-top: none;
      border-bottom: none;
      background: #ffffff80 !important;
      height: 100%;
      left: 2px;
      position: absolute;
      right: 2px;
      top: 0;
      z-index: 2;
    }

    & tr td:nth-child(2) i {
      background-color: #3ea745 !important;
    }

    & tr td:nth-child(4) {
      display: none;
    }

    & tr:last-child {
      color: #fff;
    }
  }
`

const StyledTBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  unicode-bidi: isolate;
  border-color: inherit;
  box-sizing: border-box;
  margin: 0;

  & tr:first-child td {
    font-size: 16px;
    text-align: center;
  }

  & tr:first-child img {
    display: block;
    margin: 4px auto 0;
  }

  @media only screen and (max-width: 850px) {
    font-size: 15px !important;
  
    & td:nth-child(2), & td:nth-child(3), & td:nth-child(4) {
      width: 20%;
    }

    & img {
      width: 100%;
      max-width: calc(100% - 20px);
    }

    & tr:first-child td:nth-child(3) img {
      margin: 1px auto -1px;
      max-width: calc(100% - 6px);
    }

    & td {
      background: transparent !important;
    }

    & tr:nth-child(odd) {
      background: #f1b51a !important;
    }

    & tr:nth-child(even) {
      background: #f1c61a !important;
    }

    & tr:nth-child(2), & tr:last-child  {
      background-color: #333 !important;
    }

    & tr:first-child {
      background: transparent !important;
    }
  }

  & .table-title {
    background: #f1c61a !important;
    font-size: 18px !important;
    line-height: 35px;
    padding-left: 20px !important;
    text-align: left;

    @media only screen and (max-width: 850px) {
      font-size: 15px !important;
      line-height: 15px;
      padding-left: 15px !important;
    }
  }
`;

const StyledTitle = styled(OswaldTitle)`
  font-size: 50px;
  font-weight: bold;

  @media only screen and (max-width: 850px) {
    font-size: 40px;
    line-height: 3rem;
  }
`;
const StyledMobileTr = styled.tr`
  display: none;
  padding: none;

  @media only screen and (max-width: 850px) {
    display: table-row;
    width: 100%;
    background: #333;
    color: #fff;
    font-size: 14px !important;
  }
`;

const CustomSection = styled(Section)`
  @media only screen and (max-width: 850px) {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 0;
  }

  @media only screen and (max-width: 420px) {
    padding: 0
  }
`;

const CustomContainer = styled(Container)`
  @media only screen and (max-width: 850px) {
    padding-bottom: 0;
  }
`

export const LossCompare = () => {
  const {isMobile} = useDeviceType()

  return (
    <CustomSection $backgroundColor1="#fff" style={{ width: "100%" }}>
      <CustomContainer style={{ flexDirection: 'column', maxWidth: '1000px', width: '100%' }}>
        <StyledTitle $isMobile={isMobile} style={{ marginBottom: "30px", width: '100%' }} $fontSize={55} $lineHeight={82} weight={500}>
          HOW DOES <Color color="#253b88">WEIGHT LOSS</Color> COMPARE?
        </StyledTitle>
        <StyledTable className='compare-table'>
          <StyledTBody>
            <tr className='table-product'>
              <td></td>
              <td className='table-blue'><i /> <img src={isMobile ? ProperMobileImg : ProperImg} alt='proper' /> <span>Proper Keto Capsules</span></td>
              <td><img src={isMobile ? ProductImg : Product1Img} alt='Product1Img' /><i /> <span>Other Product 1</span></td>
              <td><img src={Product2Img} alt='Product2Img' /><i /> <span>Other Product 2</span></td>
              <td><img src={isMobile ? SurgeryMobileImg : SurgeryImg} alt='Surgey' width={isMobile ? 69 : 120} height={isMobile ? 68 : 119} /><i /> <span>Surgery</span></td>
            </tr>
            <StyledMobileTr>
              <td>FEATURES</td>
              <td><i /><span>Proper Keto Capsules</span></td>
              <td><i /><span>Other Product</span></td>
              <td><i /></td>
              <td><i /><span>Surgery</span></td>
            </StyledMobileTr>
            <tr className="table-line">
              <td className="table-title">Burn Fat for Energy</td>
              <td className='table-blue'><i /><span>YES</span></td>
              <td><i /><span>NO</span></td>
              <td><i />YES</td>
              <td><i />NO</td>
            </tr>
            <tr className="table-line">
              <td className="table-title">ALL-NATURAL</td>
              <td className='table-blue'><i /><span>YES</span></td>
              <td><i /><span>YES</span></td>
              <td><i /><span>NO</span></td>
              <td><i /><span>YES</span></td>
            </tr>
            <tr className="table-line">
              <td className="table-title">Top Quality Ingredients</td>
              <td className='table-blue'><i /><span>YES</span></td>
              <td><i /><span>NO</span></td>
              <td><i /><span>NO</span></td>
              <td><i /><span>YES</span></td>
            </tr>
            <tr className="table-line">
              <td className="table-title">Allergic safety</td>
              <td className='table-blue'><i /><span>YES</span></td>
              <td><i /><span>NO</span></td>
              <td><i /><span>NO</span></td>
              <td><i /><span>YES</span></td>
            </tr>
            <tr className="table-line">
              <td className="table-title">Leaves Stretched Skin</td>
              <td className='table-blue'><i /><span>NO</span></td>
              <td><i /><span>YES</span></td>
              <td><i /><span>NO</span></td>
              <td><i /><span>NO</span></td>
            </tr>
            <tr className="table-line">
              <td className="table-title">Helps to achieve ketosis fast</td>
              <td className='table-blue'><i /><span>YES</span></td>
              <td><i /><span>NO</span></td>
              <td><i /><span>YES</span></td>
              <td><i /><span>NO</span></td>
            </tr>
            <tr className="table-line">
              <td className="table-title">FAST results in as little as 1 week</td>
              <td className='table-blue'><i /><span>YES</span></td>
              <td><i /><span>NO</span></td>
              <td><i /><span>NO</span></td>
              <td><i /><span>YES</span></td>
            </tr>
            <tr className="table-line">
              <td className="table-title">Price</td>
              <td className='table-blue'><i /><span>from £33.00</span></td>
              <td><i /><span>£80.00</span></td>
              <td><i /><span>£69.99</span></td>
              <td><i /><span>£3000</span></td>
            </tr>
            <tr className="table-line">
              <td className="table-line__last"><span>Recommended Choice</span></td>
              <td className='table-blue'><img className='bottom-img' src={CheckImg} alt='check img' /><i /> </td>
              <td><i /></td>
              <td><i /></td>
              <td><i /></td>
            </tr>
          </StyledTBody>
        </StyledTable>
      </CustomContainer>
    </CustomSection>
  )
}