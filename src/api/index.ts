import axios, { AxiosInstance, AxiosRequestConfig,AxiosResponse } from 'axios';






// Create a centralized Axios instance
const apiInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT, // Specify your base URL
    withCredentials :true
    // You can add other default configurations here
});

enum Method {
    get = "GET",
    post = "POST"
}



export const RequestConfigs:MapObject<RequestConfig>=  {
    createLead: {
        url: "public/create-lead",
        method: Method.post
    },
    createOrder: {
        url: "public/create-order",
        method: Method.post
    },
    geo: {
        url: "public/geo",
        method: Method.get
    },
  
   
}







export async function apiCall(
    { requestType, data, params, secondTry }: ApiRequest,
    setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<ApiResponse | null> {
    const { method, url } = requestType;
    if(method===Method.get){
        params={...params,...data}
    }
   
    let serverRespond: ApiResponse | null = null;

    try {
        setGlobalLoading(true);
        const config: AxiosRequestConfig = { method, data, params };
        const response = await apiInstance.request<ApiResponse>({ url, ...config });
        serverRespond = response.data as ApiResponse;    

    } catch (error: any) {

        serverRespond = error.response?.data as ApiResponse;
        
        
    }
    setGlobalLoading(false);
    return serverRespond;
}
