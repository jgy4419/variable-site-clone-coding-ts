import styled from 'styled-components';

export const Card11Container = styled.div`
    position: relative;
    top: 50px;
    width: 100vw;
    height: 80vh;
`;

export const Card11Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const Card11Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
`;

export const Card11ContentTitle = styled.h1`
    font-size: 60px;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: auto;
    text-align: center;
    opacity: 0;
    transition: .5s cubic-bezier(0.65, 0, 0.35, 1);
    transform: scale(1.2);
`;

export const Card11ContentImage = styled.div<{image: string}>`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    width: 45%;
    height: 50%;
    border-radius: 20px;
    transition: border-radius .5s cubic-bezier(0.65, 0, 0.35, 1);
    cursor: pointer;
    &:hover {
        border-radius: 30%;
        ${Card11ContentTitle} {
            opacity: 1;
            transform: scale(1);
        }
    }
`;