import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #000;
`;

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ProfileImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    // transition-delay 라는 속성도 있음.
    transition: .5s;
    transform: translateY(100px);
`;

export const DarkBackColor = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px 20px 0px 0px;
    opacity: 0;
    transition: .5s;
    transform: translateY(100px);
`;

export const InfoButtons = styled.div`
    position: absolute;
    z-index: 100;    
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    gap: 20px;
    opacity: 0;
    transition: 0.5s;
`;

export const Content = styled.div`
    position: relative;
    width: 500px;
    height: 600px;
    border-radius: 20px;
    transition: .3s;
    margin-top: -100px;
    &:hover {
        ${ProfileImg} {
            transform: translateY(0px);
            border-radius: 20px 20px 0px 0px;
        }
        ${DarkBackColor} {
            opacity: 1;
            transform: translateY(0px);
        }
        ${InfoButtons} {
            opacity: 1;
        }
    }
`;


export const Information = styled.div`
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 0px 0px 20px 20px
`;

export const IconContain = styled.p`
    transition: transform 1s;
`;

export const InfoButton = styled.button`
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    transition: background-color .3s;
    cursor: pointer;
    border: 2px solid #fff;
    &:hover {
        background-color: #000;
        color: #fff;
        ${IconContain} {
            transform: rotateY(360deg);
        }
    }
`;

export const Name = styled.h3`
    font-size: 30px;
`;

export const Description = styled.p`
    font-size: 16px;
    color: grey;
`;