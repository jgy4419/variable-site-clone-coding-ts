import { styled } from "styled-components";

export const FaceBookFooterContainer = styled.footer`
    width: 100%;
    height: 7%;
    background-color: #fff;
    border-radius: 0 0 20px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
`;

export const FaceBookFooterButton = styled.button`
    width: 25%;
    height: 100%;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: #eee;
    }
`;
