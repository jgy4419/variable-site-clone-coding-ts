import React, {useState} from 'react';
import * as S from './style/Card6';

const Card6 = () => {
    const [cardContent, setCardContent] = useState({
        subTitle: 'CATEGORY',
        mainTitle: 'Example Card Heading',
        image: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFC0AMXNoBOA22Rom9E2FrpnExHdRGJr8OXLO9AqnO&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3E6uKOY_m_ZMS4c1TJYZeEMmJccCOip08u2XoNcWTJaE6Opm3ZKgSdO726FiuYbEFD4&usqp=CAU',
            'https://img.freepik.com/free-vector/gradient-pastel-sky-background_52683-60514.jpg'
        ]
    });

    return (
        <S.Card6Container>
            <S.Card6Inner>
                {/* <Cards/> */}
            {
                cardContent.image.map((item, index) => {
                    return (
                        <S.Card6Contents key={index} backImage={item}>
                            <S.ContentBackImage backImage={item}/>
                            <S.ContentSubTitle>{cardContent.subTitle}</S.ContentSubTitle>
                            <S.ContentMainTitle>{cardContent.mainTitle}</S.ContentMainTitle>
                        </S.Card6Contents>
                    )
                })   
            }
            </S.Card6Inner>
        </S.Card6Container>
    );
};

export default Card6;