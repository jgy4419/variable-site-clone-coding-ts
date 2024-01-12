import styled, { keyframes } from 'styled-components';

const bounsAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #363062;
`;

export const DecorationContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Decoration = styled.div<
        {
            color: string, 
            size: number,
            top: number,
            left: number
        }>`
    top: ${props => props.top}%;
    left: ${props => props.top}%; 
    transform: translate(-${props => props.top}%, -${props => props.left}%);
    position: absolute;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${props => props.color};
    border-radius: 50%;
`;

export const Weather = styled.div`
    position: absolute;
    width: 500px;
    height: 600px;    
    inset: 0;
    margin: auto;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #fff;
`;

export const Title = styled.h2`
    font-size: 30px;
    letter-spacing: 5px;
`;

export const Description = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: grey;
    letter-spacing: 5px;
`;

export const Img = styled.img`
    width: 150px;
    animation: ${bounsAnimation} 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
`;

export const Degrees = styled.h1`
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2px;
`;

export const TodayDegrees = styled.div`
    display: flex;
    gap: 30px;
`;

export const MaxDegreesContain = styled.div`
    text-align: center;
`;

export const Max = styled.p`
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 1px;
`;

export const MaxDegrees = styled.p`
    letter-spacing: 1px;
`;

export const Line = styled.div`
    width: 2px;
    height: 50px;
    background-color: #fff;
`;

export const MinDegreesContain = styled.div`
    text-align: center;
`;

export const Min = styled.p`
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 20px;
`;

export const MinDegrees = styled.p`
    letter-spacing: 1px;
`;

