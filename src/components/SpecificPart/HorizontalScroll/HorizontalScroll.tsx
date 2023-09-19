import React, {useState, useEffect, useRef} from "react";
import * as S from "./style/HorizontalScroll";
import { useHorizontalScroll } from "./hook/useSideScroll";

const HorizontalScroll = () => {
    let scrollRef = useRef(null);
    let scrollRefInner: any = useRef(null);
    let test = ['123', '456', '789'];

    useEffect(() => {
        horizontalScrollEvent();
    }, []);

    function horizontalScrollEvent() {
        let screenHeight = document.documentElement.scrollHeight;
        document.addEventListener("scroll", () => {
            let currentScrollValue = document.documentElement.scrollTop;
            console.log(currentScrollValue);
            let rightScroll = currentScrollValue / 5;
            if(scrollRefInner.current !== null) {
                scrollRefInner.current.style.transform = `translateX(-${rightScroll - 1000}px)`;

            }
        })
    }
    return (    
        <S.HorizontalScrollContainer>
            <S.HorizontalScrollInner>
                {/* 각 세션들 */}
                <S.HorizontalScrollSection1>
                    <S.HorizontalScrollSection1Title>
                        Horizontal <br/> scroll <br/> section
                    </S.HorizontalScrollSection1Title>
                    <S.HorizontalScrollSection1Description>
                        with CodeAtNow <br/> ScrollTrigger & <br/> Locomotive Scroll
                    </S.HorizontalScrollSection1Description>
                </S.HorizontalScrollSection1>
                <S.HorizontalScrollSection2 ref={scrollRef}>
                    <S.HorizontalScrollSection2Inner ref={scrollRefInner}>
                        {
                            test.map((item, index) => {
                                return (
                                    <S.HorizontalScrollItem key={index}>
                                        {item}
                                    </S.HorizontalScrollItem>
                                )
                            })
                        }
                    </S.HorizontalScrollSection2Inner>
                </S.HorizontalScrollSection2>
            </S.HorizontalScrollInner>
        </S.HorizontalScrollContainer>
    );
};

export default HorizontalScroll;