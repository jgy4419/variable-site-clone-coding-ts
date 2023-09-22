import styled from "styled-components";

export const Card16Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #333;
`;

export const Card16Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
`;

export const Card16Contents = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
`;

export const Card16ContentBackgroundDark = styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: .3s;
`;

export const Card16ContentImage = styled.img`
    position: relative;
    z-index: 10;
    width: 100%;
    height: 200px;
`;

export const Card16ContentInner = styled.div`
    width: 100%;
    height: 200px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    transition: .3s;
    transform: translateY(-100%);
`;

export const Card16ContentDescription = styled.p`  
    font-size: 14px;
    text-align: center;
    padding: 0 25px;
    box-sizing: content-box;
`;

export const Card16ContentButton = styled.button`
    cursor: pointer;
    width: 100px;
    height: 30px;
    transition: .3s;
    border: 0;
    background-color: #eee;
    font-size: 10px;
    font-weight: 700;
    border-radius: 5px;
    &:hover {
        background-color: #333;
        color: #fff;
    }
`;

export const Card16Content = styled.div`   
    position: relative;
    width: 350px;
    display: flex;
    flex-direction: column;
    &:hover {
        ${Card16ContentInner} {
            transform: translateY(0%);
        }
        ${Card16ContentBackgroundDark} {
            opacity: 0;
        }
    }
`;
