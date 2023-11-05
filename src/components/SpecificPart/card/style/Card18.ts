import { styled } from "styled-components";

export const Card18Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;  
    background-color: #333;
`;

export const Card18Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

export const Card18Image = styled.img`
    position: relative;
    z-index: 10;
    width: 30%;
    height: 50%;
    transform: translateX(50%);
    border-radius: 20px;
    transition: 1s;
`;

export const Card18ContentInner = styled.div`
    width: 50%;
    height: 70%;
    background-color: #fff;
    border-radius: 20px;
`;

export const Card18ContentBox = styled.div`
    width: 65%;
    margin-left: 35%;
    height: 100%;
    margin: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 5%;
`;

export const ContentDate = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-top: -50px;
    color: grey;
`;

export const ContentTitle = styled.h1`
    color: #26577C;
    margin-top: -30px;
`;

export const ContentDescription = styled.p`
    width: 80%;
    line-height: 1.8;
    font-weight: 600;
    font-size: 18px;
    color: grey;
`;

export const ContentButton = styled.button`
    background-color: #26577C;
    border: 0;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    font-size: 14px;
    transition: .3s;
    border: 2px solid #fff;
    cursor: pointer;
    &: hover {
        background-color: #fff;
        border: 2px solid #26577C;
        color: #26577C;
    }
`;

export const Card18Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 900px) {
        display: block;
        ${Card18Image} {
            width: 70%;
            height: 20%;
            transform: translate(23%, 50%);
        }
        ${Card18ContentInner} {
            width: 80%;
            height: 55%;
            margin: auto;

        }
        ${Card18ContentBox} {
            inset: 0;
            margin: auto;
            align-items: center;
            text-align: center;
        }
        ${ContentDate} {
            font-size: 16px;
            margin: 20px 100px;
        }
        ${ContentTitle} {
            font-size: 30px;
        }
        ${ContentDescription} {
            font-size: 14px;
        }
        ${ContentButton} {
            font-size: 12px;
            width: 100%;
        }
    }
`;