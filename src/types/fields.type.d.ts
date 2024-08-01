
interface FieldConfig {
    type:FieldType;
    name:string;
    label:string;
    hide?:boolean
    defaultValue?:any;
    joiSchema:Schema;
    typeOptions?: SelectFieldOptions | TextFieldOptions | PhoneFieldOptions | MultiSelectFieldOptions | CheckBoxFieldOptions | RangeFieldOptions | DateRangeFieldOptions
  }
  
  
  interface FieldTypeProps {
    fieldConfig:FieldConfig
    onBlur:()=>void
    onFocuse:()=>void
    onFieldChange:(name:string,value:any)=>void;
    colorState:ColorState
    isActive:boolean
  }
  
  
  interface FieldProps {
    fieldConfig:FieldConfig
    serverRes?: ApiResponse | null
    submitted:boolean
    onChange:(name:string,value:any,valid:boolean)=>void;
    
  }


  interface FormProps {
    fields: FieldConfig[];
    serverRes?: ApiResponse | null
    submitted:boolean
    onChange:(name:string,value:any,valid:boolean)=>void;
    title?: string;
    align?:'flex-start'| 'flex-end'| 'center'
    subTitle?:any;
    showMessageBox?:boolean
  }
  