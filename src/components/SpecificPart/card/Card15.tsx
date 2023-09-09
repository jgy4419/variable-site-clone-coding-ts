import React, {useState} from 'react';
import * as S from './style/Card15';
import jgyImage from '../../../asserts/images/jgy_painting.png';

const Card15 = () => {
    const [content, setContent] = useState({
        name: 'JGY',
        description: "I'm front-end developer.",
        img: jgyImage
    });
    return (
        <S.Card15Container>
            <S.Card15Inner>
                <S.Card15Content>
                    <S.Card15ContentImage width={250} src={content.img}/>
                    <S.Card15ContentName>{content.name}</S.Card15ContentName>
                    <S.Card15ContentDescription>{content.description}</S.Card15ContentDescription>
                </S.Card15Content>
            </S.Card15Inner>
        </S.Card15Container>
    );
};

export default Card15;