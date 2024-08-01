import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const params:MapObject<string> = {};

  queryParams.forEach((value:string, key:string) => {
    params[key] = value;
  });

  return params;
};
