import React, { useEffect, useRef, useState } from 'react';
import * as S from "./style/Menu4";

// sticky menu
const Menu4 = () => {
    const [menus, setMenus] = useState([
        "HTML", "CSS", "JavaScript", "TypeScript"
    ]);

    const [positionState, setPositionState] = useState("fixed");

    const nav = useRef<HTMLUListElement>(null);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        if(nav.current) {
            setOffset(nav.current.offsetTop);
        } 
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let navElement = nav.current;
            if(navElement !== null) {
                window.scrollY >= offset
                ? setPositionState("sticky")
                : setPositionState("fixed");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offset]);

    return (
        <S.Container>
            <S.Inner positionState={positionState}>
                <S.MenuTitle>Sticky Menu</S.MenuTitle>
                <S.Menus ref={nav} positionState={positionState}>
                {
                    menus.map((menu, index) => {
                        return (
                            <S.Menu key={index}>
                                {menu}
                            </S.Menu>
                        )
                    })
                }
                </S.Menus>
            </S.Inner>
        </S.Container>
    );
};

export default Menu4;