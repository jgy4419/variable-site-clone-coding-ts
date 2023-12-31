import React, { useState } from 'react';
import * as S from "./style/Card20";
import jgyImage from '../../../asserts/images/jgy_painting.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers, faLocationDot, faMessage } from '@fortawesome/free-solid-svg-icons';

const Card20 = () => {
    const [information, setInformation] = useState(
        {
            name: "JGY",
            description: "Hi there ~ my name is JGY",
            img: jgyImage
        }
    );
    const infoButton = [faHouse, faUsers, faLocationDot, faMessage];

    return (
        <S.Container>
            <S.Inner>
                <S.Content>
                    <S.ProfileImg src={information.img}/>
                    <S.InfoButtons>
                    {
                        infoButton.map((icon, index) => {
                            return (
                                <S.InfoButton key={index}>
                                    <S.IconContain>
                                        <FontAwesomeIcon fontSize="18" icon={icon} />
                                    </S.IconContain>
                                </S.InfoButton>
                            )
                        })
                    }
                    </S.InfoButtons>
                    <S.DarkBackColor />
                    <S.Information>
                        <S.Name>{information.name}</S.Name>
                        <S.Description>{information.description}</S.Description>
                    </S.Information>
                </S.Content>
            </S.Inner>
        </S.Container>
    );
};

export default Card20;