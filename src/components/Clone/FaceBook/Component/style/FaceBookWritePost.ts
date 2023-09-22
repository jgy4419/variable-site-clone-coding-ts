import { styled } from "styled-components";

export const FaceBookWritePostContainer = styled.section`
    position: relative;
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
`;

export const FaceBookWritePostInner = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    gap: 10px;
    justify-content: center;
`;

export const FaceBookUserImage = styled.img`
    border-radius: 50%;
    padding: 3px;
    box-sizing: border-box;
`;

export const FaceBookUserWriteSpace = styled.textarea`
    width: 100%;
    resize: none;
    border: 0;
    outline: none;
    padding: 5px;
    font-size: 12px;
    font-weight: 600;
`;

export const FaceBookWritePostModes = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
`;

export const FaceBookWritePostMode = styled.button`
    background-color: #fff;
    border: 0;
    width: 35%;
    height: 100%;
    border: 1px solid #eee;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: #e3e3e3;
    }
`;

export const FaceBookWriteIconTitle = styled.span`
    font-size: 12px;
    margin-left: 10px;
    color: grey;
    font-weight: 600;
`;