import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import * as S from "./style/LinkModal";

const LinkModal = () => {
    const [shareContent, setShareContent] = useState({
        title: "Share the link.",
        url: "jgy_98@naver.com"
    });
    
    const [modalState, setModalState] = useState(false);
    const copyElement = useRef<HTMLInputElement>(null);

    const copyTextToShapeUrl = () => {
        if(copyElement.current) {
            const copyText = copyElement.current;
            copyText.select();
            document.execCommand('copy');
            alert("Copy!");
            setModalState(false);
        }
    }

    return (
        <S.Container>
            {
                modalState === true &&
                <S.CoverColor/>
            }
            <S.ShareContent modalState={modalState}>
                <S.ShareContentInner>
                    <S.ShareContainTop>
                        <S.ShareTitle>{shareContent.title}</S.ShareTitle>
                        <S.ShareCloseButton onClick={() => setModalState(false)}>X</S.ShareCloseButton>
                    </S.ShareContainTop>
                    <S.ShareInputContain>
                        <S.ShareInput ref={copyElement} value={shareContent.url}/>
                        <S.ShareCopyButton onClick={copyTextToShapeUrl}>
                            <FontAwesomeIcon fontSize="15" color="purple" icon={faShareNodes} />
                            <S.ShareCopyButtonText>Copied!</S.ShareCopyButtonText>
                        </S.ShareCopyButton>
                    </S.ShareInputContain>
                </S.ShareContentInner>
            </S.ShareContent>
            <S.ShareTestInput/>
            <S.Inner>   
                <S.ShareButton onClick={() => setModalState(true)}>
                    <FontAwesomeIcon fontSize="25" color="purple" icon={faShareNodes} />
                </S.ShareButton>
            </S.Inner>
        </S.Container>
    );
};

export default LinkModal;