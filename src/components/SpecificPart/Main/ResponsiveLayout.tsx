import React, {useState} from 'react';
import * as S from './style/Main/ResponsiveLayout';
import jgyImage from '../../../asserts/images/jgy_painting.png'

const ResponsiveLayout = () => {
    const [content, setContent] = useState([
        {
            title: "Elevate Your Brand with Exceptional Dessign.",
            description: `
                Flowers Content Description. Flowers Content Description. Flowers Content Description.
                Flowers Content Description. Flowers Content Description. Flowers Content Description.
            `,
            profileImage: jgyImage
        }
    ])
    return (
        <S.ResponsiveLayoutContainer>
            <S.ResponsiveLayoutInner>
                <S.ResponsiveLayoutContents>
                {
                    content.map((content, index) => {
                        return (
                            <S.ResponsiveLayoutContent key={index}>
                                <S.ResponsiveLayoutContentInner>
                                    <S.ResponsiveLayoutContentTitle>{content.title}</S.ResponsiveLayoutContentTitle>
                                    <S.ResponsiveLayoutContentDescription>{content.description}</S.ResponsiveLayoutContentDescription>
                                    <S.ResponsiveLayoutContentButton>Join now</S.ResponsiveLayoutContentButton>
                                </S.ResponsiveLayoutContentInner>
                                <S.ResponsiveLayoutImage src={content.profileImage} width="50px"/>
                            </S.ResponsiveLayoutContent>
                        )
                    })
                }
                </S.ResponsiveLayoutContents>
            </S.ResponsiveLayoutInner>
        </S.ResponsiveLayoutContainer>
    );
};

export default ResponsiveLayout;