import { styled } from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000;
`;

export const Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    inset: 0;
    margin: auto;
`;

export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ContentIndex = styled.span`
    margin-left: -5%;
    color: hotpink;
    font-weight: 700;
`;

export const ContentInner = styled.div`
    width: 30%;
    margin-left: -12%;
    line-height: 2;
`;

export const Title = styled.h2`
`;

export const Description = styled.p`
    font-size: 15px;
    word-wrap: break-word;
`;

export const Image = styled.img`
    position: absolute;
    width: 20%;
    margin-left: 25%;
    transition: .2s;
    opacity: 0;
    transform: scale(0);
`;

export const Button = styled.button`
    width: 180px;
    height: 50px;
    font-weight: 700;
    border: 0;
    cursor: pointer;
    transition: .3s;
    border: 3px solid #fff;
    background-color: #fff;
    &:hover {
        background-color: transparent;
        border: 3px solid #fff;
        color: #fff;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    color: #fff;
    transition: .3s;
    &:hover {
        background-color: hotpink;
        ${ContentIndex} { 
            color: #fff;
        }
        ${Image} {
            opacity: 1;
            transform: scale(1);
        }
    }
`;