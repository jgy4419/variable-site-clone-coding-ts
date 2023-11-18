import React from 'react';
import * as S from "./style/Card19";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faImage, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';

const Card19 = () => {
    const content = {
        name: "Jeong Kye Yound",
        img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"    
    }
    return (
        <S.Container>
            <S.Inner>
                <S.ContentContainer>
                    <S.ContentInner>
                        <S.ContentImg src={content.img}/>
                        <S.Title>{content.name}</S.Title>
                        <S.SnsList>
                            {
                               [faVideo, faImage, faHouse, faUsers].map((icon, index) => {
                                    return(
                                        <S.SnsItem>
                                            <FontAwesomeIcon fontSize={16} icon={icon} />
                                        </S.SnsItem>   
                                    )
                               })
                            }
                            <S.SnsList></S.SnsList>
                        </S.SnsList>
                    </S.ContentInner>
                </S.ContentContainer>
            </S.Inner>
        </S.Container>
    );
};

export default Card19;