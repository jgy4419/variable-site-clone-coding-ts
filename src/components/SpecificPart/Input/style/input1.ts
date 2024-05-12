import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
    background-color: #444;
`;

export const Inner = styled.div`
    position: absolute;
    width: 400px;
    height: 200px;
    background-color: #fff;
    inset: 0;
    margin: auto;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Title = styled.h1`
    font-size: 24px;
`;

export const InputContain = styled.div`
    position: relative;
    width: 80%;
    height: 40px;
`;

export const Input = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
`;

export const InputButton = styled.button`
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    background-color: transparent;
    border: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: grey;
`;

export const ProgressContain = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    width: 90%;
`;

export const Progress = styled.div<{color: string}>`
    background-color: ${props => props.color};
    width: 30%;
    height: 10px;
    border-radius: 10px;
`;

export const PassWordStateText = styled.p`
    font-weight: 700;
    color: grey;
`;
