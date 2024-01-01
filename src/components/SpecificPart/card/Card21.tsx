import React, { useState } from 'react';
import * as S from "./style/Card21";

const Card20 = () => {
    const [contents, setContents] = useState([
        {
            img: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832',
            name: 'JGY_98',
            work: 'FronEnd'
        },
        {
            img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832',
            name: 'Test_00',
            work: "BackEnd"
        },
        {
            img: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832',
            name: 'Test_01',
            work: 'FrontEnd'
        },
        {
            img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832',
            name: 'Test_02',
            work: "BackEnd"
        }
    ]);
    return (
        <S.Container>
            <S.Inner>
                <S.Contents>
                    {
                        contents.map((content, index) => {
                            return (
                                <S.Content key={index}
                                    style={{backgroundImage: `url(${content.img})`}}
                                >
                                    <S.Name>{content.name}</S.Name>
                                    <S.Line/>
                                    <S.Work>{content.work}</S.Work>
                                </S.Content>
                            )
                        })
                    }
                </S.Contents>
            </S.Inner>            
        </S.Container>
    );
};

export default Card20;