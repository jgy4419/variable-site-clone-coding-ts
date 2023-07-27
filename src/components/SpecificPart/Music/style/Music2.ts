import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Music2Container = styled.div`
    position: relative;
    width: 100vw;
    height: 30vh;
    background-color: beige;
`;

export const Music2Inner = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 70%;
    height: 100%;
`;

export const MusicDetail = styled.div<{musicstate: string}>`
    width: 300px;
    height: 40px;
    background-color: #FEFBE9;
    border-radius: 20px 20px 0 0;
    transition: .3s;
    text-align: center;
    padding-top: 20px;
    font-weight: 700;
    font-size: 14px;
    color: #333;
    transform: ${props => props.musicstate};
    box-sizing: content-box;
`;

export const MusicContainer = styled.div`
    position: relative;
    width: 400px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MusicController = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const MusicImage = styled.img<{musicstate: boolean}>`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-bottom: 20%;
    animation-name: ${props => props.musicstate === true ? rotate : 'none'};
    animation-duration: 5s;
    animation-iteration-count: infinite;
`;

export const MusicPrev = styled.p`
`;

export const MusicPlayOrStop = styled.p`
`;

export const MusicNext = styled.p`
`;