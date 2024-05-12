import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #eee;
`;

export const Inner  = styled.div`
    position: absolute;
    width: 70%;
    height: 70%;
    margin: auto;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.div`
    width: 70%;
    height: 100%;
    padding: 60px;
    box-sizing: border-box;
    box-shadow: -10px -10px 15px 
        rgba(255, 255, 255, 0.55),
        10px 10px 15px
        rgba(70, 70, 70, 0.12);
        border: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 20px;
    font-family: "Comic Sans MS", cursive;
    & input {
        box-shadow: inset -10px -10px 15px 
            rgba(255, 255, 255, 0.55),
            inset 10px 10px 15px
            rgba(70, 70, 70, 0.12);
        border: none;
        border-radius: 7px;
        outline: none;
        background-color: transparent;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        font-family: "Comic Sans MS", cursive;
    }
    button {
        box-shadow: -10px -10px 15px 
            rgba(255, 255, 255, 0.55),
            10px 10px 15px
            rgba(70, 70, 70, 0.12);
        border: 0;
        border-radius: 30px;
        padding: 15px;
        color: grey;
        font-weight: 700;
        cursor: pointer;
        font-family: "Comic Sans MS", cursive;
        transition: .3s;
        &:hover {
            transform: scale(1.1);
            background-color: #e3e3e3;
            color: grey;
        }
    }
    h2 { 
        font-size: 20px;
        color: #333;
        margin: 10px 0px;
    }
`;

export const NameContain = styled.div`
`;

export const Name = styled.h2`
`;

export const NameInput = styled.input`
`;

export const JobChoiceContain = styled.div`
`;

export const JobChoice = styled.h2`
`;

export const JobButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const JobButton = styled.button`
    width: 45%;
`;

export const EmailContain = styled.div`
`;

export const Email = styled.h2`
`;

export const EmailInput = styled.input`
`;

export const PasswordContain = styled.div`
`;

export const PassWord = styled.h2`
`;

export const PasswordInput = styled.input`
`;

export const SubmitButton = styled.button`
    width: 100%;
    color: #333;
`;

// export const Input = styled.input`
//     box-shadow: inset -10px -10px 15px rgba(255, 255, 255, 0.55),
//     inset 10px 10px 15px
//     rgba(70, 70, 70, 0.12);
//     border: none;
//     border-radius: 7px;
//     outline: none;
//     margin-left: 20px;
//     background-color: transparent;
//     padding: 10px;
// `;