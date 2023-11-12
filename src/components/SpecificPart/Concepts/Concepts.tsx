import React, { useState } from 'react';
import * as S from "./style/Concepts";

const Concepts = () => {
    const [contents, setContents] = useState([
        {
            title: "Social media managemenet",
            description: "Leafs Content Description. Leafs Content Description. Leafs Content Description.",
            img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            title: "SEO optimization",
            description: "Fruits Content Description. Fruits Content Description. Fruits Content Description.",
            img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            title: "Brand strategy",
            description: "Flowers Content Description. Flowers Content Description. Flowers Content Description.",
            img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
    ]);
    return (
        <S.Container>
            <S.Inner>
                <S.Contents>
                {
                    contents.map((content, index) => {
                        return(
                            <S.Content key={index}>
                                <S.ContentIndex>{index + 1}</S.ContentIndex>
                                <S.ContentInner>
                                    <S.Title>{content.title}</S.Title>
                                    <S.Description>{content.description}</S.Description>
                                </S.ContentInner>
                                <S.Image src={content.img}/>
                                <S.Button>LEARN MORE</S.Button>
                            </S.Content>   
                        )
                    })
                }
                </S.Contents>
            </S.Inner>
        </S.Container>
    );
};

export default Concepts;