import { styled } from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #eee;
`;

export const Inner = styled.div`
    width: 80%;
    height: 100%;
    margin: auto;
`;

export const Contents = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Name = styled.h2`
    font-size: 30px;
    font-weight: 100;
    transition: .5s;
    transform: translateX(-200%);
    opacity: 0;
`;

export const Line = styled.hr`
    width: 40%;
    transition: .5s;
    transform: translateX(-200%);
    opacity: 0;
`;

export const Work = styled.p`
    margin-bottom: 30px;
    color: #e3e3e3;
    transition: .6s;
    transform: translateX(-200%);
    opacity: 0;
`;

export const Content = styled.div`
    width: 10%;
    height: 40%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap: 20px;
    color: #fff;
    border-radius: 100px;
    transition: .3s;
    overflow: hidden;
    &:hover {
        border-radius: 50px;
        width: 25%;
        ${Name} {
            transition: .5s;
            transform: translateX(0%);
            opacity: 1;
        }
        ${Line} {
            transition: .5s;
            transform: translateX(0%);
            opacity: 1;
        }
        ${Work} {
            transition: .6s;
            transform: translateX(0%);
            opacity: 1;
        }
    }
`;