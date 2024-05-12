import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #eee;
`;

export const Inner = styled.div`
    position: absolute;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div<{ state: boolean }>`
    position: relative;
    width: 700px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    overflow: hidden;
`;


export const TitleImage = styled.img<{state: boolean}>`
    border-radius: 30px;
    cursor: pointer;
    width: 500px;
    height: 500px;
    transition-delay: ${props => props.state ? "0s" : ".5s"};
    transition-duration: .5s;
    transition: transform 0.5s;
    transform: ${props => props.state ? "translateX(0%) scale(0.7)": "translateX(30%) scale(1)"};
`;

export const CloseButton = styled.p`
    position: absolute;
    top: -30px;
    right: 0;
    font-size: 20px;
    font-weight:700;
    cursor: pointer;
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #333;
`;

export const Description = styled.p`
    font-size: 16px;
    color: grey;
    font-weight: 500;
`;

export const Button = styled.button`
    border: 0;
    width: 100%;
    padding: 15px 0px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 700;
    border: 3px solid #333;
    background-color: transparent;
    cursor: pointer;
    font-family: "Comic Sans MS", cursive;
`;

export const Content = styled.div<{state: boolean}>`
    transition-delay: ${props => props.state ? ".5s" : "0s"};
    transform: translateY(${props => props.state ? "0%" : "200%"});
    transition-duration: .5s;
    position: reltaive;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;
    opacity: ${props => props.state ? "1" : "0"};
    font-family: "Comic Sans MS", cursive;
    ${Title} {
        transition-delay: ${props => props.state ? ".5s" : "0s"};
        transition-duration: .5s;
        transform: translateY(${props => props.state ? "0%" : "200%"});
    }

    ${Description} {
        transition-delay: ${props => props.state ? ".6s" : "0s"};
        transition-duration: .5s;
        transform: translateY(${props => props.state ? "0%" : "200%"});
    }

    ${Button} {
        transition-delay: ${props => props.state ? ".7s" : "0s"};
        transition-duration: .5s;
        transform: translateY(${props => props.state ? "0%" : "200%"});
    }
`;