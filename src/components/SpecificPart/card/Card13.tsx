import React, {useState} from 'react';
import * as S from './style/Card13';
import jgyImage from '../../../asserts/images/jgy_painting.png';

const Card13 = () => {
    const blankContentCount = ['', ''];
    const [content, setContent] = useState({
        name: 'Jeong Kue Young',
        local: 'Seoul',
        image: jgyImage
    });
    return (
        <S.Card13Container>
            <S.Card13Inner>
                <S.Card13Contents>
                {
                    blankContentCount.map((_, index) => {
                        return (
                            <S.Card13BlankContent key={index}/>
                        )
                    })
                }
                <S.Card13Content>
                    <S.Card13ContentImage src={content.image}/>
                    <S.Card13ContentName>{content.name}</S.Card13ContentName>
                    <S.Card13ContentLocal>{content.local}</S.Card13ContentLocal>
                </S.Card13Content>
                </S.Card13Contents>
            </S.Card13Inner>
        </S.Card13Container>
    );
};

export default Card13;