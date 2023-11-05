import React, { useState } from 'react';
import * as S from "../style/VerticalTabsMenuContent";

const VerticalTabsMenuContent = () => {
    const [contents, setContents] = useState([
        {
            title: "1",
            description: "menu1",
            img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            title: "2",
            description: "menu2",
            img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            title: "3",
            description: "menu3",
            img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            title: "4",
            description: "menu4",
            img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            title: "5",
            description: "menu5",
            img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            title: "6",
            description: "menu6",
            img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        }    
    ])
    return (
        <S.ContentContainer>
            <S.ContentInner>
                {
                    contents.map((content, index) => {
                        return (
                            <>
                                <S.Content key={index} className={`content${index}`}>
                                    <S.Title>{content.title}</S.Title>
                                    <S.Description>{content.description}</S.Description>
                                    <S.Image src={content.img}/>
                                </S.Content>
                            </>
                        )
                    })
                }
            </S.ContentInner>
        </S.ContentContainer>
    );
};

export default VerticalTabsMenuContent;