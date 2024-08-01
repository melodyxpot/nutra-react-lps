import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/v1");
  }, [navigate]);

  return null;
};
