import React from 'react';
import * as S from "./style/SecretText";

const SecretText = () => {
    const texts = ["S", "E", "C", "R", "E", "T", "T", "E", "X", "T"];
    return (
        <S.Container>
            {
                texts.map((text, index) => {
                    return (
                        <S.SecretText key={index}>{text}</S.SecretText>
                    )
                })
            }
        </S.Container>
    );
};

export default SecretText;