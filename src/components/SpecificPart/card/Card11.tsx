import React, { useState } from 'react';
import * as S from './style/Card11';

const Card11 = () => {
    const [content, setContent] = useState({
        title: ['HONG KONG', 'ROME', 'PARIS', 'NEW WORK'],
        image: [
            'https://image.ajunews.com/content/image/2021/10/19/20211019103812353032.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3E6uKOY_m_ZMS4c1TJYZeEMmJccCOip08u2XoNcWTJaE6Opm3ZKgSdO726FiuYbEFD4&usqp=CAU',
            'https://mblogthumb-phinf.pstatic.net/MjAxNzA3MTdfODgg/MDAxNTAwMjY0Mjc0MTA2.wLlyTxiPDPu4TCFingTSXgQpdlTN4uMx_ogE0QbUJH8g.fEcnx5nL2vyr1mIJ5Ddh8qss3ENiIpVjbZ-wSMvI5dEg.JPEG.asia_enjoy/%ED%95%B4%EC%99%B8%EC%97%AC%ED%96%89_%EB%86%80%EB%9F%AC%EA%B0%88%EB%A7%8C%ED%95%9C%EA%B3%B3_%ED%95%B4%EC%99%B8%EC%97%AC%ED%96%89%EC%A7%80%EB%B2%A0%EC%8A%A4%ED%8A%B81015.jpg?type=w800', 
            'https://newsimg.sedaily.com/2023/04/19/29OD3KOELX_3.jpg'
        ]
    });

    return (
        <S.Card11Container>
            <S.Card11Inner>
                <S.Card11Content>
                    {
                        content.image.map((img, index) => {
                            return (
                                <S.Card11ContentImage key={index} image={img}>
                                    <S.Card11ContentTitle>{content.title[index]}</S.Card11ContentTitle>
                                </S.Card11ContentImage>
                            )
                        })
                    }
                </S.Card11Content>
            </S.Card11Inner>
        </S.Card11Container>
    );
};

export default Card11;