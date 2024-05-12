import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainContent = styled.div<{backImg: string}>`
    position: relative;
    width: 500px;
    height: 600px;
    background-image: url(${props => props.backImg});
    background-repeat: no-repeat;
    object-fit: cover;
    transition: .3s;

`;

export const MainBackImg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 30px;
    transition: .3s;
`;


export const Title = styled.h2`
    position: absolute;
    z-index: 10;
    color: #fff;
    inset: 40px;
    font-size: 35px;
    font-familt: "Arial", sans-serif;
`;
 
export const SubContent = styled.div`
    width: 500px;
    height: 200px;
    border: 1px solid #333;
    background-color: #fff;
    border-radius: 0px 0px 20px 20px;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    padding: 20px 15px;
    box-sizing: border-box;
    border: 0;
    box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.2); /* 위쪽 그림자 없음 */
`;

export const Img = styled.img`
    width: 145px;
    height: 155px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    transition: .3s;
    &:last-child {
        position: relative;
    }
    &:hover { 
        transform: translateY(-5px);
    }
`;

export const More = styled.div<{backImg: string, count: number}>`
    position: relative;
    bbackdrop-filter: blur(5px);
    width: 145px;
    height: 155px;
    border-radius: 10px;
    border: 0;
    background-image: url(${props => props.backImg});
    &::after {
        content: "+ ${props => props.count}";
        position: absolute;
        display: flex;
        font-size: 30px;
        font-weight: 700;
        align-items: center;
        justify-content: center;
        inset: 0;
        border-radius: 10px;
        padding: 5px;
        color: #fff;
        cursor: pointer;
        backdrop-filter: brightness(50%);
      }
`;

export const Content = styled.div`
    width: 500px;
    height: 600px;
    overflow: hidden;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    &:hover {
        ${MainContent}{
            height: 400px;
            border-radius: 20px 20px 0 0;
        }
        ${MainBackImg} {
            border-radius: 30px 30px 0 0;
        }
    }
`;