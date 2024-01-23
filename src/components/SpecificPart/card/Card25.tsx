import React, { useState } from 'react';
import * as S from "./style/Card25";
import profile from "../../../assets/images/profile.jpeg"

const Card25 = () => {
    const [contents, setContents] = useState([
        {
            title: "Sample title",
            name: "jgy_98",
            img: profile,
            date: "on Jan 20 2024"
        },
        {
            title: "Sample title",
            name: "jgy_98",
            img: profile,
            date: "on Jan 25 2024"
        },
        {
            title: "Sample title",
            name: "jgy_98",
            img: profile,
            date: "on Jan 16 2024"
        }
    ]);
    return (
        <S.Container>
            <S.Inner>
                {
                    contents.map((content: any, index) => {
                        return (
                            <S.Content key={index}>
                                <S.TopTitleContain>
                                    <S.ContentTop>
                                        <S.Published>Published</S.Published>
                                        <S.Date>{content.date}</S.Date>
                                    </S.ContentTop>
                                    <S.Title>{content.title}</S.Title>
                                </S.TopTitleContain>
                                <S.ContentBottom>
                                    <S.Profile src={content.img}/>
                                    <S.Name>{content.name}</S.Name>
                                </S.ContentBottom>
                            </S.Content>
                        )
                    })
                }
            </S.Inner>
        </S.Container>
    );
};

export default Card25;