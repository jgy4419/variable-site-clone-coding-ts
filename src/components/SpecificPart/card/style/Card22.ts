import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    transition: .3s;
    background-color: #fff;
`;

export const Inner = styled.div`
    margin: auto;
    width: 80%;
    height: 100%;
`;

export const Contents = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const Content = styled.div<{mainColor: string}>`
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: ${props => props.mainColor};
    background-color: #fff;
    border-radius: 10px;
    box-shadow: -1px 5px 10px #000;
    transition: .5s;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.mainColor};
        color: #fff;
        transform: translateY(-30px);
    }
`;

export const IconContain = styled.p`
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: 900
`;