import { styled } from "styled-components";

export const FaceBookStoryContainer = styled.section`
    position: relative;
    width: 100%;
    height: 25%;
    margin-top: 15px;
    background-color: #fff;
    overflow-x: scroll;
`;

export const FaceBookStoryInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 5px;
    padding: 10px;
    box-sizing: border-box;
`;

export const Story = styled.div`
    min-width: 100px;
    height: 100%;
    border-radius: 10px;
    background-size: cover;
`;

export const StoryTitle = styled.p`
    position: absolute;
    bottom: 15px;
    padding-left: 10px;
    font-size: 15px;
    color: #fff;
`;