import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #ddeff9;
`;

export const Information = styled.div`
    position: absolute;
    top: 20%;
    width: 500px;
    height: 0px;
    border-top: 4px solid #3FA2F6;
    border-right: 4px solid #3FA2F6;
    opacity: 0;
    padding-left: 40px;
    box-sizing: border-box;
    color: #3FA2F6;
    line-height: 1.2;
    transition: .7s ease .2s, height .3s;
`;

export const Img = styled.img`
    width: 500px;
    height: 500px;
    overflow: hidden;
    z-index: 100;
    filter: drop-shadow(10px 6px 6px #c3c3c3);
`;

export const Title = styled.h1`
    transition: .3s;
    font-family: Cursive;
    font-size: 70px;
    margin-top: 40px;
`;

export const SubTitle = styled.h3`
    transition: .5s;
    font-family: Cursive;
    font-size: 30px;
`;

export const Description = styled.p`
    transition: .7s;
    color: grey;
    font-size: 18px;
    margin-top: 40px;
    line-height: 1.5;
    width: 60%;
    font-weight: 600;
`;

export const Inner = styled.div`
    position: relative;
    margin: 20% auto;
    height: 500px;
    display: flex;
    align-items: center;
    &:hover {
        ${Information} {
            height: 350px;
            transform: translateX(70%);
            transition: .5s, height .7s ease .2s;
            opacity: 1;
        }
    }
`;