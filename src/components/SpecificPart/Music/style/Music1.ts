import styled, {createGlobalStyle} from 'styled-components';

export const ButtonStyle = createGlobalStyle`
    button {
        background-color: #eee;
        width: 30px;
        height: 25px;
        border-radius: 5px;
        border: 0;
        transition: .5s;
        cursor: pointer;
        font-size: 10px;
        font-weight: 700;
    }
    button:hover {
        background-color: #e3e3e3;
    }
`

export const Music1Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`

export const Music1Inner = styled.div`
    position absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    gap: 3%;
`

export const Musics = styled.div`
    position: relative;
    width: 400px;
    height: 80px;
    box-shadow: 5px 5px 5px lightgrey;
    transition: .3s;
    border-radius: 20px;
    &:hover {
        transform: translateY(-10px);
    }
`

export const MusicDetail = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(0, 0, 0, .5);
    gap: 3%;
    border-radius: 20px;
`

export const BackImg = styled.div<{backImage: string}>`
    position: absolute;
    width: 100%;
    height: 90%;
    background-image: url(${(props) => props.backImage});
    filter: blur(3px);
    border-radius: 20px;
`

export const MusicImg = styled.img`
    object-fit: cover;
    margin-left: 20px;
    border-radius: 10px;
`

export const MusicContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    color: #fff;
`

export const Name = styled.h3`
    font-size: 16px;
`

export const Artist = styled.div`
    font-size: 12px;
    margin-top: 5px;
    color: lightgrey;
    font-weight: 700;
`

export const Album = styled.p`
    font-size: 12px;
    font-weight: 600;
    // margin-top: 10px;
    color: lightgrey;
`

export const Player = styled.div`
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: end;
    margin-bottom: 20px;
`

export const BeforePlayer = styled.button`
`

export const AfterPlayer = styled.button`
`

export const Menu = styled.span`

`

export const PlayButton = styled.button`

`