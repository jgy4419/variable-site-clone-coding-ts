import React, { useState } from "react";
import * as S from "./style/FaceBookHeader";
import FaceBookLogo from "../assets/image/FaceBookLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons';

const FaceBookHeader = () => {
    const [headerIcons, setHeaderIcons] = useState([
        faMagnifyingGlass, faMessage
    ]);

    return (
        <>
            <S.FaceBookHeaderContainer>
                <S.FaceBookHeaderInner>
                    <S.FaceBookLogo src={FaceBookLogo}/>
                    <S.FaceBookHeaderIcons>
                        {
                            headerIcons.map((icon, index) => {
                                return (
                                    <S.FaceBookHeaderIcon key={index}>
                                        <FontAwesomeIcon color="grey" fontSize="16px" icon={icon} />
                                    </S.FaceBookHeaderIcon>
                                )
                            })
                        }
                    </S.FaceBookHeaderIcons>
                </S.FaceBookHeaderInner>
            </S.FaceBookHeaderContainer>
        </>
    );
};

export default FaceBookHeader;