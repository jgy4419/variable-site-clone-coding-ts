import styled from "styled-components";

export const Container = styled.div<{backImg: string}>`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.backImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: background-image 0.5s ease, background-size 0.5s ease;
`;

export const Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    margin: auto;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Content= styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #fff;
    width: 50%;
`;

export const Title = styled.h1`
    font-size: 50px;
`;

export const Description = styled.p`
    font-size: 18px;
    font-weight: 600;

`;

export const Button = styled.button`
    background-color: transparent;
    padding: 20px;
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: .3s;
    &:hover {
        background-color: #fff;
        color: #444;
    }
`;

export const Imgs = styled.div`
    width: 80%;
    display: flex;
    overflow: scroll;
    gap: 10px;
    margin-top: 30%;
    margin-left: 20%;
`;

export const Img = styled.img`
    width: 60%;
    border-radius: 20px;
    cursor: pointer;
    filter: brightness(50%);
    transition: .3s;
    &:hover {
        filter: brightness(100%);
    }
`;