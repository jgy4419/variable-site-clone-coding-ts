import React, { useState } from 'react';
import * as S from "./style/Card26";
import appleCardImg from "../../../assets/images/appleCard.png";
import iphoneImg from "../../../assets/images/iphoneImg.png";
import iphoneImgFront from "../../../assets/images/iphoneImgFront.png";

const Card26 = () => {
    const [frontContent, setFrontContent] = useState({
        phoneImg: iphoneImgFront,
        cardImg: appleCardImg,
        title: "Created By Apple. Powered by iPhone.",
    });
    const [backContent, setBackContent] = useState({
        title: "Built for iPhone",
        description: `
            Apple Card lives on your iPhone, in the Wallet app.
           in the Wallet app. you can sign up in as little as a 
           minute and start using it right away with Apple Pay.
           Apple Card lives on yout iPhone, in the Wallet app.
           You can sign up in as little
           as a minute and start using it right away with Apple Pay.
        `,
        phoneImg: iphoneImg
    });
    const [contentState, setContentState] = useState(false);

    return (
        <S.Container>
            <S.Inner contentState={contentState}>
                {
                    contentState === false ? <S.FrontContainer contentState={contentState}  >
                        <S.FrontInner>
                            <S.FrontContainerLeftImg src={frontContent.phoneImg}/>
                            <S.FrontContainerRight>
                                <S.FrontTitle>{frontContent.title}</S.FrontTitle>
                                <S.FrontContainerCardImg src={frontContent.cardImg}/>
                                <S.ContentStateButton contentState={contentState} onClick={() => setContentState(prev => !prev)}>+</S.ContentStateButton>
                            </S.FrontContainerRight>
                        </S.FrontInner>
                    </S.FrontContainer>
                    : <S.BackContainer contentState={contentState}>
                        <S.BackInner>
                            <S.BackContainerLeft>
                                <S.BackTitle>{backContent.title}</S.BackTitle>
                                <S.BackDescription>{backContent.description}</S.BackDescription>
                                <S.ContentStateButton contentState={contentState} onClick={() => setContentState(prev => !prev)}>+</S.ContentStateButton>
                            </S.BackContainerLeft>
                            <S.BackRightImg src={backContent.phoneImg}/>
                        </S.BackInner>
                    </S.BackContainer>
                }
            </S.Inner>
        </S.Container>
    );
};

export default Card26;