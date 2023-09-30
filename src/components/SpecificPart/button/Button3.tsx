import React from 'react';
import * as S from './style/Button3';
import arrow from "../../../asserts/images/3DImage/arrow.png";
import heart from "../../../asserts/images/3DImage/heart.png";
import save from "../../../asserts/images/3DImage/save.png";

const Button3 = () => {
    return (
        <S.Button3Container>
            <S.ButtonContent>
                <S.Button>PLAY</S.Button>
                {
                    [arrow, heart, save].map((img, index) => {
                        return (
                            <S.Button3DImg src={img} key={index}/>
                        )
                    })
                }
            </S.ButtonContent>
        </S.Button3Container>
    );
};

export default Button3;