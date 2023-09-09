import styled from 'styled-components';

export const Card15Container = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
    background-image: url("https://ylabac.kr/wp-content/uploads/2018/11/%EB%B0%B0%EA%B2%BD-%EA%B8%B0%EC%B4%88-%EB%93%9C%EB%A1%9C%EC%9E%89-06.jpg")
`;

export const Card15Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
`;

export const Card15Content = styled.div`
    width: 350px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: transparent;
    backdrop-filter: blur(5px);
    border-radius: 20px;
    color: #fff;
    margin: 50px auto;
    -webkit-text-stroke: 1px #333; 
`;

export const Card15ContentImage = styled.img`
    box-sizing: border-box;
    border-radius: 50%;
    border: 10px solid #e3e3e3;
    aspect-ratio: 1/1;
`;

export const Card15ContentName = styled.h1`
    font-size: 30px;
`;

export const Card15ContentDescription = styled.p`
    font-weight: 600;
    margin-top: -10px;
`;