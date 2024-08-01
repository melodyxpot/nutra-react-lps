interface ApiResponse {
    message:string;
    succeeded:boolean;
    errorCode?:number;
    errorDescription?:string;
    fieldName?:string;
    order?:Order;
    redirect?:string;
    campaign?:Campaign;
    client?:Client;
}

interface CartItem{
    campaignProductId:number;
    qty:number;

}
interface Client {
    device:number;
    language:string;
    ip:string;
    country:string | null;
    state:string | null;
}


interface ApiRequest{
    requestType:RequestConfig;
    data?:object;
    params?:object;
    secondTry?:boolean;
}

interface RequestConfig {
    url: string;
    method: Method;
}



interface Order {
    campaignId: number;
    affId: string;
    firstName: string;
    lastName: string;
    address1: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    emailAddress: string;
    phoneNumber: string;
    sourceValue1: string;
    sourceValue2: string;
    sourceValue3: string;
    salesUrl: string;
    ipAddress: string;
    billShipSame: boolean;
    shipFirstName: string;
    shipLastName: string;
    shipAddress1: string;
    shipCity: string;
    shipState: string;
    shipCountry: string;
    shipPostalCode: string;
    orderType: string;
    customerId: number;
    orderId: string;
    sourceId: number;
    agentUserId: number;
    customFields: any[];
    address2:string ;
    shipAddress2:string ;
    dateUpdated: string;
    orderStatus: 'COMPLETE'| 'PARTIAL'| 'DECLINED'| 'REFUNDED'| 'CANCELLED'|'COD_PENDING'

}




interface Campaign {
    lastUpdated:Date;
    campaignId:number;
    campaignName:string;
    currencySymbol:string;
    products:CampaignProduct[]
}

interface Marketing {
    affId?:string;
    c1?:string;
    c2?:string;
    c3?:string;
    c4?:string;
    c5?:string;
    lp?:string;
}

interface CampaignProduct{
    campaignProductId:number;
    productName:string;
    price:number; //need to convert from string
    shippingPrice:number; //need to convert from string
    billingCycleType:string;
    productId:number;
    productQty:number;

}




