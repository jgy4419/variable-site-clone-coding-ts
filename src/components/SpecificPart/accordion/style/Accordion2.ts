import styled from 'styled-components';

export const Accordian2Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000;
`;

export const Accordian2Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const Accordian2Contents = styled.div`
    display: flex;
    width: 100%;
    height: 1500px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ContentImage = styled.img`
    width: 100%;
    height: 100%;
    margin: auto;
    transition: .3s;
    
`;

export const ContentInner = styled.div`
    position: absolute;
    top: 0;
    color: #fff;
    transition: .5s;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: translateX(100%);
    opacity: 0;
`;

export const ContentTitle = styled.h1`
    margin-left: -50px;
    font-size: 80px;
`;

export const ContentColor = styled.p`

`;

export const ContentDescription = styled.p`
`;

export const Accordian2Content = styled.div`
    position: relative;
    width: 100%;
    &:hover {
        ${ContentImage} {
            transform: translateX(-120px);
        }
        ${ContentInner} {
            z-index: 100;
            opacity: 1;
            transform: translateX(50%);
        }
    }
`;