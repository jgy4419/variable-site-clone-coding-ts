import styled from 'styled-components';

export const Menu1Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #483d8b;
`;

export const Menu1Inner = styled.div`
    position: absolute;
    width: 70%;
    height: 70%;
    inset: 0;
    margin: auto;
    background-color: #000;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Menus = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Menu = styled.li`
    font-family: "Poppins", sans-serif;
    font-size: 50px;
    color: #fff;
    background-color: #000;
    font-weight: 900;
    cursor: pointer;
`;

export const MenuLink = styled.a<{menu: string}>`
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:before, &:after {
        // content: '' 에 ''안에 들어가므로 props로 ''안에 적용해주기
        content: '${props => props.menu}';
        position: absolute;
        left: 0;
        z-index: 1;
        transition: 0.5s;
        -webkit-text-stroke: 1px trasnparent;
    }
    &:hover {
        transition: .5s;
        color: #ffffff;
        -webkit-text-stroke: 1px #212121;
        &:before {
            transform: translate(12px, -12px);
            color: #ff1744;
            -webkit-text-stroke: 1px #212121;
        }
        &:after {
            transform: translate(24px, -24px);
            color: #4dd0e1;
            -webkit-text-stroke: 1px #212121;
        }
    }
`;