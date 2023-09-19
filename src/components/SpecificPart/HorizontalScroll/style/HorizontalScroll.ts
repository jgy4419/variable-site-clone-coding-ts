import styled from 'styled-components';

export const HorizontalScrollContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    color: #333;
`;

export const HorizontalScrollInner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
`;

export const HorizontalScrollSection1 = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HorizontalScrollSection1Title = styled.h1`
    width: 100%;
    text-align: left;
    font-size: 60px;
`;

export const HorizontalScrollSection1Description = styled.p`
    width: 100%;
    text-align: right;
    font-weight: 600;
`;

export const HorizontalScrollSection2 = styled.section`
    position: relative;
    width: 100%;
    height: 4000px;
    background-color: #eee;
`;

export const HorizontalScrollSection2Inner = styled.div`
        position: sticky;
        display: flex;
        align-items: center;
        top: 0;
        width: 90vw;
        height: 100vh;
        margin: auto;
`;

export const HorizontalScrollItem = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    height: 250px;
`;