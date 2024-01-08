import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #333;
`;

export const Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    inset: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const FilterButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export const FilterButton = styled.button<{clicked: boolean}>`
    width: 150px;
    height: 50px;
    background-color: ${props => props.clicked === true ? "grey" : "#fff"};
    color: ${props => props.clicked === true ? "#fff" : "#333"};
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    transition: .3s;
    font-weight: 700;
    &:hover { 
        background-color: gray;
        color: #fff;
    }
`;

export const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Card = styled.div<{filter: boolean}>`
    width: 20%;
    min-height: 300px;
    background-color: #fff;
    border-radius: 10px;
    border: 3px solid grey;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    jusify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    filter: ${props => props.filter === true ? "blur(5px)" : "blur(0px)"};
    transition: .3s;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 9px 9px 0px 0px;
`;

export const CardTitle = styled.h3`
    
`;

export const CardDescription = styled.p`

`;