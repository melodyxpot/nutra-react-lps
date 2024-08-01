import { useEffect } from "react";
import { RequestConfigs } from "../api";
import { useMarketing } from "../context/MarketingContext";


export const useTagHandler = async (requestType:RequestConfig,serverRes:ApiResponse | null) => {

    const {marketing} = useMarketing()

    const pushToDataLayer = (event:string, data:any) => {
    window.dataLayer.push({
        event: event,
        ...data,
    });
    };

    const handleRoutes = ()=>{
        switch (requestType.url){
            case RequestConfigs.createLead.url:
                if(serverRes?.succeeded){
                    pushToDataLayer("lead-created",{...marketing})
                    
                }
                break;
            case RequestConfigs.createOrder.url:
                pushToDataLayer("checkout",{...marketing})
                const checkout = localStorage.getItem('checkout');
                if (!checkout) {
                    localStorage.setItem('checkout', JSON.stringify(true));
                    window.dataLayer.push({
                    event: "checkout-unique"
                });
                } 
                
        }
    }

    useEffect(() => {
        if(serverRes){
            handleRoutes()
        }
        
      }, [serverRes]);

    return null;

  };



