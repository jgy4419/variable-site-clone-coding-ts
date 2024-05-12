import React, { useState } from 'react';
import * as S from "./style/Card30";

const Card30 = () => {
    const [content, setContent] = useState({
        title: "Title",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing edit. Similtique, magui! Lorem ipsum dolor sit amet consectetur .."
    });
    return (
        <S.Container>
            <S.Inner>
                <S.Content>
                    <S.ColorPreview />
                    <S.ContentTitle>{content.title}</S.ContentTitle>
                    <S.ContentDescription>{content.description}</S.ContentDescription>
                </S.Content>
            </S.Inner>
        </S.Container>
    );
};

export default Card30;