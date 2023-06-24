import styled from 'styled-components';

export const Card6Container = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
    background-color: #000;
`;

export const ContentBackImage = styled.div<{backImage: string}>`
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-image: url(${props => props.backImage});
    background-repeat: no-repeat;
    background-size: cover;
    transition: .2s;
`

export const Card6Inner = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &:hover {
        ${ContentBackImage} {
            filter: blur(10px);
        }
    }
`;

export const Card6Contents = styled.div<{backImage: string}>`
    position: relative;
    width: 300px;
    height: 80%;
    background-color: #333;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 30px;    
    box-sizing: border-box;
    &:hover {
        ${ContentBackImage} {
            filter: blur(0px);
        }
    }
`;

export const ContentSubTitle = styled.p`
    z-index: 10;
    color: grey;
    font-weight: 700;
    font-size: 20px;
`;

export const ContentMainTitle = styled.h2`
    z-index: 10;
    width: 100px;
    font-size: 30px;
    color: #fff;
    font-weight; 700;
`;

// .card12_inner:hover img {
//     opacity: 0.3;
// }
// .card12_inner img:hover {
//     transform: perspective(800px) rotateY(0deg);
//     opacity: 1;
// }