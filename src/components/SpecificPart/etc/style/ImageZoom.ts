import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Image = styled.img`
    width: 30%;
    height: 30%;
`;

export const ZoomImage = styled.div`
    width: 30%;
    height: 30%;
    border: 1px solid #333;s
    
`;

export const Overlay = styled.div`
`;

