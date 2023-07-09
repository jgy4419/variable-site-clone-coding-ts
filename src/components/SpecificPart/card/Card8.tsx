import React,  {useState} from 'react';
import * as S from './style/Card8';

const Card8 = () => {
    const [cardImages, setCardImages] = useState([
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFC0AMXNoBOA22Rom9E2FrpnExHdRGJr8OXLO9AqnO&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3E6uKOY_m_ZMS4c1TJYZeEMmJccCOip08u2XoNcWTJaE6Opm3ZKgSdO726FiuYbEFD4&usqp=CAU'
    ]);
    return (
        <S.Card8Container>
            <S.Card8Inner>
                {
                    cardImages.map((image, index) => {
                        return (
                            <S.CardImage src={image} key={index}/>
                        )
                    })
                }
            </S.Card8Inner>
        </S.Card8Container>
    );
};

export default Card8;