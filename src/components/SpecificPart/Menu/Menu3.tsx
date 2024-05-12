import React, { useState } from 'react';
import * as S from "./style/Menu3";

// Navigation Menu
const Menu3 = () => {
    const [menuList, setMenuList] = useState([
        "HOME", 
        "PROJECT",
        "ABOUT US",
        "CONTACT"
    ]);
    const [buttonState, setButtonState] = useState(false);
    const time = [0.5, 0.9, 1.3, 1.6];

    return (
        <S.Container>
            <S.Inner>
                <S.MenuButton onClick={() => setButtonState(prev => !prev)}>Menu</S.MenuButton>
                <S.MenuContain buttonState={buttonState}>
                    <S.MainMenu>
                        <S.Menus>
                        {
                            menuList.map((menu, index) => {
                                return (
                                    <S.Menu time={time[index]} key={index}>{menu}</S.Menu>
                                )
                            })
                        }
                        </S.Menus>
                    </S.MainMenu>
                    <S.SubScribeMenu>
                        <S.SubScribeMenuTitle>Subscribe to our newsletter</S.SubScribeMenuTitle>
                        <S.SubScribeMenuInput />
                    </S.SubScribeMenu>
                </S.MenuContain>
            </S.Inner>
        </S.Container>
    );
};

export default Menu3;