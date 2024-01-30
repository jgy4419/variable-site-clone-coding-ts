import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Inner = styled.div`

`;

export const ListContainer = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    border-radius: 40px;
    backdrop-filter: blur(5px);
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const Lists = styled.ul`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const List = styled.li`
    display: flex;
    width: 60%;
    height: 80px;
    background-color: #fff;
    border-radius: 20px;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const ListImg = styled.img`
    width: 50px;
    height: 60px;
    border-radius: 50%;
`;

export const ListContent = styled.div`
    width: 60%;
`;

export const ListTitle = styled.h2`
    font-size: 20px;
`;

export const ListDescription = styled.p`
    font-size: 13px;
    color: grey;
    font-weight: 600;
`;

export const ListIcons = styled.div`
    display: flex;
    gap: 5px;
`;
