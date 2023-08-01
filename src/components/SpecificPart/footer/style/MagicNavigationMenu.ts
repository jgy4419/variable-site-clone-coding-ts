import styled, { css } from 'styled-components';

export const MagicNavigationMenuContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 30vh;
    background-color: #fff;
`;

export const MagicText = styled.h2`
    text-align: center;
`;

export const MagicNavigationMenuFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    // background-color: #eee;
`;

export const MagicNavigationMenuBall = styled.div<{location: number}>`
    // position: absolute;
    // bottom: 70px;
    // width: 70px;
    // height: 70px;
    // border-radius: 50%;
    // background-color: green;
    // transition: .5s;
`;

export const MagicNavigationMenus = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 10;
    background-color: #eee;
`;

export const MagicNavigationMenu = styled.li<{location: number, backColor: string}>`
    font-size: 30px;
    width: 30px;
    height: 30px;
    transition: .3s;
    &:nth-child(${props => props.location}) {
        transform: translateY(-60px);
        background-color: ${props => props.backColor};
        padding: 20px;
        border-radius: 50%;
        box-sizing: content-box;
    }
`;
