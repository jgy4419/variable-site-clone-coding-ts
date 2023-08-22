import React, {useState} from 'react';
import * as S from './style/ColorChoice';

const ColorChoice = () => {
    const [colors, setColors] = useState([
        '#05151A',
        '#072E33',
        '#0C7075',
        '#0F969C',
        '#6DA5C0',
        '#294D61'
    ])
    const top = [
        100, 200, 300, 400, 500, 600
    ]
    return (
        <S.ColorChoiceContainer>
            <S.ColorChoiceInner>
                <S.Colors>
                    {
                        colors.map((color, index) => {
                            return (
                                <S.Color key={index} color={color} top={top[index]}>
                                    {color}
                                </S.Color>
                            )
                        })
                    }
                </S.Colors>
            </S.ColorChoiceInner>
        </S.ColorChoiceContainer>
    );
};

export default ColorChoice;