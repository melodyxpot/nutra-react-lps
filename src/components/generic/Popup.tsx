import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDeviceType } from '../../context/DeviceContext';

interface PopupProps {
    isOpen: boolean;
    contentUrl: string;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, contentUrl, onClose }) => {
    const [content, setContent] = useState<string>('');
    const {isMobile} = useDeviceType()

    useEffect(() => {
        if (isOpen && contentUrl) {
            fetch(contentUrl)
                .then(response => response.text())
                .then(data => setContent(data))
                .catch(error => console.error('Error loading content:', error));
        }
    }, [isOpen, contentUrl]);

    if (!isOpen) {
        return null;
    }

    return (
        <Overlay onClick={onClose}>
            <Content $isMobile={isMobile} onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                <ContentArea dangerouslySetInnerHTML={{ __html: content }} />
            </Content>
        </Overlay>
    );
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    box-sizing: content-box;
`;

const Content = styled.div<{$isMobile:boolean}>`
    background: #fff;
    box-sizing: content-box;
    padding: 20px;
    border-radius: ${props=>props.$isMobile?"0":"8px"};
    max-width: 600px;
    width: 100%;
    
    height: ${props=>props.$isMobile?"95%":"80%"};
    position: relative;
    overflow: hidden;
`;

const ContentArea = styled.div`
    overflow-y: auto;
    height: 100%;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
`;

export default Popup;
