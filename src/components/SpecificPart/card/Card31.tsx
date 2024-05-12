import React from 'react';
import * as S from "./style/Card31";
import jgyImg from "../../../assets/images/profile.jpeg";

const Card31 = () => {
    return (
        <S.Container>
            <S.Inner>
                <S.Content>
                    <S.TitleImg src={jgyImg}/>
                    <S.ContentDetail>
                        <S.Name>jgy_98</S.Name>
                        <S.Job>FrontEnd Developer</S.Job>
                        <S.Description>Hello, I am a front-end developer. i look forward to.</S.Description>
                        <S.Button>Contact</S.Button>
                    </S.ContentDetail>
                </S.Content>
            </S.Inner>
        </S.Container>
    );
};

export default Card31;