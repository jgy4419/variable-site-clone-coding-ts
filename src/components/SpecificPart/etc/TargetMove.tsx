import React, { useEffect, useRef, useState } from 'react';
import * as S from "./style/TargetMove";

const TargetMove = () => {
    const [boxColor, setBoxColor] = useState([
        "red", "orange", "yellow", "green", "blue", "navy", "purple"
    ]);

    const boxRefs = useRef<(HTMLElement | null)[]>([]);

    const scrollToBox = (index: number) => {
        boxRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <S.Container>
            <S.Buttons>
                {
                    boxColor.map((color, index) => {

                        return (
                            <S.Button 
                                onClick={() => scrollToBox(index)} 
                                backgroundColor={color} key={index}>
                                    Button{index + 1}
                            </S.Button>
                        )
                    })
                }
            </S.Buttons>
            <S.Boxs>
                {
                    boxColor.map((color, index) => {
                        return (
                            <S.Box 
                                ref={(el) => boxRefs.current[index] = el} 
                                key={index} 
                                backgroundColor={color}
                            >
                                Box{index + 1}
                            </S.Box>
                        )
                    })
                }
            </S.Boxs>
        </S.Container>
    );
};

export default TargetMove;