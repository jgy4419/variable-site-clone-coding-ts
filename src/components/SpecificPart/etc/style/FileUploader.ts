import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const Inner = styled.div`
    position: absolute;
    width: 70%;
    height: 100%;
    inset: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const FileInput = styled.input`
    display: none;
`;

export const Label = styled.label`
    width: 80%;
    height: 50%;
    border: 5px dashed #e3e3e3;  
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    font-weight: 700;
    color: grey;
    cursor: pointer;
    transition: .3s;
    &:hover {
        color: #333;
        border: 5px dashed #333;
    }
`;

export const ImgPreview = styled.div`
    width: 20%;
    height: 20%;
    border: 4px solid #333;
    border-radius: 10px;
`;