import styled from 'styled-components';

export const Card14Container = styled.div`
    position: relative;
    width: 100vw;
    height: 70vh;
`;

export const Card14Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
`;

export const Card14Contents = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
`;

export const Card14Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: .5s;
    transform: translateY(50%);
`;

export const Card14ContentTitle = styled.h1`
    position: relative;
    z-index: 100;
    font-size: 25px;
    width: 50%;
`;

export const Card14Animation = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: translateY(60%);
    transition: .5s;
`;

export const Card14OpacityAnimation = styled.div`
    position: relative;
    opacity: 0;
    transition: 1s;
`;

export const Card14ContentDescription = styled.p`
    font-size: 18px;
    font-weight: 600;
    font-family: Times New Roman, sans-serif;
`;

export const Card14Image = styled.img`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .5s;
`;

export const Card14Content = styled.div`
    position: relative;
    width: 300px;
    height: 450px;
    color: #fff;
    overflow: hidden;
    text-align: center;
    transition: .5s;
    &:hover {
        ${Card14Animation} {
            transform: translateY(0%);
            transition: .7s;
        }
        ${Card14OpacityAnimation} {
            opacity: 1;
        }
        ${Card14Image} {
            transform: scale(1.2);
        }
        ${Card14Back} {
            transform: translateY(0%);
        }

    }
`;

export const Card14ContentButton = styled.button`
    width: 150px;
    height: 40px;
    background-color: transparent;
    color: #fff;
    border: 0;
    transition: .3s;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 30px;
    border: 1px solid #fff;
    &:hover{
        background-color: #fff;
        color: #333;
    }
`;