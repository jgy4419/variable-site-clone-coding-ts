import styled from 'styled-components';

export const AccordionContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 60vh;
    color: #333;
`;

export const AccordionInner = styled.div`
    posiotion: absolute;
    margin: auto;
    width: 60%;
    height: 100%;
    inset: 0;
`;

export const Accordions = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
`;

export const Accordion = styled.div<{accordionState: boolean}>`
    display: flex;
    border: 2px solid #e3e3e3;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    height: ${props => props.accordionState === true ? '150px' : '70px'};
    transition: .5s;
`;

export const AccordionContent = styled.div`

`;

export const AccordionTitle = styled.h2`
`;

export const AccordionDescription = styled.p<{accordionState: boolean}>`
    opacity: ${props => props.accordionState === true ? '1' : '0'};
    margin-top: 30px;
    color: grey;
    font-weight: 600;
    transition: .5s;
`;

export const AccordionIcon = styled.p`
    font-size: 25px;
    font-weight: 700;
`;
