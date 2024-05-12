import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #eee;
`;

export const Inner = styled.div`
    position: absolute;
    inset: 0;
    margin: auto;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
`;

export const MenuButton = styled.button`
    width: 120px;
    height: 50px;
    border-radius: 30px;
    border: 0;
    background-color: #fff;
    color: #444;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: #444;
        color: #fff;
    }
`;

export const MainMenu = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 20px;
    background-color: #fff;
    transform: translateY(180%);
`;

export const Menus = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

export const Menu = styled.li<{time: number}>`
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    background-color: transparent;
    width: 80%;
    height: 50px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: opacity transforn;
    transition-duration: ${props => props.time}s;
    &:hover {
        background-color: #333;
        color: #fff;
    }
`;

export const SubScribeMenu = styled.div`
    background-color: #fff;
    width: 400px;
    height: 200px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transform: translateY(150%);
`;

export const SubScribeMenuTitle = styled.h2`
    color: #444;
    width: 200px;
    transform: translateY(150%);
`;

export const SubScribeMenuInput = styled.input`
    width: 70%;
    padding: 15px;
    border-radius: 10px;
    border: 0;
    background-color: #eee;
    outline: none;
    font-size: 16px;
    transform: translateY(150%);
    &:focus {
        background-color: #444;
        color: #fff;
    }
`;

export const MenuContain = styled.div<{buttonState: boolean}>`
    height: 700px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow: hidden;
    ${MainMenu} {
        transform: translateY(${props => props.buttonState === false ? "180%" : "0%"});
        transition: .5s;
    }
    ${Menus} {
        transform: translateY(${props => props.buttonState === false ? "180%" : "0%"});
        transition-delay: 0s;
        // transition-duration: .5s;
    }
    ${Menu} {
        transition-delay: ${props => props.buttonState === false ? "0s" : ".3s"};
        transform: translateY(${props => props.buttonState === false ? "300%" : "0%"});
        // transform: translateY(300%);
        opacity: ${props => props.buttonState === false ? 0 : 1};
    }
    // ${SubScribeMenu} {
    //     transform: translateY(${props => props.buttonState === false ? "180%" : "0%"});
    // }
    // ${SubScribeMenuTitle} {
    //     transform: translateY(${props => props.buttonState === false ? "180%" : "0%"});
    // }
    // ${SubScribeMenuInput} {
    //     transform: translateY(${props => props.buttonState === false ? "180%" : "0%"});
    // }
`;