import styled from "styled-components";

export const FaceBookContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #e3e3e3;
    ::-webkit-scrollbar {
        display: none;  
    }
`;

export const FaceBookInner = styled.div`
    position: absolute;
    inset: 0;
    margin: auto;
    width: 400px;
    height: 850px;
    border-radius: 30px;
    background-color: #eee;
`;