import React, {useState} from 'react';
import * as S from './style/Music1';
import {ButtonStyle} from './style/Music1';

interface IMusicContent {
    imgs: string[],
    name: string[],
    artist: string[],
    album: string[]
}
const Music1 = () => {
    const [musicContent] = useState<IMusicContent>({
        imgs: [
            'https://image.bugsm.co.kr/album/images/500/40787/4078771.jpg',
            'https://image.bugsm.co.kr/album/images/500/40787/4078771.jpg',
            'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/427/599/82427599_1638854125897_1_600x600.JPG',
            'https://image.bugsm.co.kr/album/images/500/40489/4048921.jpg'
        ],
        name: [
            '놀이',
            'MP3',
            '떼굴떼굴',
            'I Got You'
        ],
        artist: [
            'LUCY',
            'LUCY',
            'LUCY',
            'LUCY'
        ],
        album: [
            'Childhood',
            'Childhood',
            'Blue',
            'Gate ha'
        ]
    });

    return (
        <S.Music1Container>
            <ButtonStyle/>
            <S.Music1Inner>
                {
                    musicContent.imgs.map((img: string, index :number) => {
                        return (
                            <S.Musics key={index}>
                                <S.BackImg backImage={img}/>
                                <S.MusicDetail>
                                    <S.MusicImg 
                                        width={50}
                                        height={50}
                                        src={img}
                                        alt='이미지'
                                    />
                                    <S.MusicContent>
                                        <S.Name>{musicContent.name[index]}</S.Name>
                                        <S.Artist>{musicContent.artist[index]}</S.Artist>
                                        <S.Album>{musicContent.album[index]}</S.Album>
                                    </S.MusicContent>
                                    <S.Player>
                                        <S.BeforePlayer>이전</S.BeforePlayer>
                                        <S.AfterPlayer>다음</S.AfterPlayer>
                                        <S.Menu>...</S.Menu>
                                        <S.PlayButton>재생</S.PlayButton>
                                    </S.Player>
                                </S.MusicDetail>
                            </S.Musics>
                        )
                    })
                }
            </S.Music1Inner>        
        </S.Music1Container>
    );
};

export default Music1;