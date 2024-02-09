import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AccordionContainer = styled.div`
    width: 800px;
    height: 100%;
    color: #444;
`;

export const AccordionTitle = styled.h1`
    font-size: 50px;
    font-weight: 500;
`;

export const AccordionLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: #333;
`;

export const Accordions = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 50px;
    gap: 30px;
`;

export const AccordionHeader = styled.div`
    width: 100%;
    height: 30px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;

export const Titles = styled.div`
`;

export const Title1 = styled.h2`
    font-weight: 500;
    transition: .3s;
`;
export const Title2 = styled.h2`
    font-weight: 500;
    transition: .3s;
`;

export const Description = styled.p<{detailState: boolean}>`
    height: ${props => props.detailState === true ? "50px" : "0px"};
    overflow: hidden;
    transition: .5s;
`;

export const Accordion = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: 1s;
    &:hover {
        color: grey;
        ${Title1} {
            transform: translateY(-30px);
        }
        ${Title2} {
            transform: translateY(-30px);
        }
        // ${Description} {
        //     height: 50px;
        // }
    }
`;

export const DetailBtn = styled.button`
    border: 0;
    padding: 5px;
    background-color: #fff;
    cursor: pointer;
    font-size: 20px;
`;