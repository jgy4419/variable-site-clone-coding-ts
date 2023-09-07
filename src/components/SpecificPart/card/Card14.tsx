import React, { useState } from 'react';
import * as S from './style/Card14';

const Card14 = () => {
    const [contents, setContents] = useState([
        {
            img: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832',
            title: 'To The Beach',
            description: 'Play your next beach trip.'
        },
        {
            img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832',
            title: 'Desert Destinations',
            description: "It's the deast"
        }
    ]);
    return (
        <S.Card14Container>
            <S.Card14Inner>
                <S.Card14Contents>
                    {
                        contents.map((content, index) => {
                            return (
                                <S.Card14Content key={index}>
                                    <S.Card14Image src={content.img}/>
                                    <S.Card14Animation>
                                        <S.Card14Back/>
                                        <S.Card14ContentTitle>{content.title}</S.Card14ContentTitle>
                                        <S.Card14OpacityAnimation>
                                            <S.Card14ContentDescription>{content.description}</S.Card14ContentDescription>
                                            <S.Card14ContentButton>View Now</S.Card14ContentButton>
                                        </S.Card14OpacityAnimation>
                                    </S.Card14Animation>
                                </S.Card14Content>
                            )
                        })
                    }
                </S.Card14Contents>
            </S.Card14Inner>
        </S.Card14Container>
    );
};

export default Card14;