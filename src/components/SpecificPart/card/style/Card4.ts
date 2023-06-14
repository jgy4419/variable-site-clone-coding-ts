import styled from 'styled-components';

export const Card4Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const Card4Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    margin: auto;
    inset: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10%;
`;

export const BackRoundColor = styled.div`
    position: absolute;
    z-index: 1;
    border-radius: 40%;
    width: 200px;
    height: 200px;
    transform: translate(-60px, -80px);
    transition: .5s;
`;


export const Card4Content = styled.div`
    position: relative;
    margin: auto;
    width: 30%;
    height: 200px;
    background-color: #333;
    border-radius: 20px;
    color: #fff;
    overflow: hidden;
    transition: .5s;
    cursor: pointer;
    &:hover {
        ${BackRoundColor} {
            transition: .5s;
            transform: translate(0);
            border-radius: 20px;
            width: 100%;
            height: 200px;
        }
    }
`;

export const ContentDetail = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const ContentTitle = styled.h2`

`;

export const ContentSubTitle = styled.p`

`;