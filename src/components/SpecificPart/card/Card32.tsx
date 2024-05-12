import React, { useState } from 'react';
import * as S from "./style/Card32";

const Card32 = () => {
    const [content, setContent] = useState({
        imgUrl: "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
        title: "Title",
        description: "Peppsi Zero Sugar is the only soda with zero calories and maximum pepsi taste!"
    });
    const [state, setState] = useState(false);


    return (
        <S.Container>
            <S.Inner>
                <S.Card state={state}>
                    <S.TitleImage state={state} onClick={() => {setState(prev => !prev)}} src={content.imgUrl}/>
                    <S.Content state={state}>
                        <S.CloseButton onClick={() => {setState(prev => !prev)}}>X</S.CloseButton>
                        <S.Title>{content.title}</S.Title>
                        <S.Description>{content.description}</S.Description>
                        <S.Button onClick={() => {setState(prev => !prev)}}>Detail</S.Button>
                    </S.Content>
                </S.Card>
            </S.Inner>
        </S.Container>
    );
};

export default Card32;