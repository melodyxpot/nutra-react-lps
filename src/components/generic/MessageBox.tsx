import styled from "styled-components"
import { Icons } from "../../constants/images";
import { Colors } from "../../theme/colors";


interface MessageBoxProps {
    align: 'flex-start' | 'flex-end' | 'center';
    serverRes?: ApiResponse | null

}

export const MessageBox = ({ align, serverRes }: MessageBoxProps) => {
    return (
        <>
            {serverRes &&

                <MessageContainer $align={align}>
                    <Icon src={serverRes?.succeeded ? Icons.Success : Icons.Exclamation} />
                    <Text id="text">{serverRes?.message}</Text>
                </MessageContainer>

            }

        </>


    )

}

const MessageContainer = styled.div<{ $align: 'flex-start' | 'flex-end' | 'center' }>`
display:flex;
align-items: center;
justify-content: flex-start; /* This will center the items vertically and space them evenly */
background-color: ${Colors.messageBox};
padding: 10px;
align-self:${prop => prop.$align};
width: 92%;
margin-bottom: 10px;
margin-top: 0px;
border-radius: 8px;
`

const Text = styled.div`
  display:flex;
  width: 100%;
justify-content: center;
`

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

