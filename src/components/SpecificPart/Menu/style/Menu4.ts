import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 500vh;
`;

export const Inner = styled.div<{positionState: string}>`
    position: absolute;
    width: 100%;
    // height: ${props => props.positionState === "fixed" ? "100%" : "100%"};
    height: 100%;
    inset: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MenuTitle = styled.h1`
    font-size: 60px;
    margin-top: -140%;  
`;

export const Menus = styled.ul<{positionState: string}>`
    position: ${props => props.positionState};
    bottom: ${props => props.positionState === "fixed" ? 0 : "null"};
    top: ${props => props.positionState === "sticky" ? 0 : "null"};
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const Menu = styled.li`
    background-color: navy;
    width: 100%;
    padding: 20px 0;
    text-align: center;
    color: #fff;
    transition: .3s;
    &:hover {
        background-color: #eee;
        color: #444;
    }
`;