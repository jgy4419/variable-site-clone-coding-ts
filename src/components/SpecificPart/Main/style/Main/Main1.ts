import styled from 'styled-components';

export const Main1Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000;
`

export const Main1Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const MainContent = styled.div`
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #fff;
`

export const MainText = styled.h1`
    font-size: 60px;
`

export const Line = styled.hr`
    width: 150px;
    height: 3px;
    background-color: #fff;
`

export const SubText = styled.p`
    margin-top: 20px;
    font-size: 14px;
`

export const Imgs = styled.ul`
    position: absolute;
    z-index: 1;
    display: flex;
    gap: 30px;
    &:hover > {
        &:not(:hover) {
            opacity: .5;
        }
    }
`

export const Img = styled.img`
    object-fit: cover;
    opacity: .5;
    transition: .5s;
    border-radius: 20px;
    &:nth-child(2n) {
        transform: scale(1.2);
        opacity: 1;
    }
    &:nth-child(1) {
        transform-origin: 50% 30%;
        transform: perspective(500px) rotateY(20deg) rotateX(0deg);
    }
    &:nth-child(3) {
        transform-origin: 50% 30%;
        transform: perspective(500px) rotateY(-20deg) rotateX(0deg);
    }
    &:hover {
        opacity: 1;
        transform: perspective(500px) rotateY(0deg) rotateX(0deg) scale(.8);
    }
`