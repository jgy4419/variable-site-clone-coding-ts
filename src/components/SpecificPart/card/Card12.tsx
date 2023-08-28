import React, { useState } from 'react';
import * as S from './style/Card12';
import jgyImage from '../../../asserts/images/jgy_painting.png';

const Card12 = () => {
    const [content, setContent] = useState({
        img: [jgyImage],
        title: 'Jeong_kue_young'
    });
    const [snsButton, setSnsButton] = useState([
        'instagram',
        'twitter',
        'facebook',
        'kakaotalk'
    ]);
    return (
        <S.Card12Container>
            <S.Card12Inner>
                <S.Card12Content>
                    <S.Card12ContentTitle>{content.title}</S.Card12ContentTitle>
                    <S.Card12ContentImage src={jgyImage}/>
                    <S.Card12Buttons>
                        {
                            snsButton.map((sns, index) => {
                                return (
                                    <S.Card12Button key={index}>
                                        {sns}
                                    </S.Card12Button>
                                )
                            })
                        }
                    </S.Card12Buttons>
                </S.Card12Content>
            </S.Card12Inner>
        </S.Card12Container>
    );
};

export default Card12;