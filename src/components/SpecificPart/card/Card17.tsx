import React, { useState } from 'react';
import * as S from "./style/Card17";

const Card17 = () => {
    const [card17Content, setCard17Content] = useState([
        {
            title: "Home",
            description: "Leafs Content Description. Leafs Content Description. Leafs Content Description.",
            image: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            title: "About",
            description: "StorLeafs Content Description. Leafs Content Description. Leafs Content Description.y2",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832"
        },
        {
            title: "Work",
            description: "Leafs Content Description. Leafs Content Description. Leafs Content Description.",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDlfMTg0%2FMDAxNjM2NDI4MzU1OTQ1.ywX8cGGWojpTz_RnCfBH8UguCQM8g4KZlwCNDrtTC0og.S3ZlkwgoQXk7ysmgrvFOaOmNwsC7Oq9sZBvn76jhqhMg.JPEG.nine09092000%2FKakaoTalk_20211006_122035283_25.jpg&type=sc960_832"
        }
    ]);

    const contentList = [
        "Fitst piece of work.",
        "Second piece of work.",
        "Third piece of work."
    ];
    return (
        <S.Card17Container>
            <S.Card17Inner>
                <S.Card17Contents>
                    {
                        card17Content.map((content, index) => {
                            return (
                                <S.Card17Content style={{backgroundImage: `url('${content.image}')`}} key={index}>
                                    <S.Card17DarkBackColor/>
                                    <S.Card17ContentInner>
                                        <S.Card17ContentTitle>{content.title}</S.Card17ContentTitle>
                                        <S.Card17ContentDescriptionBox>
                                            <S.Card17ContentDescription>{content.description}</S.Card17ContentDescription>
                                                <S.Card17ContentLists>
                                                    {
                                                        contentList.map((list, index) => {
                                                            return (
                                                                <>
                                                                    <S.Card17ContentList key={index}>{list}</S.Card17ContentList>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </S.Card17ContentLists>
                                        </S.Card17ContentDescriptionBox>
                                    </S.Card17ContentInner>
                                </S.Card17Content>
                            )
                        })
                    }
                </S.Card17Contents>
            </S.Card17Inner>
        </S.Card17Container>
    );
};

export default Card17;