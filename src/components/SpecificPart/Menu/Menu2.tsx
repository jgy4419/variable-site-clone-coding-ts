import React, { useState } from 'react';
import * as S from "./style/Menu2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Menu2 = () => {
    const [menuList, setMenuList] = useState([
        "Income",
        "Expenses",
        "Statements",
        "Payouts"
    ]);

    const [menuState, setMenuState] = useState(false);

    return (
        <S.Container>
            <S.Inner>
                <S.MenuContainer>
                    <S.MainMenu>
                        <S.MenuIconText>
                            <FontAwesomeIcon icon={faCoins} />
                            <S.MenuTitle>Payments</S.MenuTitle>
                        </S.MenuIconText>
                        {
                            menuState === true
                                ? <FontAwesomeIcon onClick={() => setMenuState(state => !state)} cursor="pointer" icon={faCaretDown} />
                                : <FontAwesomeIcon onClick={() => setMenuState(state => !state)} cursor="pointer" icon={faCaretUp} />
                        }
                    </S.MainMenu>
                    <S.MainMenuInner menuState={menuState}> 
                    {
                        menuList.map((menu, index) => {
                            return (
                                <>
                                    <S.MenuConnected key={index} />
                                    <S.MenuList key={index}>{menu}</S.MenuList>
                                </>
                            )
                        })
                    }
                    </S.MainMenuInner>
                </S.MenuContainer>
            </S.Inner>
        </S.Container>
    );
};

export default Menu2;