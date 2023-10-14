import React, { useEffect, useState } from 'react';
import * as S from "./style/Card18";

const Card18 = () => {
    const [content, setContent] = useState({
        img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832",
        date: new Date(),
        title: "SHARK SIGHTING",
        description: `
            Leafs Content Description. Leafs Content Description. Leafs Content Description.
            StorLeafs Content Description. Leafs Content Description. Leafs Content Description.y2
            `
    });

    useEffect(() => {
        console.log(content.date);
        
    }, []);
    return (
        <>
            <S.Card18Container>
                <S.Card18Inner>
                    <S.Card18Content>
                        <S.Card18Image src={content.img}/>
                        <S.Card18ContentInner>
                            <S.Card18ContentBox>
                                <S.ContentDate>
                                    
                                    {
                                        "Today " + content.date.getFullYear() + "/" + (content.date.getMonth() + 1) + "/" + content.date.getDate()
                                    }
                                </S.ContentDate>
                                <S.ContentTitle>{content.title}</S.ContentTitle>
                                <S.ContentDescription>{content.description}</S.ContentDescription>
                                <S.ContentButton>READ MORE</S.ContentButton>
                            </S.Card18ContentBox>
                        </S.Card18ContentInner>
                    </S.Card18Content>
                </S.Card18Inner>
            </S.Card18Container>  
        </>
    );
};

export default Card18;