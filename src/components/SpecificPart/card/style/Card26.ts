import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: grey;
`;

export const Inner = styled.div<{contentState: boolean}>`
    position: absolute;
    width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    transform: ${props => props.contentState === true ? "rotateX(180deg)" : "rotateX(0deg)"};
`;

export const FrontContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
`;

export const FrontContainerLeftImg = styled.img`
    margin-top: 30%;
`;

export const FrontContainerRight = styled.div`
`;

export const FrontTitle = styled.h1`
    margin-left: 10%;
    width: 60%;
    font-size: 40px;
`;

export const FrontContainerCardImg = styled.img`
    margin-left: -10%;

`;

export const BackContainer = styled.div`
    width: 100%;
    height: 80%;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateX(180deg);
`;

export const BackContainerLeft = styled.div`
    width: 30%;
`;

export const BackTitle = styled.h1`
    font-size: 40px;
`;

export const BackDescription = styled.div`
    margin-top: 10px;
    font-size: 18px;
    color: grey;
`;

export const BackRightImg = styled.img`
    transform: translateX(60px);
`;

export const ContentStateButton = styled.button<{contentState: boolean}>`
    position: absolute;
    z-index: 10;
    right: 5%;
    bottom: ${props => props.contentState === true ? "5%" : "15%"};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 30px;
    font-weight: 700;
    border: 0;
    background-color: #333;
    color: #fff;
    cursor: pointer;
`;