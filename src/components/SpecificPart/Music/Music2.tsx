import React, {useState} from 'react';
import * as S from './style/Music2';

const Music2 = () => {
    const [musicState, setMusicState] = useState(false);
    return (
        <S.Music2Container>
            <S.Music2Inner>
                <S.MusicContainer>
                    <S.MusicDetail musicstate={musicState === false ? 'translateY(100%)' : 'translateY(0%)'}>
                        놀이
                    </S.MusicDetail>
                    <S.MusicController>
                        <S.MusicImage musicstate={musicState} src="https://image.bugsm.co.kr/album/images/500/40787/4078771.jpg"/>
                        <S.MusicPrev>이전</S.MusicPrev>
                        <S.MusicPlayOrStop onClick={() => setMusicState(!musicState)}>{musicState === true ? '재생' : '일시정지'}</S.MusicPlayOrStop>
                        <S.MusicNext>다음</S.MusicNext>
                    </S.MusicController>
                </S.MusicContainer>
            </S.Music2Inner>
        </S.Music2Container>
    );
};

export default Music2;