import React from 'react';
import * as S from "./style/FaceBookFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers, faLocationDot, faBars } from '@fortawesome/free-solid-svg-icons';

const FaceBookFooter = () => {
    const footerIcons = [
        faHouse, faUsers, faLocationDot, faBars
    ]
    return (
        <S.FaceBookFooterContainer>
            {
                footerIcons.map((icon, index) => {
                    return (
                        <S.FaceBookFooterButton key={index}>
                            <FontAwesomeIcon fontSize="16" color="skyblue" icon={icon} />
                        </S.FaceBookFooterButton>
                    )
                })
            }
        </S.FaceBookFooterContainer>
    );
};

export default FaceBookFooter;