import React, { useState } from 'react';
import * as S from './style/Menu1';

/* 
    피차일반
*/

const Menu1 = () => {
    const [menuList, setMenuList] = useState([
        'HOME', 'ABOUT', 'PORTFOLIO', 'TEAM', 'CONTACT'
    ]);
    return (
        <S.Menu1Container>  
            <S.Menu1Inner>
                <S.Menus>
                {
                    menuList.map((menu, index) => {
                        return (
                            <S.Menu key={index}>
                                <S.MenuLink menu={menu}>
                                    {menu}
                                </S.MenuLink>
                            </S.Menu>
                        )
                    })
                }
                </S.Menus>
            </S.Menu1Inner>
        </S.Menu1Container>
    );
};

export default Menu1;