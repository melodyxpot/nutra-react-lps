import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useLoader } from '../../context/LoaderContext';
import { Colors } from '../../theme/colors';

// Keyframe for the spinner animation
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

// Styled overlay component
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; // High z-index to cover everything else
`;

// Styled spinner component
const Spinner = styled.div`
    width: 80px;
    height: 80px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: ${Colors.primary};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;

function GlobalLoader() {
    const { loading } = useLoader();

    if (!loading) return null;

    return (
        <Overlay>
            <Spinner />
        </Overlay>
    );
}

export default GlobalLoader;
