import { useEffect, useState, useRef } from 'react';
import * as S from './style/MagicNavigationMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faComment, faCamera, faGear } from '@fortawesome/free-solid-svg-icons';

const MagicNavigationMenu = () => {
    const listRef = useRef(null);
    const [footerIcon, setFooterIcon] = useState(
        [
            faHouse,
            faUser,
            faComment,
            faCamera,
            faGear
        ]
    );
    const backColor = [
        'red',
        'orange',
        'green',
        'skyblue',
        'pink'
    ]
    const [location, setLocation] = useState(5);
    return (
        <S.MagicNavigationMenuContainer>
            <S.MagicText>패드 or 모바일 사이즈에서 보세요.</S.MagicText>
            <S.MagicNavigationMenuFooter>
                <S.MagicNavigationMenus ref={listRef}>
                {
                    footerIcon.map((icon, index) => {
                        return (
                            <>
                                <S.MagicNavigationMenu key={index} location={location} backColor={backColor[index]}
                                    onClick={() => setLocation(index * 2 + 1)}
                                >
                                    <FontAwesomeIcon icon={icon} />
                                </S.MagicNavigationMenu>
                                <S.MagicNavigationMenuBall location={index + 1}/>
                            </>
                        )
                    })
                }
                </S.MagicNavigationMenus>
            </S.MagicNavigationMenuFooter>          
        </S.MagicNavigationMenuContainer>
    );
};

export default MagicNavigationMenu;