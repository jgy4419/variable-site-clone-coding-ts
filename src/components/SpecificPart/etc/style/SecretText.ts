import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
`;

export const SecretText = styled.span`
    letter-spacing: 10px;
    font-size: 80px;
    color: #444;
    scale: .8;
    text-shadow: 0 0 5px rgba(0,0,0,0.5);
    filter: blur(10px);
    transition: filter .2s;
    &:hover { 
        filter: blur(0px); 
        scale: 1;
    }
`;

