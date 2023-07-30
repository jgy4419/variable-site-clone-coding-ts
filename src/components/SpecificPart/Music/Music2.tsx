import  {useState, useEffect} from 'react';
import * as S from './style/Music2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

const Music2 = () => {
    const [musicState, setMusicState] = useState(false);
    const [musicTime, setMusicTime] = useState(0);
    const [choiceMusic, setChoiceMusic] = useState({
        title: '놀이',
        titleImage: 'https://image.bugsm.co.kr/album/images/500/40787/4078771.jpg',
        playTime: 400
    });

    useEffect(() => {
        musicPlaying();
    }, [musicState]);

    const musicPlaying = () => {
        let musicPlay;

        if(musicTime === choiceMusic.playTime) musicHandler();
        
        if(musicState === true) {
            musicPlay = setInterval(() => {
                setMusicTime(time => time+=1);
            }, 1000);
        } else clearInterval(musicPlay);
    }

    // 음악 뒤로가기 / 다음으로가기 클릭 시 재생시간 초기화
    const musicHandler = () => {
        setMusicTime(0);
    }

    
    return (
        <S.Music2Container>
            <S.Music2Inner>
                <S.MusicContainer>
                    <S.MusicDetail musicstate={musicState === false ? 'translateY(100%)' : 'translateY(0%)'}>
                        <S.MusicDetailTitle>{choiceMusic.title}</S.MusicDetailTitle>
                        <S.MusicDetailRange type='range'
                            min="0" max={choiceMusic.playTime}
                            value={musicTime}
                        />
                    </S.MusicDetail>
                    <S.MusicController>
                        <S.MusicImage musicstate={musicState} src={choiceMusic.titleImage}/>
                        <S.MusicPrev onClick={musicHandler}>
                            <FontAwesomeIcon icon={faBackward} />
                        </S.MusicPrev>
                        <S.MusicPlayOrStop onClick={() => setMusicState(!musicState)}>{
                            musicState === true 
                                ? <FontAwesomeIcon icon={faPause} /> 
                                : <FontAwesomeIcon icon={faPlay} />
                        }</S.MusicPlayOrStop>
                        <S.MusicNext onClick={musicHandler}>
                            <FontAwesomeIcon icon={faForward} />
                        </S.MusicNext>
                    </S.MusicController>
                </S.MusicContainer>
            </S.Music2Inner>
        </S.Music2Container>    
    );
};

export default Music2;