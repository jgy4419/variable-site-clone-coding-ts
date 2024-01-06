import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #333;
`;

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MenuContainer = styled.div`
    position: relative;
    z-index: 100;
    width: 500px;
    height: 500px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const MainMenu = styled.div`
    width: 60%;
    height: 10%;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50%;
    border-radius: 10px;
`;

export const MenuIconText = styled.div`
    display: flex;
    gap: 10px;
`;

export const MenuTitle = styled.h4`
    font-weight: 400;
`;

export const MainMenuInner = styled.ul<{menuState: boolean}>`
    transition: .3s;
    transform: ${({menuState}) => menuState === true ? "translateY(0%)" : "translateY(-200%)"};
    opacity: ${({menuState}) => menuState === true ? "1" : "0"};
    transition-delay: .1s;
    transition-property: opacity;
    width: 250px;
    margin-top: 20px;
    display: inline-flex;
    flex-direction: column;
    gap: 20px;
`;

export const MenuConnected = styled.span`
    margin: -20px auto;
    width: 1px;
    height: 25px;
    background-color: #e3e3e3;
`;

export const MenuList = styled.li`
    padding: 10px;
    font-size: 12px;
    color: grey;
    transition: .3s;
    cursor: pointer;
    border-radius: 10px;
    background-color: #eee;
    text-align: center;
    font-weight: 700;
    &:hover {
        background-color: #e3e3e3;
        color: #333;
    }
`;