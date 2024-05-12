import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    color: #333;
`;

export const Inner = styled.div`
    margin: auto;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1000px) {
        gap: 10%;
        flex-direction: column;
        justify-content: center;
    }
`;

export const ResultImageContain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const ResultImageTitle = styled.h1`
    text-align: center;
    font-size: 40px;
`;

export const ResultImage = styled.div<{choiceImg: string, scaleVal: number}>`
    width: 500px;
    height: 300px;
    background-image: url(${props => props.choiceImg});
    background-repeat: no-repeat;
    background-size: ${props => props.scaleVal}%;
    background-position: 50%;
    transition: .8s;
`;

export const ChoiceImageContain = styled.div`
    width: 500px;
    // height: 70%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow: scroll;
    @media (max-width: 1000px) {
        flex-direction: row;
    }
`;

export const Image = styled.img`
    margin: auto;
    width: 40%;
    height: 80%;
    border-radius: 20px;
    opacity: .5;
    transition: .3s;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
        opacity: 1;
    }
    @media (max-width: 1000px) {
        width: 50%;
        flex-direction: row;
    }
`;