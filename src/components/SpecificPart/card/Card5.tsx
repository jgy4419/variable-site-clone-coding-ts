import React, { useState } from 'react';
import * as S from './style/Card5';

const Card5 = () => {
    const [contents, setContents] = useState({
            title: ['Leafs', 'Fruits', 'Flowers'],
            description: [
                'Leafs Content Description. Leafs Content Description. Leafs Content Description.', 
                'Fruits Content Description. Fruits Content Description. Fruits Content Description.', 
                'Flowers Content Description. Flowers Content Description. Flowers Content Description.'
            ],
            button: 'Read More',
            mainColor: ['green', 'red', 'skyblue'],
            image: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFC0AMXNoBOA22Rom9E2FrpnExHdRGJr8OXLO9AqnO&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3E6uKOY_m_ZMS4c1TJYZeEMmJccCOip08u2XoNcWTJaE6Opm3ZKgSdO726FiuYbEFD4&usqp=CAU',
                'https://img.freepik.com/free-vector/gradient-pastel-sky-background_52683-60514.jpg'
            ]
        });
    return (
        <S.Card5Container>
            <S.Card5Inner>
                {
                    contents.title.map((item, index) => {
                        return (
                            <S.Card5Content key={index}>
                                <S.Card5ContentInner>
                                    <S.Card5Image src={contents.image[index]}/>
                                    <S.Card5Title mainColor={contents.mainColor[index]}>{item}</S.Card5Title>
                                    <S.Card5Description>{contents.description[index]}</S.Card5Description>
                                    <S.Card5Button mainColor={contents.mainColor[index]}>{contents.button}</S.Card5Button>
                                </S.Card5ContentInner>
                            </S.Card5Content>
                        )
                    })
                }
            </S.Card5Inner>
        </S.Card5Container>
    );
};

export default Card5;