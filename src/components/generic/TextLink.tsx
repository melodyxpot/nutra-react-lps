import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { useNavigate } from "react-router-dom";

interface TextLinkProps {
  children: React.ReactNode;
  route?: string;
  onClick?:()=>void;
  fontSize?: string;
  hasLine?: boolean;
}

export const TextLink: React.FC<TextLinkProps> = ({
  route="#",
  onClick=()=>{},
  children,
  fontSize,
  hasLine,
}: TextLinkProps) => { 
  const navigate = useNavigate()
  
  
  const handleClick = () => {
    onClick()
    navigate(route) ; // Navigate to the specified route
  };

  return (
    <>
      <Text onClick={handleClick} fontSize={fontSize} $hasLine={hasLine}>
        {children}
      </Text>
    </>
  );
};

const Text = styled.a<{ fontSize?: string; $hasLine?: boolean }>`
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${Colors.primary};
  font-weight: 500;
  border-bottom: ${(props) =>
    props.$hasLine ? "1px solid " + Colors.primary : "none"};
  cursor: pointer;
  /* padding-bottom: 2px; */
`;
