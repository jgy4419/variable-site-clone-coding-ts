import React, { useState } from 'react';
import * as S from "./style/Card16";

const Card16 = () => {
    const [card16Content, setCard16Contnet] = useState([
        {
            description: "Leafs Content Description. Leafs Content Description. Leafs Content Description.",
            image: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            description: "StorLeafs Content Description. Leafs Content Description. Leafs Content Description.y2",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832"
        },
        {
            description: "Leafs Content Description. Leafs Content Description. Leafs Content Description.",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDlfMTg0%2FMDAxNjM2NDI4MzU1OTQ1.ywX8cGGWojpTz_RnCfBH8UguCQM8g4KZlwCNDrtTC0og.S3ZlkwgoQXk7ysmgrvFOaOmNwsC7Oq9sZBvn76jhqhMg.JPEG.nine09092000%2FKakaoTalk_20211006_122035283_25.jpg&type=sc960_832"
        }
    ]);
    return (
        <S.Card16Container>
            <S.Card16Inner>
                <S.Card16Contents>
                {
                    card16Content.map((content, index) => {
                        return (
                            <S.Card16Content key={index}>
                                <S.Card16ContentBackgroundDark/>
                                <S.Card16ContentImage src={content.image}/>
                                <S.Card16ContentInner>
                                    <S.Card16ContentDescription>{content.description}</S.Card16ContentDescription>
                                    <S.Card16ContentButton>Read More</S.Card16ContentButton>
                                </S.Card16ContentInner>
                            </S.Card16Content>
                        )   
                    })
                }
                </S.Card16Contents>
            </S.Card16Inner>
        </S.Card16Container>
    );
};

export default Card16;