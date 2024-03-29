import React, {useRef, useState} from 'react';
import * as S from './style/Main/MainScrollAnimation';

const MainScrollAnimation = () => {
    const [contentParts, setContentParts] = useState({
        title: ['Card', 'Button', 'Music', 'Login'],
        description: [
            ''
        ],
    });
    const item = useRef(null);

    return (
        <S.MainScrollAnimationContainer>
            <S.MainScrollAnimationInner>
                <S.MainScrollMainText>
                    WelComeback!
                </S.MainScrollMainText>
                <S.MainScrollSubText>
                    main scroll sub text    
                </S.MainScrollSubText>
                <S.PartItemsContainer>
                {
                    contentParts.title.map((title, index) => {
                        return(
                            <S.PartItems ref={item} key={index}>
                                <S.Circle/>
                                {title}
                            </S.PartItems>
                        )
                    })

                }
                </S.PartItemsContainer>
            </S.MainScrollAnimationInner>
        </S.MainScrollAnimationContainer>
    );
};

export default MainScrollAnimation;