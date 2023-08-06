import React, { useState } from 'react';
import * as S from './style/Accordion2';

// Expandable Horizantal Accordian
const Accordion2 = () => {
    const [content, setContent] = useState({
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
        <S.Accordian2Container>
            <S.Accordian2Inner>
                <S.Accordian2Contents>
                    {
                        content.image.map((img, index) => {
                            return (
                                <S.Accordian2Content key={index}>
                                    <S.ContentImage src={img}/>
                                    <S.ContentInner>
                                        <S.ContentTitle>{content.title[index]}</S.ContentTitle>
                                        <S.ContentColor>{content.mainColor[index]}</S.ContentColor>
                                        <S.ContentDescription>{content.description[index]}</S.ContentDescription>
                                    </S.ContentInner>
                                </S.Accordian2Content>
                            )
                        })
                    }
                </S.Accordian2Contents>
            </S.Accordian2Inner>
        </S.Accordian2Container>
    );
};

export default Accordion2;