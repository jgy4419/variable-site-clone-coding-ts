import styled, { keyframes } from 'styled-components';

const ColorContainerMove = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(0px);
    }
`;

const ColorContainerEnd = keyframes`
    0% {
        transform: translateY(-50px);
    }
    // 50% {
    //     transform: translateY(-50px);
    // }
    100% {
        transform: translateY(0px);
    }
`;

export const ColorChoiceContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const ColorChoiceInner = styled.div`
    position: absolute;
    width: 70%;
    height: 80%;
    inset: 0;
    margin: auto;
    background-color: #eee;
`;

export const Colors = styled.div`
    position: relative;
    top: -50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Color = styled.div<{color: string, top: number}>`
    position: absolute;
    cursor: pointer;
    top: ${props => props.top}px;
    background-color: ${props => props.color};
    box-shadow: 3px -2px 10px 3px rgba(0, 0, 0, 0.5);
    color: #fff;
    font-weight: 700;
    width: 500px;
    height: 150px;
    border-radius: 100px;
    padding: 3%;
    box-sizing: border-box;
    z-index: 1;
    transition: .2s;
    animation: ${ColorContainerEnd} .5s;
    &:hover {
        z-index: 10;
        animation: ${ColorContainerMove} .7s;
    }
`;