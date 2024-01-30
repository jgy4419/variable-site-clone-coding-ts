import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000;
`;

export const Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    margin: auto;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    & > *:not(:first-child) {
        /* Your styles for children except the first child here */
        transform: translate(-10px);
    }
`;

export const Content = styled.div`
    background-color: #333;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    box-shadow: -10px 5px 20px 3px rgb(21 20 20);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 200px;
    transition: .3s;
    cursor: pointer;
    &:hover {
        transform: translateX(-30px) rotate(5deg) scale(1.2);
    }
`;

export const TopTitleContain = styled.div`

`;

export const ContentTop = styled.div`

`;

export const Published = styled.span`
    color: #e3e3e3;
`;

export const Date = styled.span`
    color: grey;
    margin-left: 10px;
`;

export const Title = styled.h1`
    margin-top: 5px;
`;

export const ContentBottom = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Profile = styled.img`
    width: 30px;
    border-radius: 50%;
`;

export const Name = styled.span`
`;