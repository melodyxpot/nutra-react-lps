import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { DeviceProvider } from './context/DeviceContext';
import { LoaderProvider } from './context/LoaderContext';
import { V1Routes } from './pages/v1/v1routes';
import { Step1Page } from './pages/v1/Step1';
import { Step1Page as Step1PageV2 } from './pages/v2/Step1';
import { CheckoutPage } from './pages/v1/Checkout';
import { CheckoutPage as CheckoutPageV2 } from './pages/v2/Checkout';
import { MainPage } from './pages';
import ThankUPage from './pages/v1/ThankU';
import { CampaignProvider } from './context/CampaignContext';
import { OrderProvider } from './context/OrderContext';
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga4';
import { useEffect, useLayoutEffect } from 'react';
import { MarketingProvider } from './context/MarketingContext';
import { ClientProvider } from './context/ClientContext';
import { V2Routes } from './pages/v2/v2routes';
import Qualify from './pages/v2/Qualify';

ReactGA.initialize('G-PDH3S7YJL5');

const tagManagerArgs = {
  gtmId: 'GTM-W27NSK5H'
}
TagManager.initialize(tagManagerArgs)

interface WrapperProps{
  children:React.ReactElement
}
const Wrapper:React.FC<WrapperProps> = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 




function App() {
  
  window.dataLayer = window.dataLayer || [];
  useEffect(() => {
    ReactGA.send(
      {
        hitType: "pageview",
        page: window.location.pathname
      }
    )
  }, []);
  return (
    <>
      <DeviceProvider>
        <LoaderProvider>
          <ClientProvider>
          <CampaignProvider>
            <MarketingProvider>
              <OrderProvider>
                <BrowserRouter basename='/'>
                <Wrapper>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={V1Routes.step1} element={<Step1Page />} />
                    <Route path={V1Routes.checkout} element={<CheckoutPage />} />
                    <Route path={V1Routes.thankYou} element={<ThankUPage />} />

                    <Route path={V2Routes.step1} element={<Step1PageV2 />} />
                    <Route path={V2Routes.checkout} element={<Step1PageV2 />} />
                    <Route path={V2Routes.thankYou} element={<CheckoutPageV2 />} />
                    <Route path={V2Routes.qualify} element={<Qualify />} />

                  </Routes>

                </Wrapper>
                  
                </BrowserRouter>

              </OrderProvider>


            </MarketingProvider>

          </CampaignProvider>

          </ClientProvider>
          



        </LoaderProvider>

      </DeviceProvider>
    </>
  );
}

export default App;
