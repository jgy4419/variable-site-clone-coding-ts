import styled from 'styled-components';

export const MainScrollAnimationContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #333;
    text-align: center;
`;

export const MainScrollAnimationInner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const MainScrollMainText = styled.h1`
    // background-color: #fff;
    margin: auto;
    color: #fff;
    font-size: 60px;
`;

export const MainScrollSubText = styled.p`
    margin: auto;
    color: #fff;
    margin-bottom: 5%;
`

export const PartItems = styled.div`
    position: relative;
    width: 20%;
    height: 25%;
    background-color: #2D4356;
    display: flex;
    gap: 10px;
    border-radius: 20px;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    // transition: .5s;
    padding: 20px;
    box-sizing: border-box;
    &:hover {
        // position: absolute;
        display: block;
        width: 100vw;
        height: 60vh;
        transition: .5s;
    }
`;

export const PartItemsContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: auto;
    &:hover > {
        &:not(:hover) {
            // display: none;
            width: 0%;
            height: 0%;
        }
    }
`;

export const Circle = styled.div`
    width: 20px;
    height: 20px;
    background-color: yellow;
    border-radius: 50%;
`;