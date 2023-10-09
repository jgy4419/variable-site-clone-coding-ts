import styled from "styled-components";

export const LoginAndJoinContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const LoginAndJoinInner = styled.div`
    position: absolute;
    inset: 0;
    margin: auto;
    width: 60%;
    height: 80%;
    transition: .5s;
    transform: translateY(120%);
`;

export const LoginContainer = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const LoginImgInner = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
`;

export const LoginImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const DarkBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`;

export const LoginImgContent = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`;

export const LoginImgTitle = styled.h1`
    margin-top: 50px;
    font-size: 40px;
`;

export const LoginImgDescription = styled.p`
    margin-top: 10px;
    width: 80%;
    text-align: center;
`;

export const LoginImgButton = styled.button`
    margin-top: 70%;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 30px;
    font-size: 20px;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: #fff;
        color: #333;
    }
`;

export const LoginContent = styled.article`
    position: absolute;
    width: 35%;
    height: 80%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const LoginTitle = styled.h1`
    font-size: 30px;
    font-weight: 900;
`;

export const LoginEmail = styled.h2`
    color: lightgrey;
    font-size: 14px;
`;

export const LoginEmailInput = styled.input`
    background-color: #fff;
    margin-top: -50px;
    border-bottom: 2px solid #eee;
    width: 100%;
    color: #333;
    font-size: 18px;
    font-weight: 600;
    outline: none;
    text-align: center;
`;

export const LoginPassword = styled.h2`
    color: lightgrey;
    font-size: 14px;
`;

export const LoginPasswordInput = styled.input`
    background-color: #fff;
    margin-top: -50px;
    border-bottom: 2px solid #eee;
    width: 100%;
    color: #333;
    font-size: 18px;
    -webkit-appearance: none;
    font-weight: 600;
    outline: none;
    text-align: center;
`;

export const ForgetPasswordButton = styled.button`
    border: 0;
    margin-top: -20px;
    background-color: #fff;
    color: lightgrey;
    font-size: 18px;
    font-weight: 700;
    transition: .3s;
    cursor: pointer;
    &:hover {
        color: #333;
    }
`;

export const LoginSignInButton = styled.button`
    border: 0;
    width: 100%;
    border-radius: 30px;
    border: 2px solid #26577C;
    background-color: #26577C;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    padding: 15px 10px;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: #fff;
        color: #26577C;
        border: 2px solid #26577C;
    }
`;

// join 
export const JoinContainer = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const JoinImgInner = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
`;

export const JoinImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const JoinImgContent = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`;

export const JoinImgTitle = styled.h1`
    margin-top: 50px;
    font-size: 40px;
`;

export const JoinImgDescription = styled.p`
    margin-top: 10px;
    width: 80%;
    text-align: center;
`;

export const JoinImgButton = styled.button`
    margin-top: 70%;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 30px;
    font-size: 20px;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: #fff;
        color: #333;
    }
`;

export const JoinContent = styled.article`
    position: absolute;
    width: 35%;
    height: 80%;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const JoinTitle = styled.h1`
    font-size: 30px;
    font-weight: 900;
`;

export const JoinName = styled.h2`
    color: lightgrey;
    font-size: 14px;
`;

export const JoinNameInput = styled.input`
    background-color: #fff;
    margin-top: -50px;
    border-bottom: 2px solid #eee;
    width: 100%;
    color: #333;
    font-size: 18px;
    font-weight: 600;
    outline: none;
    text-align: center;
`;

export const JoinEmail = styled.h2`
    color: lightgrey;
    font-size: 14px;
`;

export const JoinEmailInput = styled.input`
    background-color: #fff;
    margin-top: -50px;
    border-bottom: 2px solid #eee;
    width: 100%;
    color: #333;
    font-size: 18px;
    font-weight: 600;
    outline: none;
    text-align: center;
`;

export const JoinPassword = styled.h2`
    color: lightgrey;
    font-size: 14px;
`;

export const JoinPasswordInput = styled.input`
    background-color: #fff;
    margin-top: -50px;
    border-bottom: 2px solid #eee;
    width: 100%;
    color: #333;
    font-size: 18px;
    -webkit-appearance: none;
    font-weight: 600;
    outline: none;
    text-align: center;
`;

export const JoinSignUpButton = styled.button`
    border: 0;
    width: 100%;
    border-radius: 30px;
    border: 2px solid #451952;
    background-color: #451952;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    padding: 15px 10px;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: #fff;
        color: #451952;
        border: 2px solid #451952;
    }
`;