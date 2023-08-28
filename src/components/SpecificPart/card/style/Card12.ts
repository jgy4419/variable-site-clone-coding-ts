import styled from 'styled-components';

export const Card12Container = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
    background-color: #eee;
`;

export const Card12Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card12ContentTitle = styled.h1`
    z-index: 10;
    padding: 5px;
    box-sizing: border-box;
    transform: translateY(-50px);
    transition: .3s;
`;

export const Card12ContentImage = styled.img`
    width: 90%;
    margin: auto;
    transition: .3s;
`;

export const Card12Buttons = styled.div`
    display: flex;
    gap: 10px;
    transform: translateY(50px);
    transition: .3s;
`;

export const Card12Button = styled.button`
    background-color: transparent;
    border: 0;
    padding: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: .3s;
    border-radius: 20px;
    &:hover{
        background-color: #333;
        color: #fff;
    }
`;

export const Card12Content = styled.div`
    width: 400px;
    height: 500px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &:hover {
        ${Card12Buttons} {
            transform: translateY(0);
        }
        ${Card12ContentTitle} {
            transform: translateY(0);
        }
        ${Card12ContentImage} {
            transform: scale(1.2);
        }
    }
`;