import React, {useState} from 'react';
import * as S from "../style/VerticalTabsMenu";

const Menu = () => {
    const [selectedItem, setSelectedItem] = useState<string>("Your idea & Vision");

    const [menus, setMenus] = useState([
        "Your idea & Vision",
        "Product Specification",
        "UX/UI Design Prototype",
        "AI & Machine Learning", 
        "Architecture & Engineering",
        "MVP Release & Iterations"
    ]);

    const selectedToggle = (menu: string, index: number) => {
        setSelectedItem(menu);
        
        let dom: any = document;
        dom.querySelector('.content' + (index)).scrollIntoView({ behavior: "smooth" });  
    }

    return (
        <>
            <S.MenuList>
                {
                    menus.map((menu, index) => {
                        return(
                            <S.MenuItem 
                                key={index} 
                                selected={menu === selectedItem}
                                onClick={() => selectedToggle(menu, index)}>
                                {menu}
                            </S.MenuItem>
                        )
                    })
                }
            </S.MenuList>
        </>
    );
};

export default Menu;