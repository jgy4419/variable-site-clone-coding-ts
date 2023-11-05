import { styled } from "styled-components";

export const ContentContainer = styled.div`
    width: 70%;
    position: relative;
    height: 100%;
    overflow: hidden;   
`;

export const ContentInner = styled.div`
    width: 100%;
    height: 600%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #333;
`;

export const Title = styled.h1`
    font-size: 25px;
    color: #7743DB;
`;

export const Description = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

export const Image = styled.img`
    width: 200px;
`;