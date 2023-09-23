import styled from "styled-components";

export const Card17Container = styled.div`
    position: relative;
    width: 100vw;
    height: 80vh;
    background-color: #333;
`;

export const Card17Inner = styled.div`
    position: absolute;
    min-width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
`;

export const Card17Contents = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card17DarkBackColor = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: .3s;
`;

export const Card17ContentInner = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Card17ContentTitle = styled.h1`
    position: absolute;
    top: 10%;
    color: #fff;
    transition: .3s;
    transform: rotate(90deg);
    font-weight: 100;
    font-size: 60px;
`;

export const Card17ContentDescriptionBox = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 10px;
    color: #fff;
    opacity: 0;
    transition: .3s;
`;

export const Card17ContentDescription = styled.p`
    text-align: center;
`;

export const Card17ContentLists = styled.ul`
`;

export const Card17ContentList = styled.li`
`;

export const Card17Content = styled.div`
    position: relative;
    width: 250px;
    height: 80%;
    transition: .3s;
    overflow: hidden;
    background-size: cover;
    &:hover {
        width: 500px;
        ${Card17ContentTitle} {
            transform: rotate(0deg);
        }
        ${Card17ContentDescriptionBox} {
            opacity: 1;
        }
        ${Card17DarkBackColor} {
            opacity: 0;
        }
    }
`;