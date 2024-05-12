import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #401F71;
`;

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleImg = styled.img`
    width: 50%;
    height: 80%;
    object-fit: cover;
    border-radius: 30px;
    margin-left: -50px;
`;

export const ContentDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Name = styled.h1`
    font-size: 40px;
`;

export const Job = styled.h2`
    font-size: 20px;
    color: #eee;
`;

export const Description = styled.p`
    width: 80%;
    font-size: 16px;
    color: #e3e3e3;
`;

export const Button = styled.button`
    padding: 15px;
    width: 200px;
    border-radius: 30px;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    font-family: "Comic Sans MS", cursive;
`;

export const Content = styled.div`
    width: 50%;
    height: 600px;
    background-color: #BE7B72;
    border-radius: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 40px;
    font-family: "Comic Sans MS", cursive;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        ${TitleImg} {
            width: 80%;
            margin-left: 0;
            margin-top: -20px;
            height: 40%;
        }
        ${ContentDetail} {
            text-align: center;
        }
        ${Description} {
            width: 70%;
            margin: auto;
        }
        ${Button} {
            margin: 20px auto;
        }
    }
    @media screen and (max-width: 900px) {
        height: 500px;
        ${TitleImg} {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin-top: -70px;
        }
        ${Name} {
            font-size: 30px;
        }
        ${Job} {
            font-size: 23px;
        }
        ${Description} {
            font-size: 16px;
        }
    }
`;