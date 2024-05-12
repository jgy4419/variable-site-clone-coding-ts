import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #eee;
`;

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ColorPreview = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: green;
    top: -50px;
    right: -50px;
    transition: .5s;
    z-index: 1;
`;

export const ContentTitle = styled.h1`
    z-index: 10;
    transition: .5s;
`;

export const ContentDescription = styled.p`
    width: 70%;
    z-index: 10;
    transition: .5s;
    text-align: center;
`;

export const Content = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    border-radius: 20px;
    font-family: "Comic Sans MS", cursive;
    &:hover {
        ${ColorPreview} {
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }   
        ${ContentTitle} {
            color: #fff;
        }
        ${ContentDescription} {
            color: #fff;
        }
    }
`;