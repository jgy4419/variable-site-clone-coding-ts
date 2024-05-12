import React from 'react';
import * as S from "./style/Input2";

const Input2 = () => {
    return (
        <S.Container>
            {/* <S.Input type="text" /> */}
            <S.Inner>
                <S.Form>
                    <S.NameContain>
                        <S.Name>USERNAME</S.Name>
                        <S.NameInput placeholder="Ex. jgy_98" type="text"/>
                    </S.NameContain>
                    <S.JobChoiceContain>
                        <S.JobChoice>WHO ARE YOU?</S.JobChoice>
                        <S.JobButtons>
                            {
                                ["Developer", "Dessigner"].map((job, index) => {
                                    return (
                                        <S.JobButton key={index}>{job}</S.JobButton>
                                    )
                                })
                            }
                        </S.JobButtons>
                    </S.JobChoiceContain>
                    <S.EmailContain>
                        <S.Email>EMAIL</S.Email>
                        <S.EmailInput placeholder="Ex. jgy_98@naver.com" type="email"/>
                    </S.EmailContain>
                    <S.PasswordContain>
                        <S.PassWord>PASSWORD</S.PassWord>
                        <S.PasswordInput placeholder="6자리 이상 입력해주세요" type="password"/>
                    </S.PasswordContain>
                    <S.SubmitButton>SUBMIT</S.SubmitButton>
                </S.Form>
            </S.Inner>
        </S.Container>
    );
};

export default Input2;