import React, {useState} from 'react';
import * as S from './style/Card4';

const Card4 = () => {
    const [card4Content, setCard4Content] = useState({
        title: ['Card1', 'Card2', 'Card3', 'Card4'],
        subTitle: ['This is subTitle'],
        backRoundColor: ['orange', 'red', 'green', 'blue']
    });
    return (
        <S.Card4Container>
            <S.Card4Inner>
                {
                    card4Content.title.map((title, index) => {
                        return (
                            <S.Card4Content key={index}>
                                <S.BackRoundColor style={{backgroundColor: card4Content.backRoundColor[index]}}/>
                                <S.ContentDetail>
                                    <S.ContentTitle>{title}</S.ContentTitle>
                                    <S.ContentSubTitle>{card4Content.subTitle}</S.ContentSubTitle>
                                </S.ContentDetail>
                            </S.Card4Content>
                        )
                    })
                }
            </S.Card4Inner>
        </S.Card4Container>
    );
};

export default Card4;