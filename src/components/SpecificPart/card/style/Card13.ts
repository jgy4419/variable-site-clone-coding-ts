import styled from 'styled-components';

export const Card13Container = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
    background-color: #333;
`;

export const Card13Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
`;

export const Card13BlankContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transition: .3s;
`;

export const Card13Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: .3s;
`;

export const Card13ContentImage = styled.img`
    width: 100%;
    box-shadow: 5px -1px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const Card13ContentName = styled.h1`
    font-size: 18px;
    font-weight: 900;
`;

export const Card13ContentLocal = styled.p`
    font-weight: 700;
    color: grey;
`;

export const Card13Contents = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    margin: auto;
    &:hover {
        ${Card13BlankContent} {
            &:nth-child(2) { 
                transform: rotate(15deg);
            }
            &:nth-child(1) {
                transform: rotate(10deg);
            }
        }
        ${Card13Content} {
            transform: rotate(5deg);
        }
    }
`;