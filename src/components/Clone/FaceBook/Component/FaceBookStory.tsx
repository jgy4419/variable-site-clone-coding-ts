import React, { useState } from 'react';
import * as S from "./style/FaceBookStory";

const FaceBookStory = () => {
    const [storyContents, setStoryContents] = useState([
        {
            title: "Story1",
            image: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            title: "Story2",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832"
        },
        {
            title: "Story3",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDlfMTg0%2FMDAxNjM2NDI4MzU1OTQ1.ywX8cGGWojpTz_RnCfBH8UguCQM8g4KZlwCNDrtTC0og.S3ZlkwgoQXk7ysmgrvFOaOmNwsC7Oq9sZBvn76jhqhMg.JPEG.nine09092000%2FKakaoTalk_20211006_122035283_25.jpg&type=sc960_832"
        },
        {
            title: "Story1",
            image: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832"
        },
        {
            title: "Story2",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832"
        },
        {
            title: "Story3",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDlfMTg0%2FMDAxNjM2NDI4MzU1OTQ1.ywX8cGGWojpTz_RnCfBH8UguCQM8g4KZlwCNDrtTC0og.S3ZlkwgoQXk7ysmgrvFOaOmNwsC7Oq9sZBvn76jhqhMg.JPEG.nine09092000%2FKakaoTalk_20211006_122035283_25.jpg&type=sc960_832"
        }
    ]);
    return (
        <S.FaceBookStoryContainer>
            <S.FaceBookStoryInner>
                {
                    storyContents.map((story, index) => {
                        return (
                            <S.Story key={index} style={{backgroundImage: `url('${story.image}')`}}>
                                <S.StoryTitle>{story.title}</S.StoryTitle>
                            </S.Story>
                        )
                    })
                }
            </S.FaceBookStoryInner>            
        </S.FaceBookStoryContainer>
    );
};

export default FaceBookStory;