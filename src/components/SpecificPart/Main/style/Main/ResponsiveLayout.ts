import styled from 'styled-components';

export const ResponsiveLayoutContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const ResponsiveLayoutInner = styled.div`
    position: absolute;
    width: 70%;
    height: 100%;
    inset: 0;
    margin: auto;
`;

export const ResponsiveLayoutContents = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ResponsiveLayoutContent = styled.div`
    display: flex;
    width: 50%;
    box-shadow: 5px -1px 5px 2px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 30px;
`;

export const ResponsiveLayoutContentInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

export const ResponsiveLayoutContentTitle = styled.h1`
`;

export const ResponsiveLayoutContentDescription = styled.p`
    width: 80%;
    font-weight: 600;
`;

export const ResponsiveLayoutContentButton = styled.button`
    width: 30%;
    padding: 10px;
    background-color: transparent;
    border-radius: 20px;
    border: 2px solid #333;
    font-weight: 700;
    cursor: pointer;
    transition: .2s;
    &:hover {
        background-color: #333;
        color: #fff;
    }
`;

export const ResponsiveLayoutImage = styled.img`
    width: 30%;
    height: 100%;
    // border: 1px solid #333;
    border-radius: 20px;
    margin-top: -30px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;