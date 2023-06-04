import React, { useState } from 'react';
import * as S from './style/Main/Main1'

const Main1 = () => {
    const [imgs, setImgs] = useState([
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDlfMTg0%2FMDAxNjM2NDI4MzU1OTQ1.ywX8cGGWojpTz_RnCfBH8UguCQM8g4KZlwCNDrtTC0og.S3ZlkwgoQXk7ysmgrvFOaOmNwsC7Oq9sZBvn76jhqhMg.JPEG.nine09092000%2FKakaoTalk_20211006_122035283_25.jpg&type=sc960_832'
    ]);
    return (
        <S.Main1Container>
            <S.Main1Inner>
                <S.MainContent>
                    <S.MainText>MACHU PICHU</S.MainText>
                    <S.Line />
                    <S.SubText>Adventure is mever far away</S.SubText>
                </S.MainContent>
                <S.Imgs>
                {
                    imgs.map((img, index) => {
                        return (
                            <S.Img width={300} height={500} key={index} src={img}/>
                        )
                    })
                }
                </S.Imgs>
            </S.Main1Inner>
        </S.Main1Container>
    );
};

export default Main1;