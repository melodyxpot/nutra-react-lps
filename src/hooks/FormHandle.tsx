import { useState } from "react";
import { apiCall } from "../api";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";
import { useTagHandler } from "./TagManagerHandle";


interface FormHandlingProps{
  requestType:RequestConfig;
  fieldsConfig?:FieldConfig[];
  data?:object;
  params?:object;
  navOnSuccess?:string | null;
}

function removeProperty(obj:any, propToRemove:string) {
  // Destructure the property to remove and gather the rest properties into `rest`
  const { [propToRemove]: _, ...rest } = obj;
  // Return the new object without the specified property
  return rest;
}

export const useFormHandling = ({requestType,fieldsConfig,data={},params={},navOnSuccess=null}:FormHandlingProps) => {
  const { setLoading } = useLoader()
  const [submitted,setSubmitted] = useState<boolean>(false)
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});
  const [serverRes, setServerRes] = useState<ApiResponse | null>(null);

  const handleInputChange = (name: string, value: any, valid: boolean) => {
    
    if(value==="" || value===null){
      setFormValues((prevForm) => (removeProperty(prevForm,name)));
    } else {
      setFormValues((prevForm) => ({
        ...prevForm,
        [name]: value
    }));
    }
      
  };

const validateForm = ()=>{
    const isValid = (fieldConfig:FieldConfig,value: any) => {
      const res = fieldConfig.joiSchema.validate(value);
      return !res.error
    };

    let valid = true
    if(fieldsConfig){
      for(let i in fieldsConfig){
        const fieldConfig = fieldsConfig[i]
        valid = isValid(fieldConfig,formValues[fieldConfig.name])
        if(!valid){
          break;
        }
      }
    }
    

    return valid
    
  }

  const handleClick = async (event?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event?.preventDefault()
    setSubmitted(true)
    
    if ( !validateForm()) return;
    const responseData = await apiCall({ requestType, data:{...formValues,...data},params:params }, setLoading);
    setServerRes(responseData);
    
    if(responseData?.succeeded && navOnSuccess)
        navigate(navOnSuccess)
  };

  return { handleInputChange, handleClick, serverRes,formValues,submitted };
};
