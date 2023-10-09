import { useEffect, useRef, useState } from "react";
import * as S from "./style/loginAndJoin";

interface ILoginOrJoinStateProps {
    loginOrJoinState: boolean
}


const LoginAndJoin = () => {
    const [loginOrJoinState, setLoginOrJoinState] = useState(true);
    const loginAndJoinInnerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(loginAndJoinInnerRef.current) {
            loginAndJoinInnerRef.current.style.transform = "translateY(0%)";
        }
    }, [loginOrJoinState]);
    return (
        <S.LoginAndJoinContainer>
            <S.LoginAndJoinInner ref={loginAndJoinInnerRef}>
                {
                    loginOrJoinState ? <Login loginOrJoinState={setLoginOrJoinState} loginAndJoinInnerRef={loginAndJoinInnerRef}/>
                    : <Join loginOrJoinState={setLoginOrJoinState} loginAndJoinInnerRef={loginAndJoinInnerRef}/>
                }
            </S.LoginAndJoinInner>
        </S.LoginAndJoinContainer>
    );
};

const Login = ({loginOrJoinState, loginAndJoinInnerRef}: any) => {
    const [loginContent, setLoginContent] = useState({
        title: "Welcome back,",
        buttonTitle: "SIGN IN"
    });
    const [loginImgContent, setLoginImgContent] = useState({
        title: "New here?",
        description: "Sign up and discover great amount of new opportunities!",
        img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832",
        buttonTitle: "SIGN UP"
    });

    const changedJoin = () => {
        loginAndJoinInnerRef.current.style.transform = "translateY(120%)";
        setTimeout(() => {
            loginOrJoinState((prev: boolean) => !prev)            
        }, 1000);
    }

    return (
        <S.LoginContainer>
            <S.LoginImgInner>
                <S.LoginImg src={loginImgContent.img}/>
                <S.DarkBackground/>
                <S.LoginImgContent>
                    <S.LoginImgTitle>{loginImgContent.title}</S.LoginImgTitle>
                    <S.LoginImgDescription>{loginImgContent.description}</S.LoginImgDescription>
                    <S.LoginImgButton onClick={() => changedJoin()}>{loginImgContent.buttonTitle}</S.LoginImgButton>  
                </S.LoginImgContent>
            </S.LoginImgInner>
            <S.LoginContent>
                <S.LoginTitle>{loginContent.title}</S.LoginTitle>
                <S.LoginEmail>EMAIL</S.LoginEmail>
                <S.LoginEmailInput placeholder="Email"></S.LoginEmailInput>
                <S.LoginPassword>PASSWORD</S.LoginPassword>
                <S.LoginPasswordInput type="password" placeholder="Password"></S.LoginPasswordInput>
                <S.ForgetPasswordButton>Forget password?</S.ForgetPasswordButton>
                <S.LoginSignInButton>{loginContent.buttonTitle}</S.LoginSignInButton>
            </S.LoginContent>
        </S.LoginContainer>
    )
}

const Join = ({loginOrJoinState, loginAndJoinInnerRef}: any) => {
    const [joinContent, setJoinContent] = useState({
        title: "Time to feel home,",
        buttonTitle: "SIGN UN"
    });
    const [joinImgContent, setJoinImgContent] = useState({
        title: "Ont of us?",
        description: "If you already have an account, just sign in. We've missed you!",
        img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832",
        buttonTitle: "SIGN IN"
    });

    const changedLogin = () => {
        loginAndJoinInnerRef.current.style.transform = "translateY(120%)";
        setTimeout(() => {
            loginOrJoinState((prev: boolean) => !prev)            
        }, 1000);
    }

    return (
        <S.JoinContainer>
            <S.JoinImgInner>
                <S.JoinImg src={joinImgContent.img}/>
                <S.DarkBackground/>
                <S.JoinImgContent>
                    <S.JoinImgTitle>{joinImgContent.title}</S.JoinImgTitle>
                    <S.JoinImgDescription>{joinImgContent.description}</S.JoinImgDescription>
                    <S.JoinImgButton onClick={() => changedLogin()}>{joinImgContent.buttonTitle}</S.JoinImgButton>  
                </S.JoinImgContent>
            </S.JoinImgInner>
            <S.JoinContent>
                <S.JoinTitle>{joinContent.title}</S.JoinTitle>
                <S.JoinName>EMAIL</S.JoinName>
                <S.JoinNameInput placeholder="Name"></S.JoinNameInput>
                <S.JoinEmail>EMAIL</S.JoinEmail>
                <S.JoinEmailInput placeholder="Email"></S.JoinEmailInput>
                <S.JoinPassword>PASSWORD</S.JoinPassword>
                <S.JoinPasswordInput type="password" placeholder="Password"></S.JoinPasswordInput>
                <S.JoinSignUpButton>{joinContent.buttonTitle}</S.JoinSignUpButton>
            </S.JoinContent>
        </S.JoinContainer>
    )
}

export default LoginAndJoin;