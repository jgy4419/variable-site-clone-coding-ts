import styled from 'styled-components';

export const Card8Container = styled.div`
    position: relative;
    width: 100vw;
    height: 30vh;
`;

export const Card8Inner = styled.div`
     position: absolute;
     width: 80%;
     height: 100%;
     inset: 0;
     margin: auto;
     display: flex;
     justify-content: space-around;
     align-items: center;
`;

export const CardImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 30px;
    // outline: 300px solid #FFC48C;
    // outline-offset: calc(300 / -2);
    // clip-path: inset(14.65% round 20px);
    transition: 0.7s;
    cursor: pointer;
    &:hover {
        border-radius: 50%;
        transition: 0.7s;
        outline: 100px solid #FFC48C;
        outline-offset: calc(300 / -2);
        // clip-path: inset(14.65% round 20px);
    }
`;