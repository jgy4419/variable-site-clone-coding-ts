import { styled } from "styled-components";

export const FaceBookPostContainer = styled.section`
    position: relative;
    width: 100%;
    height: 45%;
    margin-top: 10px;
    overflow: scroll;
`;

export const FaceBookPostInner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    over-flow: scroll;
`;

export const Post = styled.div`
    width: 100%;
    min-height: 200px;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    color: #333;
`;

export const PostHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: 5px;
    width: 100%;
    height: 30%;
`;

export const PostImage = styled.img`
    border-radius: 50%;
    border: 2px solid #e3e3e3;
    aspect-ratio: 1/1;
`;

export const PostUserName = styled.p`
    font-size: 14px;
`;

export const PostContent = styled.p`
    margin-top: 20px;
`;

export const PostFooter = styled.footer`
    position: absolute;
    left: 0;
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const PostIconButton = styled.button`
    width: 35%;
    height: 40px;
    background-color: transparent;
    border: 0;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: grey;
    cursor: pointer;
`;
