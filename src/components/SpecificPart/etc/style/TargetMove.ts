import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Buttons = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button<{backgroundColor: string}>`
    width: 100%;
    border: 0;
    background-color: ${props => props.backgroundColor};
    padding: 20px;
    color: #fff;
    cursor: pointer;
    transition: .3s;
    font-weight: 600;
    &:hover {
        background-color: #eee;
        color: #444;
    }
`;

export const Boxs = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Box = styled.article<{backgroundColor: string}>`
    background-color: ${props => props.backgroundColor};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: 700;
    color: #fff;
`;