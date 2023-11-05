import { styled } from "styled-components";

export const MenuList = styled.ul`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const MenuItem = styled.li<{selected: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: ${(props) => (props.selected ? "#7743DB" : "#333")};
    border-right: ${(props) => (props.selected ? "solid 2px #7743DB" : "solid 2px #fff")};
    font-weight: 700;
    transition: .3s;
    cursor: pointer;
    &:hover { 
        color: #7743DB;
        border-right: solid 2px #7743DB;
    }
`;