import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 70vh;
    background-color: #444;
`;

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: 400px;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
`;

export const ContentImg = styled.img`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    transition: .5s;
    opacity: .5;
`;

export const Title = styled.h2`
    transform: translateX(-100%);
    transition: .5s;
    padding: 30px;
`;

export const SnsList = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 5px;
    left: 5%;
    transition: .5s;
    transform: translateX(-200%);
    bottom: 5%;
`;

export const SnsItem = styled.li`
    color: #e3e3e3;
    cursor: pointer;
    transition: .5s;
    &:hover {
        color: #fff;
    }
`;

export const ContentInner = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    color: #fff;
    &:hover {
        ${Title} {
            transform: translateX(0%);
        }
        ${SnsList} {
            transform: translateX(0%);
        }   
        ${ContentImg} {
            transform: scale(1.5) translate(50px);
        }
    }
`;