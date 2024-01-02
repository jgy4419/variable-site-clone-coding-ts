import React, { useRef } from 'react';
import * as S from "./style/Card22";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers, faMessage } from '@fortawesome/free-solid-svg-icons';

const Card22 = () => {
    const containRef = useRef<HTMLDivElement>(null);
    const cardContent = [
        {
            title: "HOUSE",
            icon: faHouse,
            color: "green"
        },
        {
            title: "USER",
            icon: faUsers,
            color: "skyblue"
        },
        {
            title: "MESSAGE",
            icon: faMessage,
            color: "red"
        }
    ];

    const containerColorChange = (backColor: string) => {
        if(containRef.current) {
            const containerStyle = containRef.current.style;
            containerStyle.backgroundColor = backColor;
        }
    }
    return (
        <>
            <S.Container ref={containRef}>
                <S.Inner>
                    <S.Contents>
                    {
                        cardContent.map((content, index) => {
                            return (
                                <S.Content 
                                    key={index} 
                                    mainColor={content.color} 
                                    onMouseEnter={() => containerColorChange(content.color)}
                                    onMouseLeave={() => containerColorChange("#fff")}>
                                    <S.IconContain>
                                        <FontAwesomeIcon fontSize="40" icon={content.icon} />
                                    </S.IconContain>
                                    <S.Title>{content.title}</S.Title>
                                </S.Content>
                            )
                        })
                    }
                    </S.Contents>
                </S.Inner>
            </S.Container>
        </>
    );
};

export default Card22;